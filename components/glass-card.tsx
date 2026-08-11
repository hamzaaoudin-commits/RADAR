import type { ReactNode } from "react"

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`glass-card rounded-lg ${className}`}>{children}</div>
}
