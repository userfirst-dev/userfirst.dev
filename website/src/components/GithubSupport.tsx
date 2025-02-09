import { Button } from "@/components/ui/button"
import { Star, Eye } from "lucide-react"
import Link from "next/link"

export default function GitHubSupport() {
  return (
    <section className="my-12 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-center">Support the Initiative</h2>
      <p className="text-center mb-6">
        Help us build the standard for ethical & user-centric development. Your support on GitHub helps grow our
        community and improve our guidelines.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button asChild>
          <Link
            href="https://github.com/userfirst-dev/userfirst.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Star className="w-4 h-4" />
            Star on GitHub or watch the repository
            <Eye className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

