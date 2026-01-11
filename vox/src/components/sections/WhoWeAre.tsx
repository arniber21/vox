import React from 'react'
import { Container } from '@/components/ui/container'

export const WhoWeAreSection: React.FC = () => {
  return (
    <section id="who-we-are" className="bg-[#0A1A2F] text-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-indigo-900/10 blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Who we are</h2>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-200">
              <p>
                We are the research extension of <span className="font-semibold text-white">Voices of Equity</span> — a
                nationwide, student-led movement with over 50 chapters, thousands of engaged
                students, and a growing track record of fundraising and grant success.
              </p>

              <p>
                Our mission is to empower youth by connecting them with healthcare experts,
                fostering collaborative projects that tackle real-world health disparities, and
                turning research findings into actionable, community-based solutions.
              </p>

              <p>
                We provide students with the tools and mentorship to lead data-driven projects,
                amplify their voices, and take their work beyond the classroom and into the
                communities that need it most.
              </p>

              <p>
                Through hands-on experience, expert guidance, and a vibrant peer network, we’re
                building the next generation of equity-conscious physicians, scientists, policy
                advocates, and changemakers.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-2xl md:text-3xl font-light italic text-blue-200 mb-8">
              Whether you're curious, committed, or just getting started — there's a place for
              you here.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <p className="text-xl font-semibold tracking-wide uppercase">
                Together, this work defines VOX Equity.
              </p>
               {/* Icons placeholder - Simulating the icons from the request */}
               <div className="flex gap-8 items-center justify-center opacity-80 pt-4">
                  {/* Speaker/Voice Icon */}
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L7 8H2V16H7L12 21V3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM19 12C19 14.87 16.82 17.29 14 17.93V19.95C17.93 19.24 21 15.93 21 12C21 8.07 17.93 4.76 14 4.05V6.07C16.82 6.71 19 9.13 19 12Z" /></svg>
                  
                  <span className="text-4xl font-light">+</span>

                  {/* Brain Icon */}
                   <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4C14.89 4 13.88 4.45 13.06 5.17C12.33 4.45 11.23 4 10.06 4C7.79 4 5.95 5.84 5.95 8.11C5.95 10.38 7.79 12.22 10.06 12.22C11.23 12.22 12.33 11.77 13.06 11.05C13.88 11.77 14.89 12.22 16.06 12.22C18.33 12.22 20.17 10.38 20.17 8.11C20.17 5.84 18.33 4 16.06 4ZM16.06 10.5C14.73 10.5 13.66 9.43 13.66 8.11C13.66 6.79 14.73 5.72 16.06 5.72C17.39 5.72 18.46 6.79 18.46 8.11C18.46 9.43 17.39 10.5 16.06 10.5ZM10.06 10.5C8.73 10.5 7.66 9.43 7.66 8.11C7.66 6.79 8.73 5.72 10.06 5.72C11.39 5.72 12.46 6.79 12.46 8.11C12.46 9.43 11.39 10.5 10.06 10.5Z" /><path d="M12 14C7.58 14 4 15.79 4 18V20H20V18C20 15.79 16.42 14 12 14ZM18.2 18H5.8C6.38 16.73 8.95 15.8 12 15.8C15.05 15.8 17.62 16.73 18.2 18Z"/></svg>

                  <span className="text-4xl font-light">+</span>

                  {/* Community/Tank Icon placeholder */}
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11C16 12.93 14.28 14.5 12.15 14.5C10.02 14.5 8.3 12.93 8.3 11C8.3 9.07 10.02 7.5 12.15 7.5C14.28 7.5 16 9.07 16 11ZM5.5 11C5.5 13.48 9.08 15.5 13.5 15.5C17.92 15.5 21.5 13.48 21.5 11C21.5 8.52 17.92 6.5 13.5 6.5C9.08 6.5 5.5 8.52 5.5 11ZM17.35 11C17.35 12.35 15.63 13.45 13.5 13.45C11.37 13.45 9.65 12.35 9.65 11C9.65 9.65 11.37 8.55 13.5 8.55C15.63 8.55 17.35 9.65 17.35 11Z"/></svg>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
