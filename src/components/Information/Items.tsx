import React from 'react'
import { LucideIcon } from 'lucide-react'

type temsProps = {
  label: string
  icon: LucideIcon
}

export function Items({ label, icon: Icon }: temsProps) {
  return (
    <div className="flex items-center justify-center mr-8 text-primary-white">
      <Icon />
      <p className="ml-2">{label}</p>
    </div>
  )
}
