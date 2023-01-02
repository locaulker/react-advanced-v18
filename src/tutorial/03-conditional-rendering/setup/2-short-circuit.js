import React, { useState } from "react"
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)

  // Note: both cases will eveluate to a boolean (true or false)

  // const firstValue = text || "hello world"
  /**
   *  CASE 1: THE || OPERATOR
   *    - text = " ", an empty string
   *    - this is a falsy value and cannot be printed on the screen
   *    - if text  = "true",
   *    - the string after the OR operator can be printed
   */

  // const secondValue = text && "hello world"
  /**
   *  CASE 2: THE && OPERATOR
   *    - both first and second values are truthy (NOT empty)
   *    - text = a string, for the firstValue (NOT an empty)
   *    - text = a string, for the secondValue (NOT an empty)
   *    - therefore, both the first and second values are truthy
   *    - the string AFTER the && operator overwrites the first string
   *    - the second value AFTER the && operator is printed
   */

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>{secondValue}</h2> */}
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
