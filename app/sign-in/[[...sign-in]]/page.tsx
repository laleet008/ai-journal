import React from 'react'

import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="h-screen grid  place-items-center bg-gray-900">
      <SignIn afterSignInUrl="/journal" redirectUrl="/journal" />
    </div>
  )
}

export default SignInPage
