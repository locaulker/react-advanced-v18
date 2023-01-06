import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("You submitted Me!")
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">eMail:</label>
            <input type="text" id="email" name="email" />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
