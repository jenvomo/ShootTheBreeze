import React from 'react';

const SessionForm = props => {

  handleSubmit() {

  }

  function signUpItems() {
    return (
      <label>Full Name
          <input />
      </label>

      <label>Display Name
          <input />
      </label>
    )
  }

  return (
    <div>
      <form handleSubmit={handleSubmit}>
        {(props.formType === "Sign Up") ? signUpItems() : null}
        <label>Email
          <input />
        </label>

        <label>Password
          <input />
        </label>

        <button type="submit">{props.formType}</button>
      </form>
    </div>
  )
}