"use server";

import Image from "next/image";

const roles = [
  {
    title: "Co-Founder, Chief Product Officer",
    company: "Koel Labs",
    date: "Aug 2024 - Present",
    description: [
      "Secured $80,000+ in credits & grants from companies like Amazon, Google, and Mozilla. Lead the design and creation of our pitch decks.",
      "We currently hold the SoTA model (#1 top performing) for phonemic transcription machine-learning models (beating out a model created by Facebook).",
      "Led design and programming of our minimum viable product (MVP) for presentation in San Francisco at Mozilla's Demo Day. Solo brand and product designer.",
      "Designed brand from the ground up, from logos to graphics to typography, culminating in a new website and brand materials.",
    ],
    items: [
      {
        image: "/koelLabs.png",
        alt: "Koel Labs",
        link: "https://www.koellabs.com/",
      },
      {
        image: "/mozilla.png",
        alt: "Mozilla Builders Cohort 2024",
        link: "https://builders.mozilla.org/programs/?tab=cohorts",
      },
    ],
  },
  {
    title: "Research Assistant",
    previousTitle: "Research Intern",
    company: "Washington State University",
    icon: "/wsu.png",
    date: "Aug 2023 - Present",
    description: [
      "Developed algorithm for extracting specialized institution holdings from OCLC (Online Computer Library Center), enabling WSU libraries to efficiently collect 200k+ rows of data for research purposes.",
      "Led technical side of research by creating APIs, algorithms, and programs that facilitated research initiatives, resulting in two published open-source web tools now used by other libraries.",
      "Created and published multiple interactive Tableau visualizations for librarians with 2200+ views/uses, transforming complex data into accessible insights.",
      "Co-authored 4 research works including 2 presentations, and 2 research posters (presented at WSU Academic Showcase & WSU Everett Symposium), and currently working on a paper for publication.",
    ],
    items: [
      {
        image: "/wsu.png",
        alt: "Washington State University logo",
        link: "https://www.ukrainianbookproject.com/",
      },
      {
        image: "/wsu-poster.png",
        alt: "Research poster for WSU Academic Showcase 2024",
        link: "https://www.figma.com/design/a587LZy952mJq3tZyj4hvF/Mapping-Ukrainian-collections-in-U.S.-public-libraries%E2%80%8B?node-id=0-1&t=LOb1BWCWKX4nmtmA-1",
      },
    ],
  },
  {
    title: "President of the Board",
    previousTitle:
      "Vice President of the Board, Director of Public Relations, Team Captain",
    company: "Mukilteo Robotics",
    date: "Nov 2022 - Present",
    description: [
      "Lead the fundraising of over $18,000 for the organization via fundraising efforts. Co-writer of Analog Devices grant proposal that secured $5,000 in funding two years in a row.",
      "Grew the organization to 45 active members who participated during the 2023 - 2024 season as competitors or collegiate mentors (an increase from 23 total members the previous season with a YoY growth of 96%)",
      "Implemented new programs for the retention of women members, leading to a 0% attrition rate for the first time in MR history.",
      "Qualified for the state competition 3 years in a row. Main programmer for my team, creating driver and autonomous functions for the robot in Python, Blockly, and C++. Won local tournament.",
      "As the first-ever Director of Public Relations for Mukilteo Robotics, I created all branding elements from scratch, including colors, fonts, visual elements, and messaging, to ensure a solid and consistent identity.",
    ],
    items: [
      {
        image: "/mr.jpeg",
        alt: "Mukilteo Robotics",
        link: "https://www.mukilteorobotics.org/",
      },
      {
        image: "/mr-report.png",
        alt: "Mukilteo Robotics Annual Report",
        link: "https://www.mukilteorobotics.org/2023-2024-Report.pdf",
      },
    ],
  },
  {
    title: "Vice Chairman",
    previousTitle: "Council Member",
    company: "Legislative Youth Advisory Council (LYAC)",
    date: "July 2023 - Present",
    description: [
      "1 of 24 students selected by the lieutenant governor's office from across all of Washington State to serve as an advisor to state legislators, representing 1.6 million young people in Washington. Elected to serve as Vice Chairman.",
      "Leading weekly meetings to a cohort of 24 members. Developed long-term plans for outreach about supported legislation and applications.",
      "Lead outreach to over 2,500+ Washington State schools via email and helped organize in-person Action Day at the state capitol with 100+ attendees.",
      "Implemented Senate Bill 5462 (promotion of inclusive learning standards in public schools) with the Washington Office of Superintendent of Public Instruction (OSPI).",
      "Advocated for language access in education legislation to help ELL students get the support they need on a state level.",
    ],
    items: [
      {
        image: "/lyac.png",
        alt: "Legislative Youth Advisory Council",
        link: "https://walyac.org/",
      },
    ],
  },
  {
    title: "Founder, Executive Director",
    company: "FOYM.",
    date: "July 2023 - Present",
    description: [
      "Founded an organization with a mission of collaborating with nonprofits and organizations to design and develop websites that enhance their reach and influence, completely free of charge.",
      "Personally designed and developed 6 open-source website templates for organizations to use freely, using technologies like React, Next.js, and Tailwind CSS.",
      "Received 30,000+ visits to the foym.org website throughout the organization's lifetime.",
      "Fostered 2 long-term partnerships with local nonprofits in the state of Washington, providing ongoing design and development services.",
      "Featured in the Mukilteo Beacon local news for this nonprofit technology assistance initiative.",
    ],
    items: [
      {
        image: "/foym.png",
        alt: "FOYM",
        link: "https://www.foym.org/",
      },
    ],
  },
  {
    title: "Director of Front-End Development",
    previousTitle: "Front-End Lead",
    company: "4Human Corporation",
    date: "Dec 2023 - Sep 2024",
    description: [
      "Directing front-end development for the entire 4Human organization. Personally executing the development of the 4Human website.",
      "Overseeing developers creating and developing front-end interfaces for multiple full-stack applications built in collaboration with other organizations.",
    ],
    items: [
      {
        image: "/4h.png",
        alt: "4Human Corporation",
        link: "https://www.4human.co/",
      },
    ],
  },
];

export default async function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="mt-12">
      <h2
        id="experience-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Experience
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      {roles.map((role) => (
        <article
          key={role.company}
          className="mt-6"
          itemScope
          itemType="https://schema.org/EmployeeRole"
        >
          <div className="flex">
            <div>
              <h3
                className="text-lg tracking-tight font-semibold"
                itemProp="roleName"
              >
                {role.title}
              </h3>
              {role.previousTitle && (
                <p
                  className="mt-1 mb-1 text-sm sm:text-base font-medium leading-4 text-neutral-800/60 italic"
                  itemProp="roleName"
                >
                  Previously: {role.previousTitle}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">
              <span itemProp="name">{role.company}</span>
            </p>
            <p
              className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
              itemProp="startDate"
            >
              {role.date}
            </p>
          </div>
          <div
            className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80"
            itemProp="description"
          >
            <ol className="list-outside ml-4">
              {role.description.map((desc, index) => (
                <li key={index} className="mt-2 list-outside list-disc">
                  {Array.isArray(desc)
                    ? desc.map((d, i) => (
                        <p key={i} className="mt-2">
                          {d}
                        </p>
                      ))
                    : desc}
                </li>
              ))}
            </ol>
          </div>
          {role.items && (
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {role.items.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mr-2 rounded-md relative shadow-sm h-20"
                  aria-label={`View ${item.alt}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="rounded-md object-cover border aspect-video border-neutral-400/50 shadow-inner w-full"
                    itemProp="image"
                  />
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
