import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Allow access to the coming-soon page and API routes
  if (request.nextUrl.pathname === "/coming-soon" || request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  // Check for password in cookie
  const password = request.cookies.get("site-access")?.value

  // If password is correct, allow access
  if (password === "gemderma") {
    return NextResponse.next()
  }

  // Redirect to coming soon page
  return NextResponse.redirect(new URL("/coming-soon", request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
}
