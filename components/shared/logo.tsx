import { Shield, AlertTriangle } from "lucide-react"

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Shield className="w-full h-full text-blue-600 animate-shield-glow" />
      <AlertTriangle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 text-white" />
    </div>
  )
}

