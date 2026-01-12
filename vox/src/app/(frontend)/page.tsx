import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Link } from '@/components/ui/typography'
import { Logo } from '@/components/Logo/Logo'
import { WhoWeAreSection } from '@/components/sections/WhoWeAre'
import { TimelineSection } from '@/components/sections/Timeline'
import { JournalSection } from '@/components/sections/Journal'
import { ContactSection } from '@/components/sections/Contact'

export default async function HomePage() {
    const payload = await getPayload({ config: configPromise })

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
                <section
                    className="relative text-white pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-cover bg-center min-h-[440px] md:min-h-[680px]"
                    style={{ backgroundImage: "url('/media/vox_background.jpg')", backgroundPosition: 'center 20%' }}
                    >
                 {/* Premium Background Effects */}
                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/40 blur-3xl" />
                 </div>

                 {/* Dim overlay to ensure text contrast */}
                 {/* <div className="absolute inset-0 bg-black/30 -z-5" aria-hidden /> */}

                <div className="container relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <Logo loading="eager" priority="high" className="w-48 md:w-[360px] h-auto max-w-none" />
                        </div>
                        <p className="text-xl md:text-3xl font-light text-[#0A2D66] mb-12 max-w-3xl mx-auto leading-relaxed">
                            Empowering future leaders to advance health equity through research and insight
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/apply"
                                className="px-8 py-4 bg-[#0A2D66] text-white rounded-full font-bold text-lg  transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="#who-we-are"
                                className="px-8 py-4 border bg-white text-[#0A2D66] rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
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
