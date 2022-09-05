
import * as React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, subtitle, name }) => {
    
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}

export default FirstApp

FirstApp.propTypes = { 
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired
}

// FirstApp.defaultProps = {
//     // title: 'No title',
//     subtitle: 'No subtitle',
//     name: 'Alicia Hernandez'
// }