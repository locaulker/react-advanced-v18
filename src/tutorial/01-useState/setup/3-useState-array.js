import React from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = id => {
    /**
     * Collect all items in the rederedPeople array
     * that do not match the id that is passed from
     * the removeItem function when clicked
     */
    const renderedPeople = people.filter(person => person.id !== id)
    setPeople(renderedPeople)
  }

  return (
    <>
      {people.map(person => {
        const { id, name } = person

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All Items
      </button>
    </>
  )
}

export default UseStateArray
