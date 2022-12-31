import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

// second argument

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>github Users</h3>
    </>
  )
}

export default UseEffectSecondArgument
