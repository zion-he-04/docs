# 📝 Docs - Real-time Collaborative Editor

**Live Demo:** [docs-lime-pi.vercel.app](https://docs-lime-pi.vercel.app/)

Docs is a real-time collaborative document editor built with **Next.js 15**, **React**, and **Tailwind CSS**. It supports live editing, text formatting, and collaboration with features such as comments, mentions, and user profiles. The platform is powered by **Convex** for database storage and **Liveblocks** for real-time synchronisation.

## 🚀 Features

- **Text Editing** – Advanced text formatting with Tiptap  
- **Real-time Collaboration** – Instant updates with Liveblocks  
- **Database & Storage** – Backed by Convex  
- **Commenting & Mentions** – Supports email and in-app notifications  
- **Version Control** – Undo/redo history for document changes  
- **Export & Sharing** – Supports multiple file formats (PDF, HTML, TXT, JSON)  
- **Authentication & Workspaces** – User and organisation profiles  
- **Responsive Design** – Optimised for all devices  
- **And more...**  

## 🛠️ Tech Stack

- **Framework:** Next.js 15, React  
- **UI:** Tailwind CSS, Shadcn UI  
- **Editor:** Tiptap  
- **Real-time Sync:** Liveblocks  
- **Database:** Convex  
- **Deployment:** Vercel  

## 📌 To-Do List  

### Features  

- Enhanced offline support  
- Advanced permission settings  
- AI-powered document suggestions  

### Fixes  

- The floating composer for threads is not displaying the submit button properly.  
- Implement a custom extension for line height.  
- When removing the currently active document, an error is thrown before redirection to the homepage. This leads to undefined behaviour and should be handled properly.  
