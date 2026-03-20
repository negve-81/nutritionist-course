import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { CourseBenefits } from "@/components/landing/course-benefits"
import { CourseStructure } from "@/components/landing/course-structure"
import { HealthQuiz } from "@/components/landing/health-quiz"
import { Specialists } from "@/components/landing/specialists"
import { ExpertiseBlock } from "@/components/landing/expertise-block"
import { CaseStudies } from "@/components/landing/case-studies"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolution />
      <CourseBenefits />
      <CourseStructure />
      <HealthQuiz />
      <Specialists />
      <ExpertiseBlock />
      <CaseStudies />
      <CTASection />
      <Footer />
    </main>
  )
}
