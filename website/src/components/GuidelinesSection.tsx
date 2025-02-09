import { Button } from "@/components/ui/button"
import { FileText, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function GuidelinesSection() {
  return (
    <section className="my-12 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-center">Guidelines</h2>
      <p className="text-center mb-6">
        Project&apos;s comprehensive guidelines form the backbone of ethical and user-centric development. We encourage you to
        read, review, and contribute to these living documents.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button asChild>
          <Link
            href="https://github.com/userfirst-dev/userfirst.dev/blob/main/docs/full_guidelines.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Read Guidelines
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="https://github.com/userfirst-dev/userfirst.dev/issues/new?labels=guidelines"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Provide Feedback
          </Link>
        </Button>
      </div>
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Your insights and experiences can help shape the future of user-first development.
      </div>
    </section>
  )
}

