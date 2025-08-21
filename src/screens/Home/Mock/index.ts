import Widget from "@/domain/models/Widget.model"
import {
  Wallet,
  ArrowDownToLine
} from 'lucide-react';
export const FAVORITE_DATA = [
  {
    title: "Favorite 1",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 2",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 3",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 4",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 5",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 6",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 7",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  },
  {
    title: "Favorite 8",
    value: 1000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
  }
]

export const BALANCE_DATA: Widget = {
    title: "Total Balance",
    value: 10000,
    description: "The total balance across all accounts",
    icon: Wallet,
    badget: 36.5
}

export const INCOME_DATA: Widget = {
    title: "Total Income",
    value: 3000,
    description: "The total income across all accounts",
    icon: Wallet,
    badget: 16.5
}

export const EXPENSE_DATA: Widget = {
    title: "Total Expense",
    value: 5000,
    description: "The total expense across all accounts",
    icon: Wallet,
    badget: -6.5
}