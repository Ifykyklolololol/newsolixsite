"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import KeySystemModal from "@/components/key-system-modal"

interface GamePageProps {
  params: {
    gameId: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const [copied, setCopied] = useState(false)
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

  const openKeySystem = (scriptId: string) => {
    setCurrentScript(scriptId)
    setIsKeyModalOpen(true)
  }

  const handleKeySystemSelect = (url: string) => {
    window.open(url, "_blank")
    setIsKeyModalOpen(false)
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Game Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="relative w-full md:w-1/3 h-64">
            <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{game.title} Scripts</h1>
            <p className="text-gray-600 mb-6">{game.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/solixhub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Join Discord
              </Link>
              <button onClick={copyScript} className="btn-primary">
                {copied ? "Copied!" : "Copy Latest Script"}
              </button>
            </div>
          </div>
        </div>

        {/* Scripts List */}
        <h2 className="text-2xl font-bold mb-6">Available Scripts</h2>
        <div className="space-y-6">
          {game.scripts.map((script) => (
            <div key={script.id} className="card p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{script.name}</h3>
                  <p className="text-gray-600 mb-4">{script.description}</p>

                  {/* Feature List */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {script.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {script.keyRequired && (
                    <div className="flex items-center text-amber-600 text-sm mb-4">
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
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                      Free Key Required
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/games/${game.id}/scripts/${script.id}`} className="btn-primary text-center">
                    View Script
                  </Link>
                  {script.keyRequired && (
                    <button onClick={() => openKeySystem(script.id)} className="btn-secondary text-center">
                      Get Free Key
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="code-block">
                  <pre>
                    loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()
                  </pre>
                </div>
                <div className="flex justify-end mt-2">
                  <button onClick={copyScript} className="text-pink-500 text-sm font-medium flex items-center">
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
                    Copy Loadstring
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

const games = [
  {
    id: "da-hood",
    title: "Da Hood",
    description:
      "Da Hood is a Roblox game where players can choose to live a life of crime or become a police officer to stop criminals. Our scripts provide various features to enhance your gameplay experience.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["FPS", "Roleplay", "Combat"],
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
    description:
      "Blox Fruits is a popular Roblox game where players can become pirates or marines, collect fruits, and fight enemies. Our scripts provide various features to enhance your gameplay.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Adventure", "Fighting", "Grinding"],
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
    description:
      "Murder Mystery 2 is a popular Roblox game where players are assigned roles as Innocent, Sheriff, or Murderer. Our scripts provide various features to enhance your gameplay.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Mystery", "Horror", "Roleplay"],
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
