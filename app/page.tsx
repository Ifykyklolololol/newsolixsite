import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Welcome to <span className="text-pink-500">SolixHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Top-Notch Free Scripts for Roblox Exploits - No Paid Options
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/games" className="btn-primary glow-effect">
              Browse Scripts
            </Link>
            <Link
              href="https://discord.gg/solixhub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary glow-effect"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="card p-6">
              <h3 className="text-4xl font-bold text-pink-500 mb-2">10,000+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="card p-6">
              <h3 className="text-4xl font-bold text-pink-500 mb-2">3M+</h3>
              <p className="text-gray-600">Monthly Executions</p>
            </div>
            <div className="card p-6">
              <h3 className="text-4xl font-bold text-pink-500 mb-2">50+</h3>
              <p className="text-gray-600">Supported Games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Choose SolixHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="card p-6 text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Free Scripts</h3>
              <p className="text-gray-600">All our scripts are completely free to use with a simple free key system.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
              <p className="text-gray-600">
                Our scripts are regularly updated to ensure they work with the latest game versions.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join our Discord community for support and script requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-16 bg-pink-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {popularGames.map((game) => (
              <Link key={game.id} href={`/games/${game.id}`} className="card overflow-hidden">
                <div className="relative h-48">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <span className="text-pink-500 text-sm font-medium">View Scripts &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/games" className="btn-primary">
              View All Games
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Gameplay?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of players using SolixHub scripts to enhance their Roblox experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games" className="btn-primary glow-effect">
                Browse Scripts
              </Link>
              <Link
                href="https://discord.gg/solixhub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary glow-effect"
              >
                Join Discord
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const popularGames = [
  {
    id: "da-hood",
    title: "Da Hood",
    description: "Powerful scripts for Da Hood with aimlock, ESP, and more features.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "blox-fruits",
    title: "Blox Fruits",
    description: "Auto-farm, teleport, and other useful features for Blox Fruits.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "mm2",
    title: "Murder Mystery 2",
    description: "ESP, coin farm, and other advantages for MM2 gameplay.",
    image: "/placeholder.svg?height=300&width=500",
  },
]
