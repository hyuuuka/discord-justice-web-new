"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, AlertTriangle, CheckCircle, Clock, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "reports" | "activity">("overview")

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="flex border-b border-slate-800 mb-8">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 font-medium ${
            activeTab === "overview" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-white"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("reports")}
          className={`px-4 py-2 font-medium ${
            activeTab === "reports" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-white"
          }`}
        >
          My Reports
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          className={`px-4 py-2 font-medium ${
            activeTab === "activity" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-white"
          }`}
        >
          Recent Activity
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="justice-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="font-medium mb-1">Total Reports</h3>
              <p className="text-sm text-slate-400">Reports you've submitted</p>
            </div>

            <div className="justice-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-medium mb-1">Resolved</h3>
              <p className="text-sm text-slate-400">Successfully resolved reports</p>
            </div>

            <div className="justice-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-yellow-900/30 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-400" />
                </div>
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-medium mb-1">Pending</h3>
              <p className="text-sm text-slate-400">Reports under investigation</p>
            </div>
          </div>

          <div className="justice-card p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/report" className="justice-button-primary text-center">
                Submit New Report
              </Link>
              <Link href="/dashboard/reports" className="justice-button-secondary text-center">
                View My Reports
              </Link>
              <Link href="/resources" className="justice-button-secondary text-center">
                Safety Resources
              </Link>
              <Link href="/community" className="justice-button-secondary text-center">
                Community Events
              </Link>
            </div>
          </div>

          <div className="justice-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Reports</h2>
              <Link href="/dashboard/reports" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Nitro Scam Report</h3>
                    <p className="text-xs text-slate-400">Submitted on March 1, 2024</p>
                  </div>
                </div>
                <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">Resolved</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-900/30 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Harassment Report</h3>
                    <p className="text-xs text-slate-400">Submitted on February 25, 2024</p>
                  </div>
                </div>
                <span className="text-xs bg-yellow-900/30 text-yellow-400 px-2 py-1 rounded">Under Review</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "reports" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">My Reports</h2>
            <Link href="/report" className="justice-button-primary">
              New Report
            </Link>
          </div>

          <div className="justice-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Report Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <span>Nitro Scam</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-300">March 1, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400">Resolved</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/dashboard/reports/1" className="text-blue-400 hover:text-blue-300 transition-colors">
                        View Details
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <span>Harassment</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-300">February 25, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/30 text-yellow-400">
                        Under Review
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/dashboard/reports/2" className="text-blue-400 hover:text-blue-300 transition-colors">
                        View Details
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <span>Crypto Scam</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-300">February 18, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900/30 text-green-400">Resolved</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/dashboard/reports/3" className="text-blue-400 hover:text-blue-300 transition-colors">
                        View Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "activity" && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Recent Activity</h2>

          <div className="justice-card p-6">
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-300">
                    <span className="font-medium">Report Resolved:</span> Your report about a Nitro scam has been
                    verified and action has been taken.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">March 3, 2024 • 2:45 PM</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-300">
                    <span className="font-medium">Report Submitted:</span> You submitted a new report about harassment
                    in a Discord server.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">February 25, 2024 • 11:20 AM</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 bg-yellow-900/30 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-300">
                    <span className="font-medium">Status Update:</span> Your report about a cryptocurrency scam is now
                    under investigation.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">February 19, 2024 • 3:15 PM</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-300">
                    <span className="font-medium">Report Submitted:</span> You submitted a new report about a
                    cryptocurrency scam.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">February 18, 2024 • 9:45 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

