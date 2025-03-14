"use client"

import { useState } from "react"
import { AlertTriangle, Upload, Info, Send } from "lucide-react"

export default function ReportPage() {
  const [reportType, setReportType] = useState<"scam" | "harassment" | "spam" | "other">("scam")

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-slate-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Report a Discord Violation</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300">
              Help us make Discord safer by reporting scammers, spammers, and rule breakers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="justice-card p-6">
            <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Emergency Situations</h3>
            <p className="text-slate-300 mb-4">
              If you're reporting content related to violence, self-harm, or illegal activity that poses an immediate
              threat, please contact:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• Discord Trust & Safety team directly</li>
              <li>• Local law enforcement</li>
              <li>• National suicide prevention hotline if applicable</li>
            </ul>
          </div>
          <div className="justice-card p-6">
            <Info className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Before You Report</h3>
            <p className="text-slate-300 mb-2">Please have the following information ready:</p>
            <ul className="space-y-2 text-slate-300">
              <li>• Discord user ID of the offender</li>
              <li>• Screenshots or evidence of the violation</li>
              <li>• Server where the violation occurred (if applicable)</li>
              <li>• Description of what happened</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Submit a Report</h2>
            <p className="text-slate-300 mb-6">
              Select the appropriate category for your report. All submissions are reviewed by our team and treated
              confidentially.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setReportType("scam")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  reportType === "scam" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Scam/Phishing
              </button>
              <button
                onClick={() => setReportType("harassment")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  reportType === "harassment"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Harassment/Bullying
              </button>
              <button
                onClick={() => setReportType("spam")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  reportType === "spam" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Spam/Unwanted Content
              </button>
              <button
                onClick={() => setReportType("other")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  reportType === "other" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Other Violation
              </button>
            </div>
          </div>

          <form className="justice-card p-8">
            <h3 className="text-xl font-bold mb-6">
              {reportType === "scam" && "Report a Scam or Phishing Attempt"}
              {reportType === "harassment" && "Report Harassment or Bullying"}
              {reportType === "spam" && "Report Spam or Unwanted Content"}
              {reportType === "other" && "Report Other Discord Violation"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Your Discord Username
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="username#0000"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="offender" className="block text-sm font-medium text-slate-300 mb-1">
                Offender's Discord ID/Username
              </label>
              <input
                type="text"
                id="offender"
                placeholder="username#0000 or User ID"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-xs text-slate-400 mt-1">
                You can get a user ID by enabling Developer Mode in Discord settings, then right-clicking on a user and
                selecting "Copy ID"
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="server" className="block text-sm font-medium text-slate-300 mb-1">
                Server Name (if applicable)
              </label>
              <input
                type="text"
                id="server"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
                Detailed Description
              </label>
              <textarea
                id="description"
                rows={5}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe what happened in detail. Include dates, times, and any relevant context."
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Evidence (Screenshots, Messages, etc.)
              </label>
              <div className="border-2 border-dashed border-slate-700 rounded-md p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-slate-500 mb-2" />
                <p className="text-slate-400 mb-2">Drag and drop files here, or click to select files</p>
                <p className="text-xs text-slate-500">Supported formats: PNG, JPG, PDF, TXT (Max 5 files, 10MB each)</p>
                <input type="file" className="hidden" multiple accept=".png,.jpg,.jpeg,.pdf,.txt" />
                <button type="button" className="mt-4 justice-button-secondary text-sm">
                  Select Files
                </button>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                id="consent"
                type="checkbox"
                className="h-4 w-4 bg-slate-800 border-slate-700 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-slate-300">
                I understand that false reports may result in action against my account, and I confirm that all
                information provided is accurate to the best of my knowledge.
              </label>
            </div>

            <button type="submit" className="justice-button-primary flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Submit Report
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

