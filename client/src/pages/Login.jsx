import React from 'react'

function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login