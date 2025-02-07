import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"

type StatusType = "operational" | "maintenance" | "incident"

interface BotStatusProps {
  status: StatusType
  lastUpdated: string
  description: string
}

const statusConfig = {
  operational: {
    color: "bg-green-500",
    icon: CheckCircle,
    text: "Operational",
  },
  maintenance: {
    color: "bg-yellow-500",
    icon: AlertTriangle,
    text: "Maintenance",
  },
  incident: {
    color: "bg-red-500",
    icon: XCircle,
    text: "Incident",
  },
}

export function BotStatus({ status, lastUpdated, description }: BotStatusProps) {
  const { color, icon: Icon, text } = statusConfig[status]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Discord Justice Bot Status</CardTitle>
        <CardDescription className="text-lg">Current operational status of our bot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Badge className={`${color} text-white px-4 py-2 text-lg`}>
            <Icon className="w-6 h-6 mr-2" />
            {text}
          </Badge>
          <span className="text-muted-foreground">Last updated: {lastUpdated}</span>
        </div>
        <p className="text-xl">{description}</p>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What this means:</h3>
          <p>
            {status === "operational" &&
              "All systems are functioning normally. Users can interact with the bot without any issues."}
            {status === "maintenance" &&
              "We're currently performing scheduled maintenance. Some features may be temporarily unavailable."}
            {status === "incident" &&
              "We're experiencing some issues. Our team is working to resolve them as quickly as possible."}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

