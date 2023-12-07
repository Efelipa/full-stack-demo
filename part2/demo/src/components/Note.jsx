//import React from 'react';
import PropTypes from 'prop-types';

export const Note = ({content}) => {
    return <li>{content}</li>
}

Note.propTypes = {
content: PropTypes.string,
}
