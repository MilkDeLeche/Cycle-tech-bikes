import { useTheme } from "next-themes"
import Image from "next/image"

export function Logo() {
  const { theme } = useTheme()
  
  const logoPath = theme === "dark" 
    ? "/lovable-uploads/8398ad8c-d082-4894-8b1d-ce3fd6482b0b.png" // Dark theme logo
    : "/lovable-uploads/8398ad8c-d082-4894-8b1d-ce3fd6482b0b.png" // Light theme logo (same for now)

  return (
    <a href="/" className="block">
      <img
        src={logoPath}
        alt="Velo Noir Logo"
        className="h-8 w-auto"
      />
    </a>
  )
} 