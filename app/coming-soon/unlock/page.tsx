import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

async function unlockSite(formData: FormData) {
  "use server"

  const password = formData.get("password") as string

  if (password === "gemderma") {
    const cookieStore = await cookies()
    // Set cookie with 30 days expiration
    cookieStore.set("site-access", "gemderma", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    redirect("/")
  }

  return { error: "Invalid password" }
}

export default function UnlockPage() {
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

        <form action={unlockSite} className="space-y-4">
          <div>
            <Input type="password" name="password" placeholder="Enter password" className="h-12" required />
          </div>

          <Button type="submit" className="w-full h-12">
            Access Site
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
