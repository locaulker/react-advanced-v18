import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log("useEffect Called")
    document.title = `New Messages(${value})`
  }, [])

  console.log("Render component")
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase Value
      </button>
    </>
  )
}

export default UseEffectBasics
