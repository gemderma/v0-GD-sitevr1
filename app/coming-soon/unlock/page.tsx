"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function UnlockPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        router.push("/")
        router.refresh()
      } else {
        setError("Invalid password")
      }
    } catch (err) {
      setError("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Image
            src="/gemderma-logo.png"
            alt="GemDerma Beauty"
            width={250}
            height={70}
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="text-3xl font-display font-light mb-2">Site Access</h1>
          <p className="text-sm text-muted-foreground">Enter the password to preview the site</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
              required
            />
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full h-12">
            {isLoading ? "Unlocking..." : "Access Site"}
          </Button>
        </form>

        <div className="text-center pt-4">
          <a href="/coming-soon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to coming soon
          </a>
        </div>
      </div>
    </div>
  )
}
