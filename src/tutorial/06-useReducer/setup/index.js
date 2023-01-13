import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"

// reducer function
import { reducer } from "./reducer"

// the initial state
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
      const newItem = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="submit"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
