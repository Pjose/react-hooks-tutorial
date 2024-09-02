import { memo } from 'react';
import PropTypes from 'prop-types'

const Search = ({ onChange }) => {
    console.log("Search rendered!") // For testing the behavior of the 'memo'
  return (
    <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => onChange(e.target.value)}
    />
  )
}

Search.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default memo(Search)
