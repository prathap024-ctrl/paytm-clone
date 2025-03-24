import { ArrowLeft } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 animate-fade-in">
      <div className="glass rounded-2xl p-8 max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl mb-6">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="rounded-full bg-[#002970] cursor-pointer font-semibold py-3 px-6 hover:bg-[#002970] transition" asChild>
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
