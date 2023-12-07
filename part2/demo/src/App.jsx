import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import { Note } from './components/Note';
import axios from 'axios';




// Components
const Button = ({clickHandler, text, style}) => <button onClick={clickHandler} className={style}>{text}</button>

Button.propTypes = {
  clickHandler: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.string,
}

const App = () => {
  const [actualNotes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoad] = useState()
  const API_NOTES = 'http://localhost:3001/notes';
  const hookHandle = () => {
    setLoad(true)
    setInterval(() => {
      axios.get(API_NOTES)
        .then(response => {
          setNotes(response.data)
        })
        setLoad(false);
    }, 3000);
  }

  useEffect(hookHandle, [])

  // Button events
  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const addNote = e => {
    e.preventDefault();
    const noteObjectToAdd = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
    axios.post(API_NOTES, noteObjectToAdd)
      .then(response => {
        setNotes(actualNotes.concat(response.data));
        setNewNote('');
      })

  };
  const showImportantNotes = () => {
    setShowAll(!showAll)
  }

  // Filtered components
  const notesToShow = showAll 
    ? actualNotes
    : actualNotes.filter(note => note.important === true);

  if(loading === true) {return (
    <main className="sphere-container">
      <div className="sphere sphere1"></div>
      <div className="sphere sphere2"></div>
      <div className="sphere sphere3"></div>
    </main>
  )}
  else {
    return (
      <main>
        {(showAll) 
          ? <Button clickHandler={showImportantNotes} text={'Show important notes'} style={'btn show-important'}/> 
          : <Button clickHandler={showImportantNotes} text={'Show All'} style={'btn show-all'}/>
        }
        <h1>Notes</h1>
        <ul>
          {notesToShow.map((note) => <Note key={note.id} {...note}/>)}
        </ul>
        <form onSubmit={addNote}>
          <input onChange={handleChange} value={newNote}/>
          <button type='submit'>Save</button>
        </form>
      </main>
    )
  }
}

App.propTypes = {
  notes: PropTypes.array,
}

export default App
