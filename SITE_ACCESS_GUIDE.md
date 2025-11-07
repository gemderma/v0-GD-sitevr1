# GemDerma Beauty - Site Access Guide

## Overview
The GemDerma Beauty website is currently protected with a coming soon page. This guide explains how to access the full site for preview and testing.

---

## For General Visitors

When visitors go to **gemderma.com**, they will see:
- A beautiful coming soon landing page
- A waitlist signup form (First Name, Last Name, Email)
- All submissions are automatically saved to your Notion database

---

## For Team Members & Stakeholders

### How to Access the Full Site

**Option 1: Direct Access URL**
Visit: `https://gemderma.com/coming-soon/unlock`

**Option 2: From Coming Soon Page**
1. Go to gemderma.com
2. Add `/coming-soon/unlock` to the URL
3. Or bookmark: https://gemderma.com/coming-soon/unlock

### Password
\`\`\`
gemderma
\`\`\`

### What Happens After Login
- You'll be redirected to the full homepage
- Access remains active for 30 days
- You can browse all pages normally
- No need to re-enter password during this period

---

## Setting Up Notion Integration

### Step 1: Create Notion Database

1. Go to [Notion](https://notion.so)
2. Create a new database with these **exact** properties:
   - **First Name** (Title type)
   - **Last Name** (Text type)
   - **Email** (Email type)
   - **Date Added** (Date type)

### Step 2: Get Notion API Key

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "+ New integration"
3. Name it "GemDerma Waitlist"
4. Copy the **Internal Integration Token**. This is found under the "Internal Integration Token" section on the integration's page after it's created.
4. Copy the **Internal Integration Token**

### Step 3: Connect Database to Integration

1. Open your Notion database
2. Click the "..." menu (top right)
3. Scroll to "Connections"
4. Click "Add connections"
5. Select "GemDerma Waitlist" integration

### Step 4: Get Database ID

1. Open your Notion database
2. Copy the URL - it looks like:
   \`\`\`
   https://notion.so/workspace/abc123def456?v=...
   \`\`\`
3. The database ID is the part between the last "/" and the "?":
   \`\`\`
   abc123def456
   \`\`\`

### Step 5: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add these two variables:

   **Variable 1:**
   - Name: `NOTION_API_KEY`
   - Value: [Your Integration Token from Step 2]

   **Variable 2:**
   - Name: `NOTION_DATABASE_ID`
   - Value: [Your Database ID from Step 4]

4. Click "Save"
5. Redeploy your site for changes to take effect

---

## Testing the Waitlist

1. Go to gemderma.com (without password)
2. Fill out the waitlist form
3. Submit
4. Check your Notion database - new entry should appear!

---

## Removing the Coming Soon Page

When you're ready to launch publicly:

1. Delete or rename the file: `middleware.ts`
2. Redeploy the site
3. Everyone can now access the full site without password

---

## Troubleshooting

**Waitlist submissions not appearing in Notion?**
- Double-check your Notion API key is correct
- Verify the database ID is accurate
- Ensure the integration is connected to the database
- Check the property names match exactly (case-sensitive)

**Can't access site after entering password?**
- Try clearing browser cookies
- Make sure you're using the exact password: `gemderma`
- Try in an incognito/private browsing window

**Need to change the password?**
- Edit `middleware.ts` and change `'gemderma'` to your new password
- Also update `app/api/unlock/route.ts` with the same password
- Redeploy

---

## Support

For questions or issues, contact your development team.
