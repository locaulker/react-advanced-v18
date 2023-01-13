import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"

// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added"
    }
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" }
  }
  // return state
  throw new Error("Action type does not match")
}

// the initial state
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
}

const Index = () => {
  const [name, setName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = e => {
    e.preventDefault()

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
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
