import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center">Community</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Join our community to get support, request scripts, and stay updated with the latest releases.
        </p>

        {/* Discord Section */}
        <div className="card p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Join Our Discord</h2>
              <p className="text-gray-600 mb-6">
                Join our Discord server to get support, request scripts, and stay updated with the latest releases. Our
                community is active and friendly!
              </p>
              <Link
                href="https://discord.gg/solixhub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary glow-effect"
              >
                Join Discord
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-xl p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-pink-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0\
