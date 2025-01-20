"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTheme } from './theme-provider'
import { Moon, Sun, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield size={36} className="text-primary" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">Discord Justice</span>
          </Link>
          <nav className="flex items-center gap-8">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Protection</Link></li>
              <li><Link href="/reports" className="text-sm font-medium hover:text-primary transition-colors">Reports</Link></li>
              <li><Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">Docs</Link></li>
            </ul>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-10 h-10"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-6"
            >
              Join Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

