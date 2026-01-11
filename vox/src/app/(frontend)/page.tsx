import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Container } from '@/components/ui/container'
import { Link } from '@/components/ui/typography'
import { WhoWeAreSection } from '@/components/sections/WhoWeAre'
import { TimelineSection } from '@/components/sections/Timeline'
import { JournalSection } from '@/components/sections/Journal'
import { ContactSection } from '@/components/sections/Contact'

export default async function HomePage() {
    const payload = await getPayload({ config: configPromise })

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#0A1A2F] text-white pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                 {/* Premium Background Effects */}
                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/40 blur-3xl" />
                 </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            VOX EQUITY
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Empowering future leaders to advance health equity through research and insight
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/apply"
                                className="px-8 py-4 bg-white text-[#0A1A2F] rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="#who-we-are"
                                className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Bottom Curve can go here if desired, but clean cut is also modern */}
            </section>

            <WhoWeAreSection />
            <TimelineSection />
            <JournalSection />
            <ContactSection />
        </div>
    )
}


export const metadata: Metadata = {
    title: 'VOX | Academic Research Platform',
    description:
        'Discover cutting-edge research, connect with leading researchers, and explore innovative labs.',
}
