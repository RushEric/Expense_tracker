import React from 'react'

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <htmlForm>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </htmlForm>
    </>
    )
}

