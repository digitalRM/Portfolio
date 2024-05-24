'use server'

const roles = [
  {
    title: 'Research Assistant',
    company: 'Washington State University',
    date: 'Aug 2023 - Present',
    description: 'Working alongside Gabriella Reznowski and Emily Cukier to develop tools to ensure the availability of cataloging records for Ukrainian books. By discovering which US libraries were already successfully collecting Ukrainian language books, we hoped to collect useful information on vendors and suppliers for Ukrainian books, in order to help libraries with limited collections navigate this collections area. Researching, analyzing, and writing about this for publication in a research paper. '
  },
  {
    title: 'Founder, Executive Director',
    company: 'FOYM.',
    date: 'July 2023 - Present',
    description: 'Founded a non-for-profit organization that aims to provide free web development services to non-profits and other organizations. Designing, developing, and programming websites using technologies like HTML, CSS, Figma, React, Next.JS, & Tailwind CSS.'
  },
  {
    title: 'Council Member',
    company: 'Legislative Youth Advisory Council (LYAC)',
    date: 'July 2023 - Present',
    description: 'One of twelve students selected by the lieutenant governor\'s office from across Washington State to serve as a youth advisor to state legislators. Working on language access in education legislation to help ELL students across our state get the support they need. Helping amplify the voices of all 1.6 million young people in Washington State. Panelist for the 2023 Washington State LYAC Action Day.'
  },
  {
    title: 'Deputy Executive Director, Director of Public Relations, Team Captain.',
    company: 'Mukilteo Robotics',
    date: 'Nov 2022 - Present',
    description: 'Grew the organization to 45 active members who participated during the 2023 - 2024 season as competitors or collegiate mentors (an increase from 23 total members the previous season with a YoY growth of 96%). Helped raise almost $30,000 in funding for the organization.'
  },
  {
    title: 'Director of Front-End Development',
    company: '4Human Corporation',
    date: 'Dec 2023 - Present',
    description: 'Directing front-end development for the entire 4Human organization. Personally executing the development of the 4Human website. Overseeing developers creating and developing front-end interfaces for multiple full-stack applications built in collaboration with other organizations.'
  },
]
  

export default async function Experience() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Experience</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200 " />
      {roles.map((role) => (
        <div key={role.company} className="mt-6">
          <h2 className="text-base font-semibold">{role.title}</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{role.company}</p>
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{role.date}</p>
          </div>
          <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80">{role.description}</p>
        </div>
      ))}
    </div>
  )
}
