import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 bg-white dark:bg-dark-400">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-500 dark:text-purple-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6 dark:text-gray-200">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-primary glow-effect">
          Return Home
        </Link>
      </div>
    </div>
  )
}
