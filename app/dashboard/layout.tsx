import type { ReactNode } from "react"
import Link from "next/link"
import { User, Settings, Bell, FileText, Shield, LogOut } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 border-r border-slate-800">
        <div className="p-6">
          <h2 className="text-xl font-bold">My Account</h2>
          <p className="text-sm text-slate-400">Discord Justice Dashboard</p>
        </div>
        <nav className="px-4 pb-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <User size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/reports"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <FileText size={18} />
                My Reports
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/account"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Settings size={18} />
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/notifications"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Bell size={18} />
                Notifications
              </Link>
            </li>
            <li>
              <Link
                href="/report"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Shield size={18} />
                Submit Report
              </Link>
            </li>
            <li className="pt-6">
              <button className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
                <LogOut size={18} />
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-slate-950">
        <div className="container mx-auto py-8 px-4">{children}</div>
      </main>
    </div>
  )
}

