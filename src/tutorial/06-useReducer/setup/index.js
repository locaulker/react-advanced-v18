import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"
// reducer function
const reducer = (state, action) => {
  if (action.type === "TESTING") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Item Added",
    }
  }
  return state
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
}

const Index = () => {
  const [name, setName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = e => {
    e.preventDefault()
    if (name) {
      dispatch({ type: "TESTING" })
    } else {
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.people.map(person => {
        const { id, name } = person

        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
