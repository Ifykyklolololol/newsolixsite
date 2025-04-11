"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredGames, setFilteredGames] = useState(games)
  const gamesPerPage = 8

  // Filter games based on search term
  useEffect(() => {
    const results = games.filter(
      (game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredGames(results)
    setCurrentPage(1) // Reset to first page when search changes
  }, [searchTerm])

  // Calculate pagination
  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame)
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage)

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center">All Games</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Browse our collection of free Luau scripts for popular Roblox games.
        </p>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500">
              <Search className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {currentGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentGames.map((game) => (
              <Link key={game.id} href={`/games/${game.id}`} className="card overflow-hidden">
                <div className="relative h-40">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
                  <span className="text-pink-500 text-sm font-medium">View Scripts &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600">No games found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredGames.length > gamesPerPage && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border border-pink-200 text-gray-600 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-50"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === number
                      ? "border-pink-300 bg-pink-100 text-gray-800"
                      : "border-pink-200 text-gray-600 hover:bg-pink-50"
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border border-pink-200 text-gray-600 ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-50"
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

const games = [
  {
    id: "da-hood",
    title: "Da Hood",
    description: "Powerful scripts for Da Hood with aimlock, ESP, and more features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["FPS", "Roleplay", "Combat"],
  },
  {
    id: "blox-fruits",
    title: "Blox Fruits",
    description: "Auto-farm, teleport, and other useful features for Blox Fruits.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Adventure", "Fighting", "Grinding"],
  },
  {
    id: "mm2",
    title: "Murder Mystery 2",
    description: "ESP, coin farm, and other advantages for MM2 gameplay.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Mystery", "Horror", "Roleplay"],
  },
  {
    id: "pet-simulator-x",
    title: "Pet Simulator X",
    description: "Auto-farm, auto-collect, and other scripts for Pet Simulator X.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Simulator", "Pets", "Grinding"],
  },
  {
    id: "arsenal",
    title: "Arsenal",
    description: "Aimbot, ESP, and other scripts to dominate in Arsenal.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["FPS", "Combat", "Competitive"],
  },
  {
    id: "adopt-me",
    title: "Adopt Me",
    description: "Scripts for Adopt Me with various features and utilities.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Roleplay", "Pets", "Trading"],
  },
  {
    id: "jailbreak",
    title: "Jailbreak",
    description: "Auto-rob, teleport, and other scripts for Jailbreak.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Adventure", "Robbery", "Vehicles"],
  },
  {
    id: "brookhaven",
    title: "Brookhaven",
    description: "Various utility scripts for Brookhaven RP.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Roleplay", "Town", "Social"],
  },
  {
    id: "phantom-forces",
    title: "Phantom Forces",
    description: "Aimbot, ESP, and other combat advantages for Phantom Forces.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["FPS", "Combat", "Military"],
  },
  {
    id: "bee-swarm-simulator",
    title: "Bee Swarm Simulator",
    description: "Auto-farm, auto-collect, and other features for Bee Swarm Simulator.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Simulator", "Grinding", "Bees"],
  },
  {
    id: "tower-of-hell",
    title: "Tower of Hell",
    description: "Scripts to help you climb and win in Tower of Hell.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Obby", "Parkour", "Challenge"],
  },
  {
    id: "islands",
    title: "Islands",
    description: "Auto-farm, auto-build, and other utilities for Islands.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Survival", "Building", "Grinding"],
  },
]
