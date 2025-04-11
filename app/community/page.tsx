import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center gradient-text animate-slide-up">Community</h1>
        <p
          className="text-center text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Join our community to get support, request scripts, and stay updated with the latest releases.
        </p>

        {/* Discord Section */}
        <div className="card p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Join Our Discord</h2>
              <p className="text-gray-600 mb-6">
                Join our Discord server to get support, request scripts, and stay updated with the latest releases. Our
                community is active and friendly!
              </p>
              <Link
                href="https://discord.gg/rSZJGSr5FW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary glow-effect hover-scale"
              >
                Join Discord
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-xl p-6 h-64 flex items-center justify-center animate-float">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-pink-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                <p className="text-gray-700 font-medium">discord.gg/rSZJGSr5FW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key System Section */}
        <div className="card p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Our Free Key System</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-pink-50 p-6 rounded-xl hover-scale">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Copy our script from the website</li>
                  <li>Execute the script in your Roblox exploit</li>
                  <li>When prompted, click "Get Key"</li>
                  <li>Choose between Linkvertise or Lootlabs (both free)</li>
                  <li>Complete the short verification process</li>
                  <li>Copy your key and paste it in the script</li>
                  <li>Enjoy all features completely free!</li>
                </ol>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Why We Use a Key System</h3>
              <p className="text-gray-600 mb-4">
                Our key system helps us maintain our servers and continue developing new features while keeping all
                scripts completely free for everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Unlike other script hubs, we don't have any premium tiers or paid features - everything is available to
                all users after completing the simple key verification.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
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
                  Important Note
                </div>
                <p className="text-amber-600 text-sm">
                  Keys typically last 24 hours. If you encounter any issues with the key system, please join our Discord
                  for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Key Option Section */}
        <div className="card p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Premium Key Option</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Skip the Key System</h3>
              <p className="text-gray-600 mb-4">
                Don't want to go through the key system? We offer premium keys that allow you to bypass the key system
                entirely.
              </p>
              <p className="text-gray-600 mb-4">
                Our premium keys provide longer durations and instant access to all our scripts without having to
                complete any verification steps.
              </p>
              <div className="mt-6">
                <a
                  href="https://solixhub.sellsn.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary glow-effect hover-scale"
                >
                  Purchase Premium Keys
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-pink-50 p-6 rounded-xl hover-scale">
                <h3 className="text-xl font-semibold mb-4">Premium Key Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Instant access to all scripts</li>
                  <li>No need to complete verification steps</li>
                  <li>Longer key duration (up to permanent)</li>
                  <li>Support the development of SolixHub</li>
                  <li>Priority support on our Discord</li>
                  <li>Access to exclusive features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6 hover-scale">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary glow-effect hover-scale w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "How do I use SolixHub scripts?",
    answer:
      "To use SolixHub scripts, you need a Roblox exploit/executor. Copy the script from our website, paste it into your executor, and then execute it while in the game.",
  },
  {
    question: "Are these scripts free?",
    answer:
      "Yes, all scripts on SolixHub are 100% free to use. Some scripts require a key from our free key system, but there are absolutely no paid options or premium features - everything is available to everyone for free.",
  },
  {
    question: "What is a key system?",
    answer:
      "A key system is a way for us to verify that you're a human and not a bot. It involves completing a short task to get a key that unlocks the script. Our key system is completely free - you'll never have to pay for access to our scripts.",
  },
  {
    question: "Which executor should I use?",
    answer:
      "We recommend using popular executors like Synapse X, KRNL, or Fluxus. Our scripts are designed to work with most modern Roblox executors.",
  },
  {
    question: "Why isn't the script working?",
    answer:
      "There could be several reasons: the game might have updated, your executor might not support the script, or you might be using an outdated version. Join our Discord for support.",
  },
  {
    question: "Can I request a script for a specific game?",
    answer:
      "Yes! Join our Discord server and use the script request channel to request scripts for specific games. We prioritize requests based on popularity.",
  },
]
