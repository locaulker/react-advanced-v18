import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

// second argument

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const githubUsers = await response.json()
    setUsers(githubUsers)
    console.log(githubUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>github Users</h3>
      <ul className="users">
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectSecondArgument
