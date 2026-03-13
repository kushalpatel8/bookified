# Bookified 📚

Bookified is a modern, full-stack web application built with Next.js that allows users to manage, store, and interact with their book collections. The platform features secure file storage, robust authentication, and AI-powered voice interactions.

## 🚀 Features

* **User Authentication**: Secure user login and identity management using Clerk.
* **Book Management**: Users can upload books and covers, storing the files and their metadata seamlessly.
* **Cloud Storage**: Integration with Vercel Blob for reliable storage of book files and cover images.
* **Database Integration**: Robust data modeling using MongoDB and Mongoose to track book details like author, title, file size, and unique slugs.
* **Voice AI Capabilities**: Integration with Vapi AI (`@vapi-ai/web`) allowing for interactive book personas or voice-driven experiences.
* **Modern UI/UX**: Built with Tailwind CSS, Shadcn UI, and Radix UI components for a fully responsive and accessible design.
* **Search & Discovery**: Browse recent books via a grid interface and filter through the collection using the built-in search functionality.

## 🛠️ Tech Stack

* **Framework**: Next.js (App Router)
* **Library**: React
* **Database**: MongoDB & Mongoose
* **Authentication**: Clerk
* **Storage**: Vercel Blob
* **Voice/AI**: Vapi AI
* **Styling**: Tailwind CSS
* **Components**: Shadcn UI, Radix UI
* **Form Handling & Validation**: React Hook Form, Zod

## 📋 Prerequisites

Ensure you have the following installed on your local machine:
* Node.js (v20 or higher)
* npm, yarn, pnpm, or bun

You will also need to set up accounts and obtain API keys for:
* MongoDB
* Clerk
* Vercel Blob
* Vapi AI

## ⚙️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd bookified
Install dependencies:

Bash
npm install
# or
yarn install
Set up environment variables:
Create a .env.local file in the root directory and add your necessary environment variables (e.g., Clerk keys, MongoDB URI, Vercel Blob tokens, and Vapi keys).

Run the development server:

Bash
npm run dev
# or
yarn dev
Open the application:
Navigate to http://localhost:3000 in your browser to see the result.

📁 Project Structure
Here is an overview of the core project directories and their purposes:

Plaintext
bookified/
├── app/                        # Next.js App Router core pages and API routes
│   ├── (root)/                 # Main layout group (landing page, add new book)
│   ├── api/                    # Backend API routes (file uploads, Vapi webhooks/search)
│   ├── books/[slug]/           # Dynamic routes for individual book details
│   ├── subscriptions/          # Subscription management interface
│   └── layout.tsx / globals.css# Global layout wrapper and CSS
├── components/                 # Reusable React components
│   ├── ui/                     # Shadcn UI and Radix primitives (buttons, dialogs, forms)
│   └── ...                     # Custom components (BookCard, FileUploader, VapiControls)
├── database/                   # Database logic and ORM setup
│   ├── models/                 # Mongoose schemas (book, book-segment, voice-session)
│   └── mongoose.ts             # MongoDB connection utility
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts           # Responsive design helper
│   ├── useSubscription.ts      # Subscription state management
│   └── useVapi.ts              # Voice AI integration hook
├── lib/                        # Utility functions and server actions
│   ├── actions/                # Next.js Server Actions (book.actions, session.actions)
│   ├── utils.ts                # General helper utilities (e.g., class merging)
│   └── zod.ts                  # Zod validation schemas for API and form integrity
├── public/                     # Static assets (images, icons, SVGs)
│   └── assets/                 # App banners, logos, and UI illustrations
└── [Config Files]              # package.json, next.config.ts, tailwind/postcss config, etc.
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page
