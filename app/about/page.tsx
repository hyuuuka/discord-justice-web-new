import CallToAction from "@/components/shared/call-to-action"
import { Shield, Users, AlertTriangle, Server } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-slate-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Discord Justice</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-6">
              Discord Justice is a community-driven initiative dedicated to making Discord a safer place by identifying,
              reporting, and removing scammers and rule breakers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p className="text-slate-300 mb-6">
              At Discord Justice, our mission is to create a safer Discord environment by empowering users with the
              knowledge and tools to identify scammers, report rule violations, and protect themselves and their
              communities from harm.
            </p>
            <p className="text-slate-300">
              We believe in fostering a collaborative approach to platform safety, working alongside server moderators,
              Discord's Trust & Safety team, and everyday users to ensure that those who seek to exploit others are
              identified and removed.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Integrity</h4>
                  <p className="text-slate-400">
                    Maintaining the highest standards of evidence and verification before taking action
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Education</h4>
                  <p className="text-slate-400">Empowering users with knowledge to protect themselves and others</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Collaboration</h4>
                  <p className="text-slate-400">Working together with communities and Discord to improve safety</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Transparency</h4>
                  <p className="text-slate-400">Being open about our processes, successes, and challenges</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container bg-slate-950">
        <h2 className="section-title text-center">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="justice-card p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Identify Scammers</h3>
            <p className="text-slate-400">
              We investigate reports of scammers and rule breakers, gathering evidence and verifying claims.
            </p>
          </div>

          <div className="justice-card p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Report Violations</h3>
            <p className="text-slate-400">
              We help users properly report violations to Discord's Trust & Safety team for official action.
            </p>
          </div>

          <div className="justice-card p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Server className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Protect Servers</h3>
            <p className="text-slate-400">
              We provide tools and resources to help server owners protect their communities.
            </p>
          </div>

          <div className="justice-card p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Educate Users</h3>
            <p className="text-slate-400">
              We create educational content to help users recognize and avoid scams and other harmful behavior.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-slate-300 text-center">
            Our approach combines community reporting, thorough investigation, and collaboration with Discord's official
            channels to ensure that rule breakers face appropriate consequences while maintaining fairness and accuracy.
          </p>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex",
              role: "Founder",
              description: "Former Discord moderator with 5+ years experience managing large communities.",
            },
            {
              name: "Jamie",
              role: "Lead Investigator",
              description: "Security specialist with expertise in digital forensics and scam identification.",
            },
            {
              name: "Taylor",
              role: "Community Manager",
              description: "Manages our Discord server and coordinates our volunteer team.",
            },
          ].map((leader) => (
            <div key={leader.name} className="justice-card p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{leader.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
              <p className="text-slate-400 mb-3">{leader.role}</p>
              <p className="text-sm text-slate-300">{leader.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction
        title="Join the Fight Against Scammers"
        description="Whether you're a server owner, moderator, or regular Discord user, there's a place for you in our community."
        buttonText="Get Involved"
        buttonLink="/contact"
        secondaryButtonText="Report a Scammer"
        secondaryButtonLink="/report"
      />
    </div>
  )
}

