import React from 'react'

const NumResults = ({ quantity }) => {
  return (
    <span className="me-4">
      Results found: {quantity}
    </span>
  )
}

export default NumResults