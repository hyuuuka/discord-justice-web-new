"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "@/components/shared/logo"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Report", href: "/report" },
  { name: "Resources", href: "/resources" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    // Check if we're on a dashboard page to simulate logged in state
    if (typeof window !== "undefined") {
      setIsLoggedIn(window.location.pathname.includes("/dashboard"))
    }
  }, [])

  return (
    <header className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold">DISCORD JUSTICE</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-full flex items-center justify-center">
                  <span className="font-bold">J</span>
                </div>
                <span>My Account</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/reports"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    My Reports
                  </Link>
                  <Link
                    href="/dashboard/account"
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Account Settings
                  </Link>
                  <div className="border-t border-slate-800 my-1"></div>
                  <button
                    onClick={() => {
                      setUserMenuOpen(false)
                      window.location.href = "/"
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white">
                Log in
              </Link>
              <Link href="/register" className="justice-button-primary">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-slate-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <div className="pt-4 border-t border-slate-800 mt-4">
                  <p className="text-sm text-slate-400 mb-2">My Account</p>
                  <Link
                    href="/dashboard"
                    className="block py-2 text-base font-medium text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/reports"
                    className="block py-2 text-base font-medium text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Reports
                  </Link>
                  <Link
                    href="/dashboard/account"
                    className="block py-2 text-base font-medium text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Account Settings
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.location.href = "/"
                    }}
                    className="block py-2 text-base font-medium text-slate-300 hover:text-white w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-4 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="justice-button-secondary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="justice-button-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

