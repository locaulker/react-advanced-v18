import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// In React, you wor with the following:
// Youw ill deal with Controlled Inputs
// A "state" value, and an the "onChange" eventHandler

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      }
      setPeople(() => {
        return [...people, person]
      })
      console.log(person)
      setFirstName("")
      setEmail("")
    } else {
      console.log("No form data submitted")
    }
  }

  return (
    <>
      <article>
        {/* Collect data using controlled inputs */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">eMail:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add A Person
          </button>
        </form>

        {/* Displaying the list on the screen */}
        {people.map(person => {
          const { id, firstName, email } = person

          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
