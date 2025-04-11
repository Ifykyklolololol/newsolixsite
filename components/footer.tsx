import Link from "next/link"
import { Github, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
              SolixHub
            </h3>
            <p className="text-gray-600 mb-4">Premium Free Scripts for Roblox Exploits</p>
            <p className="text-gray-500 text-sm">SolixHub is not affiliated with Roblox Corporation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://discord.gg/rSZJGSr5FW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Discord className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://github.com/solixhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-pink-100 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SolixHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
