import Link from "next/link"
import { BookOpen, FileText, AlertTriangle, Shield, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Common Scam Types",
    description: "Learn to identify the most common Discord scams and how they operate",
    icon: AlertTriangle,
    link: "/resources/scam-types",
  },
  {
    title: "Discord Safety Guide",
    description: "Comprehensive guide to staying safe on Discord and protecting your account",
    icon: Shield,
    link: "/resources/safety-guide",
  },
  {
    title: "Discord Rules & TOS",
    description: "Understand Discord's Terms of Service and Community Guidelines",
    icon: FileText,
    link: "/resources/discord-rules",
  },
  {
    title: "Educational Resources",
    description: "Videos, articles, and tools to help you stay safe online",
    icon: BookOpen,
    link: "/resources/education",
  },
]

export default function ResourcesPreview() {
  return (
    <section className="section-container bg-slate-950">
      <h2 className="section-title text-center">Safety Resources</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <div key={resource.title} className="justice-card p-6 flex flex-col h-full">
            <div className="mb-4">
              <resource.icon className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{resource.description}</p>

            <Link href={resource.link} className="text-blue-500 hover:text-blue-400 inline-flex items-center">
              Read More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/resources" className="justice-button-primary">
          View All Resources
        </Link>
      </div>
    </section>
  )
}

