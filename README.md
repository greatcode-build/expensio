# Expensio

A modern expense tracking application built with Next.js, designed to help you manage your finances effectively. Track expenses, create budgets, and visualize your spending patterns with interactive charts.

## ✨ Features

- Secure sign in and sign up with Clerk
- Create and manage multiple budgets with custom icons
- Log expenses and associate them with budgets
- Interactive charts to visualize spending patterns
- Works seamlessly on desktop and mobile devices
- See changes reflected immediately in your dashboard

## 🛠️ Built with

- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `Radix UI, Lucide Icons`
- `PostgreSQL with Drizzle ORM`
- `Clerk`
- `Recharts`
- `Vercel`

## 🚀 Getting Started

### Prerequisites

- `Node.js 18+`
- `PostgreSQL database ([Neon](https://neon.tech/) for serverless PostgreSQL)`
- `Clerk account for authentication`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/expensio.git
   cd expensio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

   # Database
   DATABASE_URL=your_neon_database_url
   ```

4. **Set up the database**

   Run the database migrations:

   ```bash
   npx drizzle-kit push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Usage

1. Sign up for an account or sign in if you already have one
2. Create your first budget from the dashboard
3. Start adding expenses to track your spending
4. View your financial overview with charts and summaries

## 📁 Project Structure

```
expensio/
├── app/                   # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (routes)/          # Protected routes
│   │   └── dashboard/     # Dashboard pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── db/                    # Database configuration and schema
├── drizzle/               # Database migrations
├── lib/                   # Utility functions and actions
└── types/                 # TypeScript type definitions
```

## 🎥 Preview

[![Watch Preview](https://img.shields.io/badge/Click%20to%20Watch-Video-blue)](https://github.com/user-attachments/assets/ee619950-ab9c-4b69-98bd-f096c678af8c)
