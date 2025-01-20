import { ThemeProvider } from '../components/theme-provider'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Discord Justice',
    template: '%s | Discord Justice',
  },
  description: 'Protecting Discord communities and fighting scammers with the power of justice!',
  icons: {
    icon: 'https://github.com/hyuuuka/discord-justice-branding/blob/main/Frame%202147223072%20(1).png?raw=true',
  },
  image: 'https://github.com/hyuuuka/discord-justice-branding/blob/main/Frame%202147223072%20(1).png?raw=true', // Add your image URL here
  themeColor: '#1F3A3D', // Change this to your desired embed color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

