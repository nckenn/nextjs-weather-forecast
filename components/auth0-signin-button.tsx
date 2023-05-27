"use client"

import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { signIn } from "next-auth/react"

const Auth0SignInButton = () => {

  return <>
    <Button
        size="lg"
        onClick={() => signIn('auth0')}
    >
        <LogIn className="mr-2 h-4 w-4" /> Login with Auth0
    </Button>
  </>
}

export default Auth0SignInButton