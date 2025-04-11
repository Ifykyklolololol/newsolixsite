import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-slide-up">
            Welcome to <span className="gradient-text">SolixHub</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Top-Notch Free Scripts for Roblox Exploits - No Paid Options
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/games" className="btn-primary glow-effect hover-scale">
              Browse Scripts
            </Link>
            <Link
              href="https://discord.gg/rSZJGSr5FW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary glow-effect hover-scale"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center stagger-animation">
            <div className="card p-6 animate-fade-in hover-scale">
              <h3 className="text-4xl font-bold text-pink-500 mb-2 animate-pulse-glow">10,000+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="card p-6 animate-fade-in hover-scale">
              <h3 className="text-4xl font-bold text-pink-500 mb-2 animate-pulse-glow">3M+</h3>
              <p className="text-gray-600">Monthly Executions</p>
            </div>
            <div className="card p-6 animate-fade-in hover-scale">
              <h3 className="text-4xl font-bold text-pink-500 mb-2 animate-pulse-glow">14+</h3>
              <p className="text-gray-600">Supported Games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center gradient-text">Why Choose SolixHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 stagger-animation">
            <div className="card p-6 text-center animate-fade-in hover-scale">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
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

            <div className="card p-6 text-center animate-fade-in hover-scale" style={{ animationDelay: "0.2s" }}>
              <div
                className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                style={{ animationDelay: "0.1s" }}
              >
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

            <div className="card p-6 text-center animate-fade-in hover-scale" style={{ animationDelay: "0.4s" }}>
              <div
                className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
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
          <h2 className="section-title text-center gradient-text">Popular Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 stagger-animation">
            {popularGames.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="card overflow-hidden animate-fade-in hover-scale"
              >
                <div className="relative h-48 shimmer">
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
          <div className="text-center mt-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link href="/games" className="btn-primary hover-scale">
              View All Games
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Key Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Skip the Key System</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Don't want to go through the key system? We offer premium keys that allow you to bypass the key system
                  entirely.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant access to all scripts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No need to complete verification steps</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Longer key duration (up to permanent)</span>
                  </li>
                </ul>
                <a
                  href="https://solixhub.sellsn.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors hover-scale"
                >
                  Get Premium Keys
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-4 rounded-xl shadow-lg animate-float">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-pink-500 mx-auto"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Elevate Your Gameplay?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of players using SolixHub scripts to enhance their Roblox experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games" className="btn-primary glow-effect hover-scale">
                Browse Scripts
              </Link>
              <Link
                href="https://discord.gg/rSZJGSr5FW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary glow-effect hover-scale"
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
    id: "blox-fruits",
    title: "Blox Fruits",
    description: "Auto-farm, teleport, and other useful features for Blox Fruits.",
    image: "/images/blox-fruits.png",
  },
  {
    id: "pet-simulator-99",
    title: "Pet Simulator 99",
    description: "Auto-farm, auto-collect, and other scripts for Pet Simulator 99.",
    image: "/images/pet-sim-99.png",
  },
  {
    id: "anime-vanguard",
    title: "Anime Vanguard",
    description: "Auto-farm, auto-summon, and combat features for Anime Vanguard.",
    image: "/images/anime-vanguard.png",
  },
]
