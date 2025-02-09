import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GitHubSupport from "@/components/GithubSupport"
import { Github, Twitter, } from "lucide-react"
import RoadmapPreview from "@/components/RoadMapPreview" // Import RoadmapPreview component
import GuidelinesSection from "@/components/GuidelinesSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            The Standard for Ethical & User-Centric Development
          </h1>
          <p className="text-xl mb-6">
            Helping developers build apps & websites that prioritize users while maintaining ethical monetization.
          </p>
          <p className="text-lg mb-8">
            Userfirst.dev is an open-source initiative to establish clear guidelines for user-first app and web
            development.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link
                href="https://github.com/userfirst-dev/userfirst.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://twitter.com/userfirstdev" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
                Follow on Twitter
              </Link>
            </Button>
          </div>
        </section>
        <GuidelinesSection />
        <GitHubSupport />

        <RoadmapPreview />
      </main>
      <Footer />
    </div>
  )
}

