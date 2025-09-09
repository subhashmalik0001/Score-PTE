import React from "react"

export function Progress({ value = 0, className = "" }) {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0))
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div
        className="h-full bg-blue-500 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
