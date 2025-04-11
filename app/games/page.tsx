"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

// Import the shared game data
import { games } from "@/lib/game-data"

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
        <h1 className="section-title text-center gradient-text animate-slide-up">All Games</h1>
        <p
          className="text-center text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Browse our collection of free Luau scripts for popular Roblox games.
        </p>

        {/* Search */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 stagger-animation">
            {currentGames.map((game, index) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="card overflow-hidden animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 shimmer">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
                  <span className="text-pink-500 text-sm font-medium flex items-center">
                    View Scripts <span className="arrow-animate ml-1">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 animate-fade-in">
            <p className="text-gray-600">No games found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredGames.length > gamesPerPage && (
          <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border border-pink-200 text-gray-600 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-50 hover-scale"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded border hover-scale ${
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
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-50 hover-scale"
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
