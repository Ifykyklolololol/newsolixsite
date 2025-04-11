"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import KeySystemModal from "@/components/key-system-modal"
import FeatureList from "@/components/feature-list"

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
        <div className="flex flex-col md:flex-row gap-8 mb-12 animate-fade-in">
          <div className="relative w-full md:w-1/3 h-64 shimmer">
            <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4 gradient-text">{game.title} Scripts</h1>
            <p className="text-gray-600 mb-6">{game.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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

        {/* Premium Key Option */}
        <div className="card p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-3 gradient-text">Skip the Key System</h2>
              <p className="text-gray-600 mb-4">
                Don't want to go through the key system? Purchase a premium key for instant access without verification
                steps.
              </p>
              <a
                href="https://solixhub.sellsn.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors hover-scale"
              >
                Get Premium Keys
              </a>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-pink-50 p-4 rounded-xl animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-pink-500 mx-auto"
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
                  <h3 className="text-xl font-semibold mb-2">{script.name}</h3>
                  <p className="text-gray-600 mb-4">{script.description}</p>

                  {/* Feature List */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
                    <FeatureList features={script.features} />
                  </div>

                  {script.keyRequired && (
                    <div className="flex items-center text-amber-600 text-sm mb-4 animate-pulse-glow">
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
                    onClick={copyScript}
                    className="text-pink-500 text-sm font-medium flex items-center hover-scale"
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
    id: "arise-crossover",
    title: "Arise Crossover",
    description:
      "Arise Crossover is a fighting game featuring characters from various anime series. Our scripts provide combat advantages and utility features.",
    image: "/images/arise-crossover.png",
    tags: ["Anime", "Fighting", "Crossover"],
    scripts: [
      {
        id: "arise-crossover-premium",
        name: "SolixHub Premium Arise Crossover",
        description: "Our premium script for Arise Crossover with all features unlocked.",
        features: [
          "Autofarm Mobs",
          "Insta Dash + Other Cooldowns",
          "Auto Punch",
          "Auto Equip Best",
          "Auto Attack (Gamepass SAVES AFTER Leaving)",
          "Auto Arise (Gamepass Saves After Leaving)",
          "Auto Destroy (Destroy Menu Built in game Saves After Leaving)",
          "Auto Sell Pets",
          "Kill Aura",
          "INSTANT TP BYPASS",
          "Teleport To Worlds",
          "WalkSpeed, JumpPower Editors",
          "Anti Afk",
          "Workspace Gravity Editors",
          "Reset Character, Rejoin",
          "Auto Mount WIP",
          "Auto Dungons WIP",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "dead-rails",
    title: "Dead Rails",
    description:
      "Dead Rails is a zombie survival game on Roblox where players fight against hordes of zombies. Our scripts provide combat advantages and survival features.",
    image: "/images/dead-rails.png",
    tags: ["FPS", "Shooter", "Combat"],
    scripts: [
      {
        id: "dead-rails-premium",
        name: "SolixHub Premium Dead Rails",
        description: "Our premium script for Dead Rails with all features unlocked.",
        features: [
          "Auto Win (Will Do Everything And Collect Bond)",
          "Auto Bond",
          "NPC Camlock",
          "Tp To End button (OP)",
          "Auto walk To End (For horses)",
          "Gun Kill Aura",
          "Silent Aim",
          "Third Person",
          "Item Esp with Blacklist Items",
          "Train Esp",
          "Player Esp",
          "Loop Tween To Train",
          "Aimbot",
          "Bag Pickup Aura",
          "NoClip",
          "Edit FOV",
          "Rejoin, ServerHop",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "jailbreak",
    title: "Jailbreak",
    description:
      "Jailbreak is a popular Roblox game where players can choose to be criminals or police officers. Our scripts provide various features to enhance your gameplay.",
    image: "/images/jailbreak.png",
    tags: ["Adventure", "Robbery", "Vehicles"],
    scripts: [
      {
        id: "jailbreak-premium",
        name: "SolixHub Premium Jailbreak",
        description: "Our premium script for Jailbreak with all features unlocked.",
        features: [
          "Auto Pop Tires (Very Funny Troll Stuff)",
          "Silent Aim",
          "Eject Aura",
          "Arrest Aura",
          "Kill Aura",
          "Auto Open All Doors",
          "AutoEscape",
          "AntiRagDoll",
          "Always Have Key",
          "Anti AirDrop NPCS",
          "Anti Oil NPCS",
          "Anti Masion NPCS",
          "No Tire Pop",
          "Car Engine Edit",
          "Car Turn Speed Edit",
          "Car Height Edit",
          "Player Esp",
          "Drop Esp",
          "WalkSpeed JumpPower",
          "Gravity editor",
          "Reset Character",
          "Rejoin",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "blox-fruits",
    title: "Blox Fruits",
    description:
      "Blox Fruits is a popular Roblox game where players can become pirates or marines, collect fruits, and fight enemies. Our scripts provide various features to enhance your gameplay.",
    image: "/images/blox-fruits.png",
    tags: ["Adventure", "Fighting", "Grinding"],
    scripts: [
      {
        id: "blox-fruits-premium",
        name: "SolixHub Premium Blox Fruits",
        description: "Our premium script for Blox Fruits with all features unlocked.",
        features: [
          "Auto Level",
          "Auto Quest",
          "Auto Boss",
          "Auto V4",
          "Auto Raid",
          "Auto Stats",
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
    image: "/images/mm2.png",
    tags: ["Mystery", "Horror", "Roleplay"],
    scripts: [
      {
        id: "mm2-premium",
        name: "SolixHub Premium MM2",
        description: "Our premium script for Murder Mystery 2 with all features unlocked.",
        features: [
          "Auto Farm Coins",
          "Auto Farm Types (Instant, Tween, VoidInstant)",
          "Auto Open Boxes",
          "Select Boxes",
          "Insta Kill All (Murderer Only)",
          "Select Player",
          "Auto Trap Selected Player",
          "Walk Speed Toggle",
          "Jump Power Toggle",
          "Loop Emotes",
          "All Emotes",
          "ESP (Normal, Sheriff, Murderer)",
          "Anti Afk",
          "No Clip",
          "Teleports (Lobby, Main Map)",
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
  {
    id: "anime-vanguard",
    title: "Anime Vanguard",
    description:
      "Anime Vanguard is a tower defense game featuring characters from various anime series. Our scripts provide features to enhance your gameplay.",
    image: "/images/anime-vanguard.png",
    tags: ["Anime", "Tower Defense", "Grinding"],
    scripts: [
      {
        id: "anime-vanguard-premium",
        name: "SolixHub Premium Anime Vanguard",
        description: "Our premium script for Anime Vanguard with all features unlocked.",
        features: [
          "Macro Recorder",
          "Inf Summon (Not restricted to 10 Summons per time)",
          "Auto Summon",
          "Auto Summon Until Selected Unit",
          "Auto Buy GoldShop",
          "Auto Buy Rift Shop",
          "Auto Retry",
          "Auto Next Stage",
          "Auto Equip Best Team",
          "Auto Best Act",
          "Auto-Farm for gems and coins",
          "Auto-Place units optimally",
          "Auto-Upgrade units",
          "Auto-Sell units at optimal times",
          "Auto-Use abilities",
          "Auto-Start next level",
          "Auto-Claim rewards",
          "Auto-Equip best units",
          "Auto-Complete challenges",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "shindo-life",
    title: "Shindo Life",
    description:
      "Shindo Life is a Roblox game inspired by Naruto, where players can master various jutsu and bloodlines. Our scripts provide features to enhance your gameplay.",
    image: "/images/shindo-life.png",
    tags: ["Adventure", "Anime", "Grinding"],
    scripts: [
      {
        id: "shindo-life-premium",
        name: "SolixHub Premium Shindo Life",
        description: "Our premium script for Shindo Life with all features unlocked.",
        features: [
          "Auto Green Quest",
          "Auto Dungeon",
          "Kill Dungeon Mobs",
          "Anti Afk Toggle",
          "Disable 3d Rendering Toggle",
          "WalkSpeed, JumpPower Editing",
          "Bypass Anticheat",
          "Scroll Farm",
          "Auto Spin",
          "Anti Lag",
          "Rejoin + Serverhop",
          "Reset Character Button",
          "Scroll Esp",
          "Player Esp",
          "Mob Esp",
          "Auto Boss",
          "Auto-Farm for levels and resources",
          "Auto-Quest completion",
          "ESP for players, NPCs, and scrolls",
          "Teleport to all villages and locations",
          "Auto-spin for rare bloodlines",
          "Auto-war farm",
          "Boss farm for drops",
          "Auto-event participation",
          "Server hopper for rare scrolls",
          "Combat enhancements and combos",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "rivals",
    title: "Rivals",
    description:
      "Rivals is a first-person shooter game on Roblox with various game modes and weapons. Our scripts provide combat advantages and utility features.",
    image: "/images/rivals.png",
    tags: ["Fighting", "Competitive", "PvP"],
    scripts: [
      {
        id: "rivals-premium",
        name: "SolixHub Premium Rivals",
        description: "Our premium script for Rivals with all features unlocked.",
        features: [
          "Rage Bot (Built In Anti Katana)",
          "Under Ground Exploit (U can kill enemy and they cant see you)",
          "Skin Changer",
          "Silent Aim (Pick Hit Parts)",
          "Aim Assist (Pick Hit Parts)",
          "ESP (Name, Box, Corner, Health)",
          "Change Fire Rate",
          "WalkSpeed Modifier",
          "Configs",
          "UNDETECTED!",
          "Aimbot with customizable settings",
          "ESP for players and items",
          "Wallbang and penetration features",
          "Weapon modifications",
          "Character modifications",
          "Auto-reload and auto-shoot",
          "Hitbox expansion",
          "Anti-recoil and anti-spread",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "jujutsu-infinite",
    title: "Jujutsu Infinite",
    description:
      "Jujutsu Infinite is a Roblox game based on Jujutsu Kaisen, where players can use cursed techniques and fight cursed spirits. Our scripts enhance your gameplay experience.",
    image: "/images/jujutsu-infinite.png",
    tags: ["Anime", "Fighting", "Adventure"],
    scripts: [
      {
        id: "jujutsu-infinite-premium",
        name: "SolixHub Premium Jujutsu Infinite",
        description: "Our premium script for Jujutsu Infinite with all features unlocked.",
        features: [
          "Instant Kill Boss at certain percent of health",
          "Auto Join Investigation Teleport world",
          "Auto join Investigation that is selected",
          "Difficulty dropdown",
          "Level cap Slider 1 to 4",
          "Select the Investigation you want to do dropdown",
          "Auto Santa",
          "Auto Daily Quest",
          "Auto Investigation",
          "Auto Use Items (Vitals and whatnot)",
          "Serverhop Farm Items (Finger, Talisman etc)",
          "Webhooks (Boss And Investigation Loot And Items)",
          "Auto Boss",
          "Redo Boss",
          "Auto Load",
          "Auto Quest",
          "Auto Spin To Stop At Selected Innates",
          "Auto Chest",
          "Auto Rank",
          "All Innates In Slots",
          "No Cooldown",
          "No Stun",
          "Auto Farm",
          "Insta Complete Quest",
          "Select Quest Location",
          "Auto Collect Loot",
          "Auto Collect Talisman",
          "Auto Promote",
          "Auto Farm Mobs",
          "Redeem All Codes",
          "Pick Innate Abilitys Like Gamepass",
          "Spam Any Ability",
          "Auto Win Clash",
          "Teleports",
          "Speed Modifier",
          "Jump Modifier",
          "Configs",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "pet-simulator-99",
    title: "Pet Simulator 99",
    description:
      "Pet Simulator 99 is a popular Roblox game where players collect pets, hatch eggs, and explore various worlds. Our scripts provide features to enhance your gameplay.",
    image: "/images/pet-sim-99.png",
    tags: ["Simulator", "Pets", "Grinding"],
    scripts: [
      {
        id: "pet-simulator-99-premium",
        name: "SolixHub Premium Pet Simulator 99",
        description: "Our premium script for Pet Simulator 99 with all features unlocked.",
        features: [
          "Auto Tap",
          "Auto Buy New Zone",
          "Auto Rebirth",
          "Auto Farm Zone",
          "Auto Buy Upgrades",
          "Auto Claim Ranks Rewards",
          "Auto Open Eggs",
          "Collect All Relics",
          "Auto Use All Consumables",
          "Modify Games Gravity",
          "Modify Walkspeed",
          "Modify JumpPower",
          "Auto-Farm for coins and gems",
          "Auto-Hatch for eggs",
          "Auto-Collect all drops",
          "Teleport to all areas and islands",
          "Auto-Upgrade pets",
          "Auto-Equip best pets",
          "Auto-Complete achievements",
          "Visual pet modifications",
          "Server hopper for rare spawns",
          "Trade sniper for rare pets",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "demonfall",
    title: "Demonfall",
    description:
      "Demonfall is a Roblox game inspired by Demon Slayer, where players can become demon slayers or demons. Our scripts provide various features to enhance your gameplay.",
    image: "/images/demonfall.png",
    tags: ["Adventure", "Anime", "Combat"],
    scripts: [
      {
        id: "demonfall-premium",
        name: "SolixHub Premium Demonfall",
        description: "Our premium script for Demonfall with all features unlocked.",
        features: [
          "Auto-Farm for levels and materials",
          "ESP for players, NPCs, and items",
          "Auto-Quest completion",
          "Teleport to all locations",
          "Combat enhancements and combos",
          "Auto-skill usage",
          "Character modifications",
          "Anti-death features",
          "Server hopper for rare spawns",
          "Material and item farm",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "counter-blox",
    title: "Counter Blox",
    description:
      "Counter Blox is a first-person shooter game on Roblox inspired by Counter-Strike. Our scripts provide combat advantages and utility features.",
    image: "/images/counter-blox.png",
    tags: ["FPS", "Combat", "Competitive"],
    scripts: [
      {
        id: "counter-blox-premium",
        name: "SolixHub Premium Counter Blox",
        description: "Our premium script for Counter Blox with all features unlocked.",
        features: [
          "Aimbot with customizable settings",
          "ESP for players, weapons, and bombs",
          "Silent Aim with adjustable FOV",
          "Wallbang and penetration features",
          "Weapon modifications",
          "Character modifications",
          "Anti-flash and anti-smoke",
          "Auto-defuse and auto-plant",
          "Skin changer for weapons",
          "Hitbox expansion",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "gpo",
    title: "Grand Piece Online",
    description:
      "Grand Piece Online (GPO) is a One Piece inspired Roblox game where players sail the seas, collect Devil Fruits, and fight enemies. Our scripts enhance your gameplay experience.",
    image: "/images/grand-piece-online.png",
    tags: ["Adventure", "Anime", "Fighting"],
    scripts: [
      {
        id: "gpo-premium",
        name: "SolixHub Premium GPO",
        description: "Our premium script for Grand Piece Online with all features unlocked.",
        features: [
          "Auto-Farm for levels and resources",
          "ESP for players, NPCs, and items",
          "Auto-Quest completion",
          "Teleport to all islands",
          "Devil Fruit finder and notifier",
          "Auto-skill usage",
          "Ship modifications and speed boost",
          "Anti-death features",
          "Server hopper for rare spawns",
          "Boss farm for drops",
        ],
        keyRequired: true,
      },
    ],
  },
  {
    id: "fisch",
    title: "Fisch",
    description:
      "Fisch is a fishing simulator game on Roblox where players catch fish and explore the ocean. Our scripts provide various features to enhance your fishing experience.",
    image: "/images/fisch.png",
    tags: ["Simulator", "Casual", "Grinding"],
    scripts: [
      {
        id: "fisch-premium",
        name: "SolixHub Premium Fisch",
        description: "Our premium script for Fisch with all features unlocked.",
        features: [
          "Auto-Fishing with customizable settings",
          "Auto-Sell caught fish",
          "ESP for rare fish and locations",
          "Teleport to fishing spots",
          "Auto-Upgrade fishing rod",
          "Auto-Complete quests",
          "Auto-Claim rewards",
          "Boat speed modifications",
          "Unlimited bait and energy",
          "Auto-Catch legendary fish",
        ],
        keyRequired: true,
      },
    ],
  },
]
