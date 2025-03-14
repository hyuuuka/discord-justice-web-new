import Link from "next/link"
import { Twitter, DiscIcon as Discord, Youtube, Github } from "lucide-react"
import Logo from "@/components/shared/logo"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">DISCORD JUSTICE</span>
            </Link>
            <p className="text-slate-400 text-sm">
              A community dedicated to identifying, reporting, and banishing scammers and rule breakers from Discord
              servers.
            </p>
            <p className="text-slate-400 text-sm mt-2">Email: contact@discordjustice.org</p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/DiscordJustice"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://discord.gg/discordjustice"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Discord size={20} />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://github.com/DiscordJustice"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://youtube.com/DiscordJustice"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-slate-400 hover:text-white transition-colors">
                  Report a Scammer
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Join the Team
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-400 hover:text-white transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-400 hover:text-white transition-colors">
                  Member Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-slate-400 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest updates on scam prevention and Discord safety.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="justice-button-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Discord Justice. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

