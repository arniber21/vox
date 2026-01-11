import React from 'react'
import { Container } from '@/components/ui/container'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export const JournalSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative isolate overflow-hidden">
        {/* Subtle texture/gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.slate.950))]" />
        
        <Container>
            <div className="max-w-4xl mx-auto text-center space-y-10">
                
                {/* Logo Area */}
                <div className="flex flex-col items-center justify-center gap-4">
                     {/* Placeholder for big logo if needed, using icon for now */}
                     <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                        <BookOpen className="w-10 h-10 text-blue-200" />
                     </div>
                     <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        VOX Equity Journal
                     </h2>
                </div>

                <div className="text-lg md:text-xl leading-relaxed text-slate-300 space-y-6">
                    <p>
                        The <span className="text-white font-medium">VOX Equity Journal</span> is a peer-reviewed, student-led publication at the intersection of research and real-world impact.
                    </p>
                    <p>
                        By highlighting innovative, data-driven work from emerging scholars, this journal not only advances the academic understanding of health disparities but also informs the community-based initiatives of VOX Equity chapters across the country. Each contribution reflects a commitment to bridging research with advocacy — empowering students to drive evidence-based solutions, support local engagement, and shape the future of health equity through education, activism, and policy insight.
                    </p>
                </div>

                <div className="pt-8">
                     <p className="text-2xl font-semibold text-blue-300 mb-8 animate-pulse">
                        Find our 2026 VOX Equity Team Projects here soon!
                     </p>

                     <Link 
                        href="/contact" // Assuming /contact, or anchor to contact section
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-950 bg-white hover:bg-blue-50 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                     >
                        Contact Us
                     </Link>
                </div>

            </div>
        </Container>
    </section>
  )
}
