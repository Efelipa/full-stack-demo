import './App.css'
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

Header.propTypes = {
  course: PropTypes.string,
}

const Parts = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

Parts.propTypes = {
  name: PropTypes.string,
  exercises: PropTypes.number,
}
const Content = (props) => {
  return (
    <>
      <Parts name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Parts name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Parts name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

Content.propTypes = {
  parts: PropTypes.object.isRequired,
}

const Total = (props) => {
  const courses = props.parts;
  return (
    <strong>
      Exercises in total {courses[0].exercises + courses[1].exercises + courses[2].exercises}
    </strong>
  )
}

Total.propTypes = {
  parts: PropTypes.object.isRequired,
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App
