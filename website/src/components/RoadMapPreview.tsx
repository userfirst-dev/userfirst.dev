import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RoadmapPreview() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4 text-center">What we want to achieve</h2>
      <ul className="list-disc list-inside mb-6 max-w-md mx-auto">
        <li>Establish core principles of user-first development</li>
        <li>Create comprehensive documentation and guidelines</li>
      </ul>
      <div className="text-center">
        <Button asChild>
          <Link href="https://github.com/userfirst-dev/userfirst.dev?tab=readme-ov-file#-project-roadmap" target="_blank" rel="noopener noreferrer">
            View Full Roadmap
          </Link>
        </Button>
      </div>
    </section>
  )
}

