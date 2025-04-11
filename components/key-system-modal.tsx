"use client"
import { X } from "lucide-react"

interface KeySystemModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
}

export default function KeySystemModal({ isOpen, onClose, onSelect }: KeySystemModalProps) {
  const keySystems = [
    {
      name: "Linkvertise",
      description: "Get your key through Linkvertise",
      url: "https://ads.luarmor.net/get_key?for=Solixhub_Free_KeySystem-OWlLHDMCHADk",
    },
    {
      name: "Lootlabs",
      description: "Get your key through Lootlabs",
      url: "https://ads.luarmor.net/get_key?for=Solix_Free_Keysystems-pqJCGTqnTsng",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white dark:bg-dark-300 rounded-xl shadow-xl w-full max-w-md animate-slide-up">
        <div className="flex items-center justify-between p-4 border-b border-pink-100 dark:border-dark-200">
          <h3 className="text-xl font-bold gradient-text">Choose Key System</h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Select your preferred key system to get your free key. Both options are completely free.
          </p>
          {keySystems.map((system) => (
            <button
              key={system.name}
              onClick={() => onSelect(system.url)}
              className="w-full text-left p-4 border border-pink-200 dark:border-purple-800 rounded-lg hover:border-pink-300 dark:hover:border-purple-700 hover:bg-pink-50 dark:hover:bg-dark-100 transition-colors hover-scale"
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{system.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{system.description}</p>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-pink-100 dark:border-dark-100">
          <button onClick={onClose} className="w-full btn-secondary hover-scale">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
