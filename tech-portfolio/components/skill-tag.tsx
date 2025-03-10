import { Badge } from "@/components/ui/badge"

interface SkillTagProps {
  name: string
  level?: number
}

export function SkillTag({ name, level = 0 }: SkillTagProps) {
  return (
    <Badge
      variant="outline"
      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 relative overflow-hidden group"
    >
      <span className="relative z-10">{name}</span>
      <div
        className="absolute bottom-0 left-0 h-full bg-primary/20 transition-all duration-300 -z-0"
        style={{ width: `${level}%` }}
      />
    </Badge>
  )
}

