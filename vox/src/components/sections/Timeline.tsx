import React from 'react'
import { Container } from '@/components/ui/container'
import { cn } from '@/utilities/ui'

const TimelineCard = ({ 
  number, 
  title, 
  subtitle, 
  duration, 
  description,
  isLast = false 
}: { 
  number: number, 
  title: string, 
  subtitle?: string, 
  duration: string, 
  description: string,
  isLast?: boolean
}) => (
  <div className="relative flex flex-col items-center md:flex-row md:items-start md:w-full group">
    
    {/* Connector Line - Desktop */}
    {!isLast && (
      <div className="hidden md:block absolute top-[28px] left-[50%] right-[-50%] h-[2px] bg-border z-0" />
    )}
    
    {/* Connector Line - Mobile */}
    {!isLast && (
      <div className="md:hidden absolute top-[56px] bottom-[-24px] left-[28px] w-[2px] bg-border z-0" />
    )}

    {/* Content */}
    <div className="flex flex-row md:flex-col items-start w-full gap-4 md:gap-0 relative z-10 bg-background md:bg-transparent p-2 md:p-0">
      
      {/* Number Badge */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 border-muted flex items-center justify-center text-xl font-bold text-slate-700 shadow-sm md:mx-auto md:mb-6 z-10 transition-transform group-hover:scale-110 group-hover:border-primary/50 group-hover:text-primary">
        {number}
      </div>

      {/* Text Content */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full md:mt-2 h-full min-h-[220px] flex flex-col">
        <div className="bg-slate-200 dark:bg-slate-800 -mx-6 -mt-6 p-3 mb-4 rounded-t-lg text-center border-b border-border">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{number}. {title}</h3>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1">{duration}</div>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    
    </div>
  </div>
)

export const TimelineSection: React.FC = () => {
    const steps = [
        {
            title: "Project Conception",
            duration: "Week 1",
            description: "Students are selected through a competitive application process and placed into teams based on shared interests. Together, they choose from existing project topics or propose new ones addressing urgent health equity challenges."
        },
        {
            title: "Training",
            duration: "Week 2 and Beyond",
            description: "Starting in Week 2, students receive foundational training from expert researchers in literature review, research design, and academic writing — building essential skills that guide their work throughout the program."
        },
        {
            title: "Data Collection & Analysis",
            duration: "Weeks 3–7",
            description: "Teams conduct original research on real-world health disparities. With continuous mentorship, they collect and analyze data, refine their research questions, and gain hands-on experience in applied research."
        },
        {
            title: "Grind",
            duration: "Weeks 8–10",
            description: "Students work closely with mentors and experts to revise and polish their manuscripts — strengthening their work for publication and sharpening their research communication skills."
        },
        {
            title: "Finish Line",
            duration: "Weeks 11–14",
            description: "Every student is guaranteed the opportunity to publish in the VOX Equity Journal. Teams may also submit to external journals or conferences, with support navigating the peer-review process."
        },
        {
            title: "Educate, Empower & Inspire",
            duration: "Weeks 15 and Beyond",
            description: "Students turn research into action — launching campus initiatives, raising awareness, and mentoring peers. Many continue through follow-up projects or future research, creating lasting impact."
        }
    ]

  return (
    <section id="timeline" className="py-24 bg-background relative">
      <Container>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Timeline</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A Semester-Long Venture defining the path from conception to impact.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-4 relative">
            {steps.map((step, index) => (
                <TimelineCard 
                    key={index}
                    number={index + 1}
                    title={step.title}
                    duration={step.duration}
                    description={step.description}
                    isLast={index === steps.length - 1}
                />
            ))}
        </div>
      </Container>
    </section>
  )
}
