interface FeatureListProps {
  features: string[]
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 stagger-animation">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-pink-500 dark:text-purple-400 flex-shrink-0 mt-0.5 animate-bounce-small"
            style={{ animationDelay: `${index * 0.1}s` }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
        </div>
      ))}
    </div>
  )
}
