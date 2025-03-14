import Link from "next/link"
import { ArrowRight, ShieldAlert, Search, UserCheck } from "lucide-react"

const services = [
  {
    name: "Report Scammers",
    description: "Submit evidence of scammers and rule breakers for investigation",
    icon: ShieldAlert,
    bgClass: "from-blue-900/50 to-slate-950",
    link: "/report",
  },
  {
    name: "Scammer Database",
    description: "Search our verified database of known Discord scammers",
    icon: Search,
    bgClass: "from-indigo-900/50 to-slate-950",
    link: "/database",
  },
  {
    name: "Server Verification",
    description: "Get your Discord server verified as a safe community",
    icon: UserCheck,
    bgClass: "from-blue-800/50 to-slate-950",
    link: "/verification",
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.name} className="justice-card group">
            <div className={`h-40 bg-gradient-to-br ${service.bgClass} flex items-center justify-center p-6`}>
              <service.icon className="h-16 w-16 text-blue-400" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/services" className="justice-button-primary">
          View All Services
        </Link>
      </div>
    </section>
  )
}

