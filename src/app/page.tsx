import { Navigation } from "@/components/Navigation"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to CYCLE-TECH BIKES
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Your premier destination for high-quality bicycles and accessories.
          </p>
          <div className="flex justify-center">
            <ThemeSwitcher />
          </div>
        </div>
      </main>
    </div>
  )
} 