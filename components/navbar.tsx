"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-dark-300 border-b border-pink-100 dark:border-dark-200 sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              SolixHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
            >
              Games
            </Link>
            <Link
              href="/community"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
            >
              Community
            </Link>
            <Link
              href="https://discord.gg/rSZJGSr5FW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Join Discord
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/games"
              className="block text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              href="/community"
              className="block text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="https://discord.gg/rSZJGSr5FW"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-secondary inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Discord
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
