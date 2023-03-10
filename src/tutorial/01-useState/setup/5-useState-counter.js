import React, { useState } from "react"

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // reference function
  const resetValue = () => {
    setValue(0)
  }

  // reference complex function
  const delayedIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue(prevState => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>

        {/* Using an inline function */}
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>

        {/* Using a reference function */}
        <button className="btn" onClick={resetValue}>
          Reset
        </button>

        {/* Using an inline function */}
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Counter With SetTimeout</h2>
        <h1>{value}</h1>

        {/* Using an inline function */}
        <button className="btn" onClick={delayedIncrease}>
          Delayed Increment
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
