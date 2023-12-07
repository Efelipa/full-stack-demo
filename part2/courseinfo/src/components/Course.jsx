//import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => <h3>{title}</h3>;

Header.propTypes = {
    title: PropTypes.string,
}

const Part = ({name, exercises}) => <li>{name}: {exercises}</li>;

Part.propTypes = {
    name: PropTypes.string,
    exercises: PropTypes.number,
}

const Content = ({courses}) => {
    return (
        <ul>
            {courses.map(course => <Part key={course.id} name={course.name} exercises={course.exercises}/>)}
        </ul>
    )
}

Content.propTypes = {
    courses: PropTypes.array,
}

const Total = ({courses}) => {
    return (
        <strong>
            Total of {courses.reduce((acc, num) => {
                acc += num.exercises;
                return acc;
            }, 0)} exercises
        </strong>
    )
}

Total.propTypes = {
    courses: PropTypes.array,
}

const Course = ({course}) => {
    return (
    <main>
        {course.map(c => {
            return (
                <div key={c.id}>
                    <Header title={c.name}/>
                    <Content  courses={c.parts}/>
                    <Total courses={c.parts}/>
                </div>
            )
        })}
    </main>
    )
}

Course.propTypes = {
    course: PropTypes.array,
}

export default Course;
