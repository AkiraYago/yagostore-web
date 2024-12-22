import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="spinner-border text-color-1" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner