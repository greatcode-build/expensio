# Expensio

A modern expense tracking application built with Next.js, designed to help you manage your finances effectively. Track expenses, create budgets, and visualize your spending patterns with interactive charts.

## ✨ Features

- **User Authentication**: Secure sign-in and sign-up with Clerk
- **Budget Management**: Create and manage multiple budgets with custom icons
- **Expense Tracking**: Log expenses and associate them with budgets
- **Visual Analytics**: Interactive charts to visualize spending patterns
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: See changes reflected immediately in your dashboard

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (we recommend [Neon](https://neon.tech/) for serverless PostgreSQL)
- Clerk account for authentication

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
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

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

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Charts**: Recharts
- **Deployment**: Vercel (recommended)
