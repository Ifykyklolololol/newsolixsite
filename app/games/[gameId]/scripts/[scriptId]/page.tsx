"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import KeySystemModal from "@/components/key-system-modal"
import FeatureList from "@/components/feature-list"

// Import the shared game data
import { games } from "@/lib/game-data"

interface ScriptPageProps {
  params: {
    gameId: string
    scriptId: string
  }
}

export default function ScriptPage({ params }: ScriptPageProps) {
  const [copied, setCopied] = useState(false)
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false)

  const game = games.find((g) => g.id === params.gameId)
  if (!game) {
    console.error(`Game not found: ${params.gameId}`)
    notFound()
  }

  const script = game.scripts.find((s) => s.id === params.scriptId)
  if (!script) {
    console.error(`Script not found: ${params.scriptId} in game ${params.gameId}`)
    notFound()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()`,
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeySystemSelect = (url: string) => {
    window.open(url, "_blank")
    setIsKeyModalOpen(false)
  }

  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <div className="mb-6 animate-slide-up">
          <Link
            href={`/games/${params.gameId}`}
            className="text-pink-500 hover:text-pink-600 flex items-center hover-scale"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {game.title}
          </Link>
        </div>

        <div className="card p-6 animate-fade-in">
          <h1 className="text-2xl font-bold mb-4 gradient-text">{script.name}</h1>
          {game.tags && game.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-gray-600 mb-6">{script.description}</p>

          {/* Premium Key Option */}
          <div
            className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-3/4">
                <h3 className="text-lg font-semibold mb-2">Skip the Key System</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Don't want to go through the key system? Purchase a premium key for instant access.
                </p>
                <a
                  href="https://solixhub.sellsn.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors text-sm hover-scale"
                >
                  Get Premium Keys
                </a>
              </div>
              <div className="w-full sm:w-1/4 flex justify-center">
                <div className="animate-float">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <FeatureList features={script.features} />
          </div>

          {script.keyRequired && (
            <div
              className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center text-amber-700 font-medium mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-base">Key Required</span>
              </div>
              <p className="text-amber-600">
                This script requires a key to use. Click the button below to get your free key.
              </p>
              <div className="mt-4">
                <button onClick={() => setIsKeyModalOpen(true)} className="btn-secondary hover-scale">
                  Get Free Key
                </button>
              </div>
            </div>
          )}

          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Script Code</h2>
              <button
                onClick={copyToClipboard}
                className="text-pink-500 hover:text-pink-600 flex items-center hover-scale"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
            <div className="code-block shimmer">
              <pre>
                loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()
              </pre>
            </div>
          </div>

          <div
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-lg font-semibold mb-2">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li className="animate-fade-in" style={{ animationDelay: "0.55s" }}>
                Copy the loadstring using the "Copy Code" button above.
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Open your Roblox exploit/executor.
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "0.65s" }}>
                Paste the loadstring into your executor.
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
                Join the game and execute the script.
              </li>
              {script.keyRequired && (
                <li className="animate-fade-in" style={{ animationDelay: "0.75s" }}>
                  When prompted, complete the free key system to get your key and enter it in the script.
                </li>
              )}
            </ol>
          </div>

          <div className="flex justify-between animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link href={`/games/${params.gameId}`} className="btn-secondary hover-scale">
              Back to Scripts
            </Link>
            <button onClick={copyToClipboard} className="btn-primary hover-scale">
              {copied ? "Copied!" : "Copy Script"}
            </button>
          </div>
        </div>

        {/* Key System Modal */}
        <KeySystemModal
          isOpen={isKeyModalOpen}
          onClose={() => setIsKeyModalOpen(false)}
          onSelect={handleKeySystemSelect}
        />
      </div>
    </div>
  )
}
