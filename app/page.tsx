import Hero from "@/components/home/hero"
import ServicesOverview from "@/components/home/services-overview"
import ResourcesPreview from "@/components/home/resources-preview"
import RecentCases from "@/components/home/recent-cases"
import PartnersBanner from "@/components/home/partners-banner"
import CallToAction from "@/components/shared/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <ServicesOverview />
      <ResourcesPreview />
      <RecentCases />
      <PartnersBanner />
      <CallToAction
        title="Join Discord Justice"
        description="Become part of our community fighting against scammers and rule breakers on Discord."
        buttonText="Join Now"
        buttonLink="/contact"
      />
    </div>
  )
}

