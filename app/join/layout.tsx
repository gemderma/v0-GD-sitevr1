import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join GemDerma | Korean Derm-Level Skincare",
  description: "Be the first to experience Korean derm-level care at home. Sign up for exclusive updates, early access, and special offers from GemDerma Beauty.",
  openGraph: {
    title: "Join GemDerma | Korean Derm-Level Skincare",
    description: "Be the first to experience Korean derm-level care at home.",
    type: "website",
  },
}

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
