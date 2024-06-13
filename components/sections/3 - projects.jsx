'use client'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

import { motion, useScroll, useTransform, useIn } from "framer-motion"


const projects = [
    // {
    //   title: '4Human Website',
    //   released: true,
    //   badges: {
    //     'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
    //     'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
    //     'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
    //     'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
    //   },
    //   link: 'https://www.4human.co/',
    //   description: 'Designed & developed the 4Human website.'
    // },
    {
      title: 'FOYM Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      image: '/foym.jpeg',
      link: 'https://www.foym.org/',
      description: 'I designed and developed the website for FOYM, a project I started that provides free web development services to nonprofits and other community-based organizations. I wanted to design something with neon colors while maintaining a professional, slightly futuristic look. '
    },
    {
      title: 'Accessible Articles',
      released: true,
      badges: {
        'Next.js': 'border border-black/40 text-black bg-black/5 hover:bg-black/5',
        'Shadcn/UI': 'border border-black/40 text-black bg-black/5 hover:bg-black/5',
        'Python': 'border border-yellow-500/40 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15',
        'Figma': 'border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Lucide React': 'border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Tailwind CSS': 'border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
      },
      image: '/access.gif',
      link: 'https://github.com/digitalRM/CougHacks2024',
      description: 'This was my team’s first-place-winning project for Washington State University\'s CougHacks ‘24. We created a program to make articles more accessible for people with conditions like Dyslexia by providing full color, font, and size customizability.       '
      
    },
    {
      title: 'Mukilteo Robotics Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/40 text-black bg-black/5 hover:bg-black/5',
        'Shadcn/UI': 'border border-black/40 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Framer Motion': 'border border-pink-500/40 text-pink-800 bg-pink-500/5 hover:bg-pink-500/5',
        'Figma': 'border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Cloudflare': 'border border-orange-500/40 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      image: '/mr.jpeg',
      link: 'https://www.mukilteorobotics.org/',
      description: "I designed and developed the website for Mukilteo Robotics, a local non-profit organization that provides free competitive robotics access in the Mukilteo area. I wanted the design to have a professional and modern look to solidify and legitimize the organization for sponsor outreach. "
    },
    {
      title: 'COVID-19 Machine Learning Analysis - DubsTech Datathon 23',
      released: true,
      badges: {
        'Python': 'border border-yellow-500/60 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15',
        'Pandas': 'border border-cyan-500/40 text-cyan-800 bg-cyan-500/5 hover:bg-cyan-500/5',
        'Sklearn': 'border border-orange-600/40 text-orange-800 bg-orange-600/5 hover:bg-orange-600/5',
        'Numpy': 'border border-indigo-500/40 text-indigo-800 bg-indigo-500/5 hover:bg-indigo-500/5',
        'Matplotlib': 'border border-red-500/40 text-red-800 bg-red-500/10 hover:bg-red-500/10',
        'Seaborn': 'border border-green-500/40 text-green-800 bg-green-500/10 hover:bg-green-500/10',
        'Plotnine': 'border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
      },
      image: '/dubtech.jpeg',
      link: 'https://github.com/EricBae21/Analysis-of-COVID-19',
      description: 'This was my team’s project for the DubsTech\'s ‘23 Datathon. We won first place in the health track and second place overall for our exceptional machine-learning model. Our goal was to create a modal that could accurately predict inpatient bed counts based on previous data to help hospitals stressed by the COVID-19 pandemic.       '
    },
    {
      title: 'UW CSE 455 Kernal Demo Site',
      released: true,
      badges: {
        'Vue.js': 'border border-green-500/40 text-green-800 bg-green-500/5 hover:bg-green-500/5',
        'React': 'border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Tailwind CSS': 'border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Headless UI': 'border border-black/40 text-black bg-black/5 hover:bg-black/5',
      },
      image: '/uw.jpeg',
      link: 'https://github.com/DerekZZhu/KernelCooker',
      description: 'I designed and developed the front-end interface for an image-processing demonstration tool for the University Of Washington\'s CSE 455 Computer Vision class. The program allows users to input any 3x3 kernel matrix applied to an image they choose.'
    },
    // {
    //   title: 'Portfolio Website',
    //   released: true,
    //   badges: {
    //     'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
    //     'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
    //     'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
    //     'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
    //     'Skills Icons': 'border border-green-500/15 text-green-800 bg-green-500/5 hover:bg-green-500/5',
    //     'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
    //   },
    //   link: 'https://github.com/digitalRM/portfolio',
    //   description: 'Designed & developed the website you are currently viewing! Open sourced on Github.'
    // },
  ]
  
export default function Projects() {

  
  return (
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold tracking-tight text-black text-xl">Highlighted Projects</h1>
          <a href="https://github.com/digitalRM" target="_blank" rel="noopener noreferrer" className='h-fit' >
            <h1 className="font-semibold tracking-tight text-black sm:text-sm text-xs">View More<span className='sm:contents hidden'> On Github </span><ArrowUpRight className='inline-block w-4 h-4 -mr-1 text-neutral-950 transition-all' /></h1>
          </a>
        </div>
        <div className="mt-3 scale-[101%] border-b border-neutral-200" />
        <motion.div className="mt-6 grid gap-4">
          {projects.map((project) => (
            <motion.a key={project.link} href={project.link} target="_blank" rel="noopener noreferrer" className='bg-neutral-100/50 hover:scale-105 group p-6 rounded-[12px] sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all w-full flex flex-col justify-between'>
              <div>
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-semibold tracking-tight">{project.title}</h1>
                    <ArrowUpRight className='inline-block w-6 h-6 -mr-1 text-neutral-800/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                  </div>
                  <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-800/80 py-2">{project.description}</p>
                </div>
                <div className="mt-2 overflow-auto flex flex-wrap">
                  {Object.keys(project.badges).map((badge) => (
                    <Badge key={badge} style={{margin: '2px', flexGrow: 1, justifyContent: 'center'}} className={project.badges[badge]}>{badge}</Badge>
                  ))}
                </div>
              </div>
              <div className='rounded-[8px] w-full h-fit bg-neutral-100 group-hover:bg-neutral-100/50 transition-all  border-neutral-200 border mt-4 p-2'>
                <Image src={project.image} height={400} width={800} alt={project.title} className='rounded-[6px] grayscale group-hover:grayscale-0 transition-all' />
                
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
  )
}
