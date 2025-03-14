import Link from "next/link"
import Logo from "@/components/shared/logo"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">#FightingForJustice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-slate-300">
              A community dedicated to identifying, reporting, and banishing scammers and rule breakers from Discord
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/report" className="justice-button-primary">
                Report a Scammer
              </Link>
              <Link href="/resources" className="justice-button-secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-400/30 rounded-full filter blur-xl"></div>
              <Logo className="w-64 h-64 animate-float relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

