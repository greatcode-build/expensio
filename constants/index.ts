import { LayoutDashboard, Wallet, ReceiptText, Sparkles } from "lucide-react";

export const sideNavItems = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { id: 2, name: "Budgets", icon: Wallet, path: "/dashboard/budgets" },
  { id: 3, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
  { id: 4, name: "Upgrade", icon: Sparkles, path: "/dashboard/upgrade" },
];
