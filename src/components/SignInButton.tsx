"use client"

import { FC, useState } from "react"
import Button from "@/ui/Button"
import { signIn } from "next-auth/react"
import { toast } from "@/ui/Toast"

interface SignInButtonProps {}
const SignInButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
      const res = await signIn("google")
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
