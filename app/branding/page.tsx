import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Branding | Discord Justice",
  description: "Brand guidelines and assets for Discord Justice",
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Brand Guidelines</h1>

          {/* Logo Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Logo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Logo</CardTitle>
                  <CardDescription>Use this as the main representation of our brand</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="relative w-48 h-48 bg-white rounded-xl p-4">
                    <Image
                      src="https://github.com/hyuuuka/discord-justice-branding/blob/main/Main-Logo.png?raw=true"
                      alt="Discord Justice Logo"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Icon</CardTitle>
                  <CardDescription>For smaller applications and favicons</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <div className="relative w-48 h-48 bg-white rounded-xl p-4">
                    <Image
                      src="https://github.com/hyuuuka/discord-justice-branding/blob/main/Enhanced-Logo-Transparent.png?raw=true"
                      alt="Discord Justice Icon"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Colors Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-[#4558ff]"></div>
                <p className="font-medium">Primary Blue</p>
                <p className="text-sm text-muted-foreground">#4558FF</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700"></div>
                <p className="font-medium">Gradient</p>
                <p className="text-sm text-muted-foreground">Blue to Purple</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-white dark:bg-zinc-900 border"></div>
                <p className="font-medium">Background</p>
                <p className="text-sm text-muted-foreground">Light/Dark</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-zinc-900 dark:bg-white border"></div>
                <p className="font-medium">Text</p>
                <p className="text-sm text-muted-foreground">Dark/Light</p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Typography</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading Font</p>
                  <p className="text-4xl font-bold">Inter Bold</p>
                  <p className="text-sm text-muted-foreground mt-2">Used for headlines and titles</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Body Font</p>
                  <p className="text-xl">Inter Regular</p>
                  <p className="text-sm text-muted-foreground mt-2">Used for body text and general content</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Usage Guidelines */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Do's</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Use the full logo when possible</li>
                    <li>Maintain clear space around the logo</li>
                    <li>Use approved color combinations</li>
                    <li>Scale proportionally</li>
                    <li>Use high-resolution assets</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Don'ts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Don't modify the logo colors</li>
                    <li>Don't stretch or distort</li>
                    <li>Don't add effects or shadows</li>
                    <li>Don't use on busy backgrounds</li>
                    <li>Don't alter the logo's proportions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

