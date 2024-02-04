'use server'
import { Badge } from '@/components/ui/badge'

const upcomingProjects = [
  {
    title: 'WSU - Ukrainian Book Project Website',
    released: false,
    type: 'Soon',
    badges: {
      'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
      'Framer Motion': 'border border-pink-500/15 text-pink-800 bg-pink-500/5 hover:bg-pink-500/5',
      'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
      'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
    },
    company: 'Washington State University',
    description: 'Creating & developing the website for the WSU Ukrainian Book Project to host the tools, publications, and resources found and developed by our team.'
  },
  {
    title: '4Human MCF Collaboration',
    released: false,
    type: 'Soon',
    badges: {
      'Next.js': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      'Firebase': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
      'Shadcn/UI': 'border border-black/15 text-black bg-black/5 hover:bg-black/5',
      'Tailwind CSS': 'border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5',
      'Figma': 'border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5',
      'Cloudflare': 'border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5',
    },
    company: '4Human Corporation',
    description: 'Leading a team of 10 developers through the development of the front-end interface for the 4Human Murphy Charitable Foundation collaboration.'

  },
]

export default async function UpcomingProjects() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Projects In Progress</h1>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {upcomingProjects.map((project) => (
          <div key={project.company} className='bg-neutral-100/50 cursor-not-allowed group p-6 rounded-lg sm:justify-between border-neutral-200/50 border transition-all w-full flex flex-col justify-between'>
            <div>
              <div className="flex justify-between">
                <h1 className="text-base font-semibold">{project.title}</h1>
              </div>
              <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-800/80 py-2">{project.description}</p>
            </div>
            <div className="mt-2 overflow-auto flex flex-wrap">
              {Object.keys(project.badges).map((badge) => (
                <Badge key={badge} style={{margin: '2px', flexGrow: 1, justifyContent: 'center'}} className={project.badges[badge]}>{badge}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
