"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import KeySystemModal from "@/components/key-system-modal"

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
    notFound()
  }

  const script = game.scripts.find((s) => s.id === params.scriptId)
  if (!script) {
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
        <div className="mb-6">
          <Link href={`/games/${params.gameId}`} className="text-pink-500 hover:text-pink-600 flex items-center">
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

        <div className="card p-6">
          <h1 className="text-2xl font-bold mb-4">{script.name}</h1>
          <p className="text-gray-600 mb-6">{script.description}</p>

          {/* Feature List */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
              {script.features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {script.keyRequired && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
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
                Key Required
              </div>
              <p className="text-amber-600 text-sm">
                This script requires a key to use. Click the button below to get your free key.
              </p>
              <div className="mt-4">
                <button onClick={() => setIsKeyModalOpen(true)} className="btn-secondary">
                  Get Free Key
                </button>
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Script Code</h2>
              <button onClick={copyToClipboard} className="text-pink-500 hover:text-pink-600 flex items-center">
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
            <div className="code-block">
              <pre>
                loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Copy the loadstring using the "Copy Code" button above.</li>
              <li>Open your Roblox exploit/executor.</li>
              <li>Paste the loadstring into your executor.</li>
              <li>Join the game and execute the script.</li>
              {script.keyRequired && (
                <li>When prompted, complete the free key system to get your key and enter it in the script.</li>
              )}
            </ol>
          </div>

          <div className="flex justify-between">
            <Link href={`/games/${params.gameId}`} className="btn-secondary">
              Back to Scripts
            </Link>
            <button onClick={copyToClipboard} className="btn-primary glow-effect">
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

const games = [
  {
    id: "da-hood",
    title: "Da Hood",
    scripts: [
      {
        id: "da-hood-premium",
        name: "SolixHub Premium Da Hood",
        description: "Our premium script for Da Hood with all features unlocked.",
        features: [
          "Aimlock with customizable settings",
          "ESP for players, items, and cash",
          "Silent Aim with adjustable FOV",
          "Auto-Farm for cash and items",
          "Teleport to key locations",
          "Anti-arrest and anti-ragdoll",
          "Weapon modifications",
          "Character modifications",
          "Auto-reload and auto-stomp",
          "Fly and noclip features",
        ],
        keyRequired: true,
      },
      {
        id: "da-hood-basic",
        name: "SolixHub Basic Da Hood",
        description: "A basic script for Da Hood with essential features.",
        features: [
          "ESP for players and items",
          "Teleport to key locations",
          "Item ESP with distance display",
          "Basic character modifications",
          "Simple fly feature",
          "Anti-ragdoll protection",
        ],
        keyRequired: false,
      },
    ],
  },
  {
    id: "blox-fruits",
    title: "Blox Fruits",
    scripts: [
      {
        id: "blox-fruits-premium",
        name: "SolixHub Premium Blox Fruits",
        description: "Our premium script for Blox Fruits with all features unlocked.",
        features: [
          "Auto-Farm with multiple modes",
          "Auto-Raid for efficient farming",
          "ESP for players, NPCs, and fruits",
          "Teleport to all islands and locations",
          "Fruit Finder with notifications",
          "Auto-buy and auto-store fruits",
          "Auto-quest completion",
          "Auto-skill usage for combat",
          "Server hopper for rare items",
          "Chest farm and material farm",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "mm2",
    title: "Murder Mystery 2",
    scripts: [
      {
        id: "mm2-premium",
        name: "SolixHub Premium MM2",
        description: "Our premium script for Murder Mystery 2 with all features unlocked.",
        features: [
          "ESP for all players",
          "Role ESP to identify murderer and sheriff",
          "Coin Farm for efficient coin collection",
          "Teleport to coins and players",
          "Auto-Collect coins feature",
          "Kill aura for murderer role",
          "Auto-shoot for sheriff role",
          "Player tracker with distance",
          "Knife and gun modifications",
          "Anti-kill protection",
        ],
        keyRequired: true,
      },
    ],
  },
]
