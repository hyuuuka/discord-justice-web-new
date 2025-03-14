import Link from "next/link"
import { Shield } from "lucide-react"

export default function PartnersBanner() {
  return (
    <section className="py-12 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Trusted By</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((partner) => (
            <div
              key={partner}
              className="h-24 bg-slate-900 rounded-md flex items-center justify-center border border-slate-800 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center text-slate-500 font-medium">
                <Shield className="h-5 w-5 mr-2 text-blue-500" />
                <span>Partner Server {partner}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/partners" className="text-blue-400 hover:text-blue-300 transition-colors">
            Become a Partner Server
          </Link>
        </div>
      </div>
    </section>
  )
}

