import type { Metadata } from "next"
import { getDocContent } from "@/lib/docs"

export const metadata: Metadata = {
  title: "Documentation | Discord Justice",
  description: "Learn how to use the Discord Justice bot and keep your server safe.",
}

export default async function DocsPage() {
  const content = await getDocContent("getting-started.md")

  return (
    <div className="prose dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

