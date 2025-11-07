import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email } = body

    // Validate input
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Get Notion credentials from environment variables
    const notionToken = process.env.NOTION_API_KEY
    const notionDatabaseId = process.env.NOTION_DATABASE_ID

    if (!notionToken || !notionDatabaseId) {
      console.error("Missing Notion credentials")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Add to Notion database
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: {
          database_id: notionDatabaseId,
        },
        properties: {
          "First Name": {
            title: [
              {
                text: {
                  content: firstName,
                },
              },
            ],
          },
          "Last Name": {
            rich_text: [
              {
                text: {
                  content: lastName,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          "Date Added": {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Notion API error:", errorData)
      throw new Error("Failed to add to Notion")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}
