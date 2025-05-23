"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import KeySystemModal from "@/components/key-system-modal"
import FeatureList from "@/components/feature-list"

// Import the shared game data
import { games } from "@/lib/game-data"

interface GamePageProps {
  params: {
    gameId: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const [copied, setCopied] = useState(false)
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null)
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false)
  const [currentScript, setCurrentScript] = useState<string | null>(null)

  const game = games.find((g) => g.id === params.gameId)

  if (!game) {
    notFound()
  }

  const copyScript = () => {
    navigator.clipboard.writeText(
      `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()`,
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyScriptById = (scriptId: string) => {
    navigator.clipboard.writeText(
      `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()`,
    )
    setCopiedScriptId(scriptId)
    setTimeout(() => setCopiedScriptId(null), 2000)
  }

  const openKeySystem = (scriptId: string) => {
    setCurrentScript(scriptId)
    setIsKeyModalOpen(true)
  }

  const handleKeySystemSelect = (url: string) => {
    window.open(url, "_blank")
    setIsKeyModalOpen(false)
  }

  return (
    <div className="py-12 bg-white dark:bg-dark-400">
      <div className="container-custom">
        {/* Game Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 animate-fade-in">
          <div className="relative w-full md:w-1/3 h-64 shimmer">
            <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4 gradient-text">{game.title} Scripts</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{game.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag, index) => (
                <span key={tag} className="tag animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/rSZJGSr5FW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-scale"
              >
                Join Discord
              </Link>
              <button onClick={copyScript} className="btn-primary hover-scale">
                {copied ? "Copied!" : "Copy Latest Script"}
              </button>
            </div>
          </div>
        </div>

        {/* Scripts List */}
        <h2 className="text-2xl font-bold mb-6 gradient-text animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Available Scripts
        </h2>
        <div className="space-y-6 stagger-animation">
          {game.scripts.map((script, index) => (
            <div
              key={script.id}
              className="card p-6 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{script.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{script.description}</p>

                  {/* Feature List */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Features:</h4>
                    <FeatureList features={script.features} />
                  </div>

                  {script.keyRequired && (
                    <div className="key-required-badge mb-4 inline-block">
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
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                      Free Key Required
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Link
                      href={`/games/${game.id}/scripts/${script.id}`}
                      className="btn-primary text-center hover-scale"
                    >
                      View Script
                    </Link>
                    {script.keyRequired && (
                      <button
                        onClick={() => openKeySystem(script.id)}
                        className="btn-secondary text-center hover-scale"
                      >
                        Get Free Key
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="code-block">
                  <pre>
                    loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()
                  </pre>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => copyScriptById(script.id)}
                    className="text-pink-500 dark:text-purple-400 text-sm font-medium flex items-center hover-scale"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    {copiedScriptId === script.id ? "Copied!" : "Copy Loadstring"}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
