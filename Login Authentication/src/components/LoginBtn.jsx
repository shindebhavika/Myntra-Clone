import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function LoginBtn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
  )
  )
}

export default LoginBtn