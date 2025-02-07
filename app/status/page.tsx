import Header from "@/components/header"
import Footer from "@/components/footer"
import { BotStatus } from "@/components/bot-status"

export const metadata = {
  title: "Bot Status | Discord Justice",
  description: "Check the current operational status of the Discord Justice bot",
}

export default function StatusPage() {
  // In a real-world scenario, you'd fetch this data from an API or database
  const botStatus = {
    status: "maintenance" as const,
    lastUpdated: new Date().toLocaleString(),
    description: "",
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gradient">System Status</h1>
          <BotStatus {...botStatus} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

