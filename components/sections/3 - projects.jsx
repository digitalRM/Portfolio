'use server'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projects = [
    {
      title: '4Human Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      link: 'https://www.4human.co/',
      description: 'Designed & developed the front-end interface for the 4Human website.'
    },
    {
      title: 'FOYM Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      link: 'https://www.foym.org/',
      description: 'Designed & developed the landing page for the FOYM website. '
    },
    {
      title: 'Mukilteo Robotics Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Framer Motion': 'border border-pink-500/15 text-pink-800 bg-pink-500/5 hover:bg-pink-500/5',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      link: 'https://www.mukilteorobotics.org/',
      description: "Designed & developed the website for Mukilteo Robotics, an organization dedicated to providing free competitive robotics access in the Mukilteo area."
    },
    {
      title: 'COVID-19 Machine Learning Analysis',
      released: true,
      badges: {
        'Python': 'border border-yellow-500/20 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15',
        'Pandas': 'border border-cyan-500/15 text-cyan-800 bg-cyan-500/5 hover:bg-cyan-500/5',
        'Sklearn': 'border border-orange-600/15 text-orange-800 bg-orange-600/5 hover:bg-orange-600/5',
        'Numpy': 'border border-indigo-500/15 text-indigo-800 bg-indigo-500/5 hover:bg-indigo-500/5',
        'Matplotlib': 'border border-red-500/15 text-red-800 bg-red-500/10 hover:bg-red-500/10',
        'Seaborn': 'border border-green-500/15 text-green-800 bg-green-500/10 hover:bg-green-500/10',
        'Plotnine': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
      },
      link: 'https://github.com/EricBae21/Analysis-of-COVID-19',
      description: 'We won 1st in the Health Track and 2nd Place in the DubsTech\'s 4th Datathon for our exceptional Machine Learning Model.'
    },
    {
      title: 'UW CSE 455 Kernal Demo Site',
      released: true,
      badges: {
        'React': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Headless UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      },
      link: 'https://github.com/DerekZZhu/KernelCooker',
      description: 'Designed & developed the front-end for the Kernel Demo Site for University Of Washington\'s CSE 455 class.'
    },
    {
      title: 'Portfolio Website',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Skills Icons': 'border border-green-500/15 text-green-800 bg-green-500/5 hover:bg-green-500/5',
        'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      },
      link: 'https://github.com/digitalRM/portfolio',
      description: 'Designed & developed the website you are currently viewing! Open sourced on Github.'
    },
    {
      title: 'Accessible Articles',
      released: true,
      badges: {
        'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
        'Python': 'border border-yellow-500/20 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15',
        'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
        'Lucide React': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
        'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
      },
      link: 'https://github.com/digitalRM/CougHacks2024',
      description: 'Washington State University\'s CougHacks 2024 project. We won 1st place! Our project was a web application that allows users to input a URL to an article and receive a more accessible version of the article.'
      
    }
  ]
  
export default async function Projects() {
  return (
      <div className="mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold tracking-tight text-black text-xl">Highlighted Projects</h1>
          <a href="https://github.com/digitalRM" target="_blank" rel="noopener noreferrer" className='h-fit' >
            <h1 className="font-semibold tracking-tight text-black sm:text-sm text-xs">View Code<span className='sm:contents hidden'> On Github </span><ArrowUpRight className='inline-block w-4 h-4 -mr-1 text-neutral-950 transition-all' /></h1>
          </a>
        </div>
        <div className="mt-3 scale-[101%] border-b border-neutral-200" />
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a key={project.link} href={project.link} target="_blank" rel="noopener noreferrer" className='bg-neutral-100/50 group p-6 rounded-lg sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all w-full flex flex-col justify-between'>
              <div>
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">{project.title}</h1>
                  <ArrowUpRight className='inline-block w-6 h-6 -mr-1 text-neutral-800/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                </div>
                <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-800/80 py-2">{project.description}</p>
              </div>
              <div className="mt-2 overflow-auto flex flex-wrap">
                {Object.keys(project.badges).map((badge) => (
                  <Badge key={badge} style={{margin: '2px', flexGrow: 1, justifyContent: 'center'}} className={project.badges[badge]}>{badge}</Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
  )
}
