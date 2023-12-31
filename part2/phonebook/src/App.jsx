import { useState } from 'react'
import './App.css'
import { Filter } from './components/Filter';
import { ContactForm } from './components/ContactForm';
import { Persons } from './components/Persons';

const App = () => {
  // Setting the hooks
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber ] = useState('');
  const [filter, setFilter] = useState('');

  // Handle Clicks
  const handleChange = (handler) => (e) => {
    handler(e.target.value);
  }
  const addPerson = (e) => {
    e.preventDefault();
    const createPerson = {
      name: newName,
      number: newNumber,
    }
    const personExists = persons.find(person => person.name === createPerson.name);
    const numberExists = persons.find(person => person.number === createPerson.number);

    if(createPerson.name === '' || createPerson.number === '') {
      alert ('You must specify a name and a number to create a contact.')
    } else if(personExists) {
      alert (`${newName} is already added to the phonebook`)
    } else if(numberExists) {
      alert (`The current number is already added to the phonebook`)
    } else {
      let personsCopy = [...persons];
      setPersons(personsCopy.concat(createPerson));
      setNewName('');
      setNewNumber('');
    }
  }
  const filterPerson = (handler) => (e) => {
    handler(e.target.value);
  }
  // Filter methods
  let results = [];
  if(!filter) {
    results = persons;
  } else {
    const filterPersons = persons.filter(person => person.name.toLowerCase().includes(filter))
    results = filterPersons;
  }
  

  return (
    <main>
      <h2>Phonebook</h2>
      <Filter filterPerson={filterPerson} setFilter={setFilter} filter={filter}/>
      <h3>Add a new contact</h3>
      <ContactForm addPerson={addPerson} handleChange={handleChange} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h3>Numbers</h3>
      <Persons results={results}/>
    </main>
  )
}

export default App
