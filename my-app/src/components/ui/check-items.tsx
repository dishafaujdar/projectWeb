import type React from "react"
import { CheckCircle } from "lucide-react"

interface CheckItemProps {
  children: React.ReactNode
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-6 w-6 text-[#6366f1] mt-1 flex-shrink-0" />
      <p className="text-lg text-gray-300">{children}</p>
    </div>
  )
}
