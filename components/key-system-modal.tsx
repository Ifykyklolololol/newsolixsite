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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-pink-100">
          <h3 className="text-xl font-bold">Choose Key System</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-gray-600 mb-4">
            Select your preferred key system to get your free key. Both options are completely free.
          </p>
          {keySystems.map((system) => (
            <button
              key={system.name}
              onClick={() => onSelect(system.url)}
              className="w-full text-left p-4 border border-pink-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors"
            >
              <h4 className="font-semibold text-lg">{system.name}</h4>
              <p className="text-gray-600 text-sm">{system.description}</p>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-pink-100">
          <button onClick={onClose} className="w-full btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
