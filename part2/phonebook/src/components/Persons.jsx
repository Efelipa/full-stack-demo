import PropTypes from 'prop-types';

export const Persons = ({results}) => {
    return (
        <>
            {(results.length !== 0)
            ? <ul>
                {results.map((person) => <li key={person.number}>{person.name}: <strong>{person.number}</strong></li>)}
                </ul>
            : <h3>Contact not found.</h3>}
        </>
    )
};

Persons.propTypes = {
    results: PropTypes.array,
}