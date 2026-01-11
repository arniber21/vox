import React from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-border">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Contact Us</h2>
            <p className="text-muted-foreground">
                Have questions about the program, applications, or partnership opportunities? Reach out to us.
            </p>
        </div>

        <div className="max-w-xl mx-auto bg-slate-50 p-8 rounded-xl border border-border shadow-sm">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell us more..." />
                </div>

                <Button type="submit" size="lg" className="w-full">
                    Send Message
                </Button>
            </form>
        </div>
      </Container>
    </section>
  )
}
