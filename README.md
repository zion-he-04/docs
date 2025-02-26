📝 Docs - Real-time Collaborative Editor
Live Demo: docs-lime-pi.vercel.app

Docs is a real-time collaborative document editor built with Next.js 15, React, Tailwind CSS. It supports live editing, rich text formatting, and seamless collaboration with features like comments, mentions, and cursor tracking. The platform is backed by Convex for database storage and Liveblocks for real-time synchronization.

🚀 Features
Text Editing – Advanced text formatting with Tiptap
Real-time Collaboration – Instant updates with Liveblocks
Database & Storage – Powered by Convex
Commenting & Mentions – Supports email and in-app notifications
Version Control – Undo/redo history for document changes
Export & Sharing – Supports several file formats (PDF, HTML, TXT, JSON)
Authentication & Workspaces – User and oraganisation profiles
Responsive Design – Designed to work on all devices
And more...

🛠️ Tech Stack
Framework: Next.js 15, React
UI: Tailwind CSS, Shadcn UI
Editor: Tiptap
Real-time Sync: Liveblocks
Database: Convex
Deployment: Vercel

📌 To Do's
Features
Enhanced offline support
Advanced permission settings
AI-powered document suggestions

Fixes
The floating composer for threads is not displaying the submit button properly.
Implement a custom extension for line height.
When removing the currently active document: error is thrown before we are redirected to homepage. This leads to undefined behaviour and we should handle it properly.
