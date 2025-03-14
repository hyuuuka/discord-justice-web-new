import Link from "next/link"
import { Calendar, ArrowRight, AlertCircle } from "lucide-react"

const cases = [
  {
    title: "Nitro Scam Ring Exposed",
    date: "March 1, 2024",
    excerpt:
      "Our team identified and reported a coordinated group running fake Discord Nitro giveaways across multiple servers.",
    slug: "nitro-scam-ring",
    status: "Resolved",
  },
  {
    title: "Account Takeover Scheme Thwarted",
    date: "February 25, 2024",
    excerpt:
      "A sophisticated phishing operation targeting server admins was uncovered and reported to Discord Trust & Safety.",
    slug: "admin-phishing-scheme",
    status: "Under Investigation",
  },
  {
    title: "Crypto Scammer Network Banned",
    date: "February 18, 2024",
    excerpt:
      "A network of accounts promoting fake cryptocurrency giveaways has been identified and banned from multiple servers.",
    slug: "crypto-scammer-network",
    status: "Resolved",
  },
]

export default function RecentCases() {
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title mb-0">Recent Cases</h2>
        <Link href="/cases" className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item) => (
          <article key={item.slug} className="justice-card group">
            <div className="h-48 bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-400/20 group-hover:opacity-75 transition-opacity"></div>
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs px-2 py-1 rounded-md ${
                    item.status === "Resolved" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <AlertCircle className="h-16 w-16 text-blue-500/70" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-slate-400 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                <Link href={`/cases/${item.slug}`}>{item.title}</Link>
              </h3>
              <p className="text-slate-300 mb-4">{item.excerpt}</p>
              <Link
                href={`/cases/${item.slug}`}
                className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
              >
                Read Full Case
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

