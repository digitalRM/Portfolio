'use server'

import Header from '@/components/sections/1 - header'
import AboutMe from '@/components/sections/2 - aboutMe'
import Projects from '@/components/sections/3 - projects'
import Experience from '@/components/sections/5 - experience'
import Education from '@/components/sections/6 - education'
import Skills from '@/components/sections/7 - skills'
import Publications from '@/components/sections/8 - publications'
import UpcomingProjects from '@/components/sections/4 - upcomingProjects'
import Footer from '@/components/sections/9 - footer'

export default async function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <div className="relative h-dvh overflow-w-hidden">
        <div className="mx-auto max-w-4xl px-6 pt-6 lg:pt-10 lg:px-8 relative">
          <Header />
          <AboutMe />
          <Projects />
          {/* <UpcomingProjects /> */}
          <Experience />
          {/* <Education /> */}
          <Skills />
          <Publications />
          <Footer />
        </div>
      </div>
    </div>
  )
}
