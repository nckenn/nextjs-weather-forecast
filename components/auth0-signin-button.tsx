"use client"

import { useSearchParams } from 'next/navigation'
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"

const Auth0SignInButton = () => {

  const { data: session } = useSession()

  return <>
    {
      !session ? (
        <Button
            size="lg"
            onClick={() => signIn('auth0')}
        >
            <Icons.auth className="mr-2 h-4 w-4" /> Login with Auth0
        </Button>
      ) : ""
    }
  </>
}

export default Auth0SignInButton