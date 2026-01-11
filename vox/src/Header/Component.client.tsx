'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const defaultNavItems = [
    { link: { type: 'custom', url: '/', label: 'Home', newTab: false } },
    { 
      link: { type: 'custom', url: '#', label: 'About Us', newTab: false },
      children: [
        { link: { type: 'custom', url: '#who-we-are', label: 'What we do', newTab: false } },
        { link: { type: 'custom', url: '#timeline', label: 'Our Timeline', newTab: false } },
      ]
    },
    { link: { type: 'custom', url: '/admin', label: 'Admin', newTab: false } },
    { link: { type: 'custom', url: '/labs', label: 'Research Teams', newTab: false } },
    { link: { type: 'custom', url: '/journals', label: 'VOX Equity Journal', newTab: false } },
  ]
  
  // Use default items if no items are configured, or if we want to enforce the hardcoded structure for this task
  // Ideally we merge, but since the requirement is specific, we prioritize the new structure for the demo
  const navItems = defaultNavItems
  
  const headerData = { ...data, navItems }

  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <>
      {/* Top Banner */}
      <div className="bg-background border-b border-border py-2 text-center text-sm">
        <span className="italic font-medium text-[#1e3a8a] dark:text-blue-400">
           Now Accepting Applications for Spring 2026!{' '}
        </span>
        <Link href="/apply" className="font-semibold underline hover:text-primary ml-1 text-[#1e3a8a] dark:text-blue-400">
          VOX Equity Application.
        </Link>
        <span className="ml-4 text-muted-foreground text-xs">
          Deadline: January 16th, 2026
        </span>
      </div>

      <header className="container relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
        <div className="py-6 flex justify-between items-center">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0 w-32" />
          </Link>
          <HeaderNav data={headerData as any} />
        </div>
      </header>
    </>
  )
}
