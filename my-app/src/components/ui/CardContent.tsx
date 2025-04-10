import type { ReactNode } from "react"

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`text-gray-700 dark:text-gray-300 ${className}`}>{children}</div>
}
