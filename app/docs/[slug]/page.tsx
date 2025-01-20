import type { Metadata } from "next"
import { getDocContent } from "@/lib/docs"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const content = await getDocContent(`${params.slug}.md`)
    const title = content.match(/<h1>(.*?)<\/h1>/)?.[1] || "Documentation"
    return {
      title: `${title} | Discord Justice`,
    }
  } catch (error) {
    return {
      title: "Documentation | Discord Justice",
    }
  }
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  try {
    const content = await getDocContent(`${params.slug}.md`)
    return (
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  } catch (error) {
    notFound()
  }
}

