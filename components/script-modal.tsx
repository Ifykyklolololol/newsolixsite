"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface ScriptModalProps {
  isOpen: boolean
  onClose: () => void
  script: {
    name: string
    code: string
  }
}

export default function ScriptModal({ isOpen, onClose, script }: ScriptModalProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()`,
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-pink-100">
          <h3 className="text-xl font-bold">{script.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="code-block h-full">
            <pre className="whitespace-pre-wrap">
              loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/Solixreworkkeysystem/refs/heads/main/solix%20new%20keyui.lua"))()
            </pre>
          </div>
        </div>
        <div className="p-4 border-t border-pink-100 flex justify-between">
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
          <button onClick={copyToClipboard} className="btn-primary glow-effect">
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      </div>
    </div>
  )
}
