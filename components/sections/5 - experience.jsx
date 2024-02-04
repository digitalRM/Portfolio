'use server'

const roles = [
  {
    title: 'Director of Front-End Development',
    company: '4Human Corporation',
    date: 'Dec 2023 - Present',
    description: 'Directing front-end development for the entire 4Human organization. Personally designing and developing the 4Human website. Leading a team of 10+ college developers in creating and developing front-end interfaces for a full-stack application, built in collaboration with the Murphy Charitable Foundation in Uganda.'
  },
  {
    title: 'Research Intern',
    company: 'Washington State University',
    date: 'Aug 2023 - Present',
    description: 'Working alongside Gabriella Reznowski and Emily Cukier to develop tools to ensure the availability of cataloging records for Ukrainian books. The project seeks to address the problem of identifying which US libraries have already collected Ukrainian language materials. By discovering which US libraries were already successfully collecting Ukrainian language books, we hoped to collect useful information on vendors and suppliers for Ukrainian books, in order to help libraries with limited collections navigate this collections area.'
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
    description: 'One of twelve students selected by the lieutenant governor\'s office from across Washington State to serve as a youth advisor to state legislators. Working to amplify the voices of all 1.6 million young people in Washington State. Serving as a council member for the Legislative Youth Advisory Council (LYAC) in Washington State. Panelist for the 2023 Washington State LYAC Action Day.'
  },
  {
    title: 'Deputy Executive Director, Director of Public Relations, Team Captain.',
    company: 'Mukilteo Robotics',
    date: 'Nov 2022 - Present',
    description: 'Helping guide over 40+ active members twice a week through the VEX Robotics Competitive program, providing students from around the area with free access to the competitive & highly expensive program. Managing the public relations and marketing for the Mukilteo Robotics organization. Leading efforts to recruit new members and fostering a supportive & inclusive environment.'
  }
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
