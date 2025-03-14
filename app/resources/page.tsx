import Link from "next/link"
import { BookOpen, FileText, AlertTriangle, Shield, Video, Download, ExternalLink, Users } from "lucide-react"
import CallToAction from "@/components/shared/call-to-action"

const resourceCategories = [
  {
    title: "Scam Awareness",
    icon: AlertTriangle,
    resources: [
      { title: "Common Discord Scams Guide", type: "Article", link: "/resources/common-scams" },
      { title: "How to Spot a Nitro Scam", type: "Video", link: "/resources/nitro-scams" },
      { title: "Cryptocurrency Scams on Discord", type: "Article", link: "/resources/crypto-scams" },
      { title: "Fake Giveaway Red Flags", type: "Checklist", link: "/resources/giveaway-scams" },
    ],
  },
  {
    title: "Discord Safety",
    icon: Shield,
    resources: [
      { title: "Account Security Best Practices", type: "Guide", link: "/resources/account-security" },
      { title: "Setting Up Two-Factor Authentication", type: "Tutorial", link: "/resources/2fa-setup" },
      { title: "Privacy Settings Guide", type: "Article", link: "/resources/privacy-settings" },
      { title: "Safe Direct Message Practices", type: "Checklist", link: "/resources/dm-safety" },
    ],
  },
  {
    title: "Server Moderation",
    icon: FileText,
    resources: [
      { title: "Effective Moderation Tools", type: "Guide", link: "/resources/mod-tools" },
      { title: "Setting Up Verification Systems", type: "Tutorial", link: "/resources/verification-setup" },
      { title: "Anti-Raid Measures", type: "Article", link: "/resources/anti-raid" },
      { title: "Moderator Training Resources", type: "Course", link: "/resources/mod-training" },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-slate-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Safety Resources</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300">
              Educational materials to help you identify scams, protect your account, and keep your Discord community
              safe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="justice-card p-6 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Educational Guides</h3>
            <p className="text-slate-400">
              Comprehensive guides on Discord safety, scam prevention, and best practices for users and moderators.
            </p>
          </div>

          <div className="justice-card p-6 text-center">
            <Video className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
            <p className="text-slate-400">
              Visual demonstrations of security features, scam identification, and moderation techniques.
            </p>
          </div>

          <div className="justice-card p-6 text-center">
            <Download className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Downloadable Tools</h3>
            <p className="text-slate-400">
              Checklists, templates, and resources to help you implement safety measures in your server.
            </p>
          </div>
        </div>

        {resourceCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-6">
              <category.icon className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <Link
                  key={resourceIndex}
                  href={resource.link}
                  className="justice-card p-6 hover:border-blue-500 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{resource.title}</h3>
                      <span className="inline-block bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <ExternalLink className="h-5 w-5 text-blue-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="justice-card p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Official Discord Resources</h2>
          <p className="text-slate-300 mb-6">
            Discord provides official documentation and resources to help users stay safe on the platform. We recommend
            familiarizing yourself with these official resources in addition to our community guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://discord.com/safety"
              target="_blank"
              rel="noopener noreferrer"
              className="justice-card p-4 hover:border-blue-500 transition-all flex items-center"
            >
              <Shield className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-bold">Discord Safety Center</h3>
                <p className="text-sm text-slate-400">Official safety resources from Discord</p>
              </div>
            </a>

            <a
              href="https://discord.com/guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="justice-card p-4 hover:border-blue-500 transition-all flex items-center"
            >
              <FileText className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-bold">Community Guidelines</h3>
                <p className="text-sm text-slate-400">Discord's official rules and guidelines</p>
              </div>
            </a>

            <a
              href="https://discord.com/moderation"
              target="_blank"
              rel="noopener noreferrer"
              className="justice-card p-4 hover:border-blue-500 transition-all flex items-center"
            >
              <Users className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-bold">Discord Moderator Academy</h3>
                <p className="text-sm text-slate-400">Resources for server moderators</p>
              </div>
            </a>

            <a
              href="https://support.discord.com/hc/en-us/articles/360034842871-How-do-I-report-a-user-"
              target="_blank"
              rel="noopener noreferrer"
              className="justice-card p-4 hover:border-blue-500 transition-all flex items-center"
            >
              <AlertTriangle className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-bold">How to Report a User</h3>
                <p className="text-sm text-slate-400">Official guide on reporting violations</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CallToAction
        title="Help Keep Discord Safe"
        description="Join our community to stay updated on the latest scams and contribute to making Discord a safer place for everyone."
        buttonText="Join Our Server"
        buttonLink="https://discord.gg/discordjustice"
        secondaryButtonText="Report a Scammer"
        secondaryButtonLink="/report"
      />
    </div>
  )
}

