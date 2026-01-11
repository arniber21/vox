import React from 'react'
import { Container } from '@/components/ui/container'
import { Heading, Paragraph, Link } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

export default function ApplyPage() {
  return (
    <div className="pt-24 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Heading level={1} className="mb-6">
            Apply to VOX Equity
          </Heading>
          <Heading level={3} className="mb-8 text-muted-foreground">
            Spring 2026 Cohort
          </Heading>

          <div className="prose dark:prose-invert max-w-none">
            <Paragraph className="text-xl leading-relaxed mb-8">
              VOX Equity is a structured program that empowers undergraduate students to engage in
              guided, equity-focused research. Under the mentorship of Principal Investigators (PIs),
              students explore pressing issues in health equity, develop actionable solutions, and
              produce professional-quality outputs.
            </Paragraph>

            <Heading level={2} className="mt-12 mb-6">
              Program Details
            </Heading>
            <Paragraph>
              Each project is designed to be achievable in one academic semester while maintaining
              academic rigor and community relevance. To maximize impact, each team is expected to
              generate two primary deliverables:
            </Paragraph>
            <ul className="list-disc pl-6 mt-4 space-y-2 mb-8 text-lg">
              <li>
                <strong>A publication-ready output</strong> (e.g., manuscript, policy brief, or case
                study) which we will publish internally through VoE, in addition to possibilities of
                external submission-based publication to journals.
              </li>
              <li>
                <strong>A short project video</strong>, produced in collaboration with the Media
                Team, to share findings across the VoE national network, to 50+ campuses across the
                US.
              </li>
            </ul>

            <Paragraph>
              In addition, each project will highlight both student researchers and PIs through
              profiles and spotlights in both video and written outputs, ensuring recognition for
              contributions and expanding professional visibility.
            </Paragraph>

            <Heading level={2} className="mt-12 mb-6">
              Contact
            </Heading>
            <Paragraph>
              If you have any questions regarding the application process, please email Rhea Saranath
              (<Link href="mailto:rheasanjnasaranath@gmail.com">rheasanjnasaranath@gmail.com</Link>). We look forward to reading your application!
            </Paragraph>

            <div className="mt-12 p-8 bg-card border rounded-lg flex flex-col items-center text-center">
              <Heading level={3} className="mb-4">
                Ready to Apply?
              </Heading>
              <Paragraph className="mb-6">
                Applications for Spring 2026 are now open.
              </Paragraph>
              <Button asChild size="lg">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Fc3dD3hf7qcte9htZZraIasxM8LBj9uRqknu5GKu3r85Og/viewform?usp=publish-editor">
                  Submit Application
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
