import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="h-screen grid place-items-center bg-gray-900">
      <SignUp afterSignInUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
