import Link from "next/link"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CallToActionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900/50 to-slate-950 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={buttonLink} className="justice-button-primary">
            {buttonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link href={secondaryButtonLink} className="justice-button-secondary">
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

