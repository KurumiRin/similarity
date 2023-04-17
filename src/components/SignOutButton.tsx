"use client"

import { FC, useState } from "react"
import Button from "@/ui/Button"
import { signOut } from "next-auth/react"
import { toast } from "@/ui/Toast"

interface SignOutButtonProps {}
const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    setIsLoading(true)
    try {
      const res = await signOut()
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
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  )
}

export default SignOutButton
