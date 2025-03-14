import Link from "next/link"
import { Users, MessageSquare, Award, Calendar, ArrowRight, Shield, BookOpen } from "lucide-react"
import CallToAction from "@/components/shared/call-to-action"

const communityStats = [
  { label: "Community Members", value: "5,000+", icon: Users },
  { label: "Scammers Reported", value: "1,200+", icon: MessageSquare },
  { label: "Trusted Servers", value: "150+", icon: Award },
]

const upcomingEvents = [
  {
    title: "Discord Safety Workshop",
    date: "March 20, 2024",
    time: "7:00 PM UTC",
    description: "Learn essential safety tips and how to protect your Discord account from common threats.",
    link: "/events/safety-workshop",
  },
  {
    title: "Moderator Training Session",
    date: "March 25, 2024",
    time: "6:00 PM UTC",
    description: "Advanced training for server moderators on identifying and handling scammers and rule breakers.",
    link: "/events/mod-training",
  },
  {
    title: "Community Town Hall",
    date: "April 2, 2024",
    time: "8:00 PM UTC",
    description: "Monthly community meeting to discuss recent cases, updates, and answer questions.",
    link: "/events/town-hall",
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-slate-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Join Our Community</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-6">
              Connect with like-minded individuals dedicated to making Discord a safer place for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://discord.gg/discordjustice" className="justice-button-primary">
                Join Our Discord
              </Link>
              <Link href="/resources" className="justice-button-secondary">
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="justice-card p-8 text-center">
              <stat.icon className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Join Our Community?</h2>
            <p className="text-slate-300 mb-6">
              Discord Justice is more than just a reporting platform - we're a community of users committed to making
              Discord safer for everyone. By joining our server, you'll connect with others who share your commitment to
              fighting scammers and rule breakers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <p className="text-slate-300">Stay updated on the latest scam techniques and how to avoid them</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <p className="text-slate-300">Learn from experienced moderators and security experts</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <p className="text-slate-300">Contribute to investigations and help identify scammers</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <p className="text-slate-300">Access exclusive resources and tools for Discord safety</p>
              </li>
            </ul>
          </div>
          <div className="justice-card overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
              <h3 className="text-2xl font-bold">Community Guidelines</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <p className="text-slate-300">Be respectful and supportive of all community members</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <p className="text-slate-300">Only share verified information about potential scammers</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <p className="text-slate-300">Follow proper reporting procedures and evidence collection</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <p className="text-slate-300">Maintain confidentiality when handling sensitive information</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <p className="text-slate-300">Focus on education and prevention, not harassment or revenge</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-slate-950">
        <h2 className="section-title text-center">Upcoming Community Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="justice-card group">
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {event.date} • {event.time}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  <Link href={event.link}>{event.title}</Link>
                </h3>
                <p className="text-slate-300 mb-4">{event.description}</p>
                <Link
                  href={event.link}
                  className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/events" className="justice-button-primary">
            View All Events
          </Link>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title text-center">Community Roles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="justice-card p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-full mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Investigators</h3>
            <p className="text-slate-300 mb-4">
              Experienced members who review reports, gather evidence, and help verify scammer identities.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Review and validate user reports</li>
              <li>• Document evidence of rule violations</li>
              <li>• Coordinate with Discord Trust & Safety</li>
            </ul>
          </div>

          <div className="justice-card p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-full mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Educators</h3>
            <p className="text-slate-300 mb-4">
              Members who create resources, guides, and educational content about Discord safety.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Create safety guides and tutorials</li>
              <li>• Host workshops and training sessions</li>
              <li>• Answer questions from the community</li>
            </ul>
          </div>

          <div className="justice-card p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-full mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Moderators</h3>
            <p className="text-slate-300 mb-4">
              Trusted members who maintain our community standards and help new members.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Enforce community guidelines</li>
              <li>• Welcome and assist new members</li>
              <li>• Moderate discussions and channels</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="justice-button-primary">
            Apply for a Role
          </Link>
        </div>
      </section>

      <CallToAction
        title="Ready to Make Discord Safer?"
        description="Join our community today and help us in our mission to identify and report scammers and rule breakers."
        buttonText="Join Our Discord"
        buttonLink="https://discord.gg/discordjustice"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </div>
  )
}

