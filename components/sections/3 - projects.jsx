"use server";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Koel Labs Website",
    released: true,
    image: "/koel.jpeg",
    link: "https://koellabs.com/",
    description: "Official website for Koel Labs",
  },
  {
    title: "FOYM Website",
    released: true,
    badges: {
      "Next.js":
        "border border-black/15 text-black bg-black/5 hover:bg-black/5",
      "Tailwind CSS":
        "border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
      Figma:
        "border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5",
      Cloudflare:
        "border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5",
    },
    image: "/foym.jpeg",
    link: "https://www.foym.org/",
    description:
      "I designed and developed the website for FOYM, a project I started that provides free web development services to nonprofits and other community-based organizations. I wanted to design something with neon colors while maintaining a professional, slightly futuristic look. ",
  },
  {
    title: "Ukrainian Book Project Website",
    released: true,
    image: "/ubp.jpeg",
    link: "https://www.ukrainianbookproject.com/",
    description:
      "Platform for tracking Ukrainian language collections in US libraries.",
  },
  {
    title: "Ukrainian Book Project Search Tool",
    released: true,
    image: "/SearchTool.jpeg",
    link: "https://books.ukrainianbookproject.com/",
    description:
      "Search and explore libraries in the United States (with some libraries from other countries). Filter by type and location to find specific institutions.",
  },
  {
    title: "UW CSE 455 Kernal Demo Site",
    released: true,
    badges: {
      "Vue.js":
        "border border-green-500/40 text-green-800 bg-green-500/5 hover:bg-green-500/5",
      React:
        "border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
      "Tailwind CSS":
        "border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
      "Headless UI":
        "border border-black/40 text-black bg-black/5 hover:bg-black/5",
    },
    image: "/uw.jpeg",
    link: "https://github.com/DerekZZhu/KernelCooker",
    description:
      "I designed and developed the front-end interface for an image-processing demonstration tool for the University Of Washington's CSE 455 Computer Vision class. The program allows users to input any 3x3 kernel matrix applied to an image they choose.",
  },
  {
    title: "Washington Youth Alliance Website",
    released: true,
    image: "/waYouth.jpeg",
    link: "https://www.washingtonyouthalliance.org/",
    description: "Official website for Washington Youth Alliance organization.",
  },
  {
    title: "Poetry Sentiment Analysis",
    released: true,
    image: "/PoetrySentimentAnalysis.jpeg",
    link: "https://github.com/digitalRM/Poetry-Sentiment-Analyzer",
    description:
      "A web application that analyzes the emotional content of poetry using Natural Language Processing (NLP) techniques.",
  },
  {
    title: "Accessible Articles",
    released: true,
    badges: {
      "Next.js":
        "border border-black/40 text-black bg-black/5 hover:bg-black/5",
      "Shadcn/UI":
        "border border-black/40 text-black bg-black/5 hover:bg-black/5",
      Python:
        "border border-yellow-500/40 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15",
      Figma:
        "border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5",
      "Lucide React":
        "border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
      "Tailwind CSS":
        "border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
    },
    image: "/access.gif",
    link: "https://github.com/digitalRM/CougHacks2024",
    description:
      "This was my team's first-place-winning project for Washington State University's CougHacks '24. We created a program to make articles more accessible for people with conditions like Dyslexia by providing full color, font, and size customizability.",
  },
  {
    title: "Mukilteo Robotics Website",
    released: true,
    badges: {
      "Next.js":
        "border border-black/40 text-black bg-black/5 hover:bg-black/5",
      "Shadcn/UI":
        "border border-black/40 text-black bg-black/5 hover:bg-black/5",
      "Tailwind CSS":
        "border border-blue-500/40 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5",
      "Framer Motion":
        "border border-pink-500/40 text-pink-800 bg-pink-500/5 hover:bg-pink-500/5",
      Figma:
        "border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5",
      Cloudflare:
        "border border-orange-500/40 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5",
    },
    image: "/mr.jpeg",
    link: "https://www.mukilteorobotics.org/",
    description:
      "I designed and developed the website for Mukilteo Robotics, a local non-profit organization that provides free competitive robotics access in the Mukilteo area. I wanted the design to have a professional and modern look to solidify and legitimize the organization for sponsor outreach.",
  },
  {
    title: "Research Data Tool",
    released: true,
    image: "/ResearchDataTool.png",
    link: "https://data-tool.ukrainianbookproject.com/",
    description:
      "This tool utilizes the OCLC Registry API and requires that you have access to the API. This tool is entirely open source and available on GitHub.",
  },
  {
    title: "COVID-19 Machine Learning Analysis",
    released: true,
    badges: {
      Python:
        "border border-yellow-500/60 text-yellow-800 bg-yellow-500/15 hover:bg-yellow-500/15",
      Pandas:
        "border border-cyan-500/40 text-cyan-800 bg-cyan-500/5 hover:bg-cyan-500/5",
      Sklearn:
        "border border-orange-600/40 text-orange-800 bg-orange-600/5 hover:bg-orange-600/5",
      Numpy:
        "border border-indigo-500/40 text-indigo-800 bg-indigo-500/5 hover:bg-indigo-500/5",
      Matplotlib:
        "border border-red-500/40 text-red-800 bg-red-500/10 hover:bg-red-500/10",
      Seaborn:
        "border border-green-500/40 text-green-800 bg-green-500/10 hover:bg-green-500/10",
      Plotnine:
        "border border-purple-500/40 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5",
    },
    image: "/dubtech.jpeg",
    link: "https://github.com/EricBae21/Analysis-of-COVID-19",
    description:
      "This was my team's project for the DubsTech's '23 Datathon. We won first place in the health track and second place overall for our exceptional machine-learning model. Our goal was to create a modal that could accurately predict inpatient bed counts based on previous data to help hospitals stressed by the COVID-19 pandemic.",
  },
];

export default async function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mt-12">
      <div className="flex justify-between items-center">
        <h2
          id="projects-heading"
          className="font-semibold tracking-tight text-black text-xl"
        >
          Highlighted Projects
        </h2>
        <a
          href="https://github.com/digitalRM"
          target="_blank"
          rel="noopener noreferrer"
          className="h-fit"
          aria-label="View more projects on GitHub"
        >
          <h3 className="font-semibold tracking-tight text-black sm:text-sm text-xs">
            View More<span className="sm:contents hidden"> On Github </span>
            <ArrowUpRight
              className="inline-block w-4 h-4 -mr-1 text-neutral-950 transition-all"
              aria-hidden="true"
            />
          </h3>
        </a>
      </div>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />

      <Carousel
        className="mt-6"
        opts={{
          align: "start",
          startIndex: 0,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={project.title} className="">
              <article itemScope itemType="https://schema.org/CreativeWork">
                <meta itemProp="name" content={project.title} />
                <meta itemProp="description" content={project.description} />
                <meta itemProp="url" content={project.link} />
                <meta itemProp="image" content={project.image} />
                <div
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <meta itemProp="name" content="Ruslan Mukhamedvaleev" />
                  <meta itemProp="givenName" content="Ruslan" />
                  <meta itemProp="familyName" content="Mukhamedvaleev" />
                  <meta
                    itemProp="description"
                    content="Student researcher and developer focused on design, machine learning, and web development. Co-Founder of Koel Labs, Founder of FOYM, and Research Assistant at Washington State University."
                  />
                  <meta itemProp="url" content="https://www.ruslan.in" />
                  <meta
                    itemProp="image"
                    content="https://www.ruslan.in/ruslanM.jpg"
                  />
                  <meta itemProp="sameAs" content="https://www.ruslan.in" />
                  <meta
                    itemProp="sameAs"
                    content="https://github.com/digitalRM"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://www.linkedin.com/in/ruslan-muk/"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://www.instagram.com/ruslan_mk11/"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://builders.mozilla.org/profile/ruslan-mukhamedvaleev/"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://www.ruslanmukhamedvaleev.com"
                  />
                  <meta itemProp="sameAs" content="https://www.foym.org" />
                  <meta
                    itemProp="sameAs"
                    content="https://www.behance.net/mukhamedvaleev"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://dribbble.com/RuslanMukhamedvaleev"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://x.com/mukhamedvaleev"
                  />
                  <meta
                    itemProp="sameAs"
                    content="https://scholar.google.com/citations?user=yci2oWcAAAAJ"
                  />
                </div>
                {project.badges && (
                  <meta
                    itemProp="keywords"
                    content={Object.keys(project.badges).join(", ")}
                  />
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="bg-white hover:scale-[102%] group p-2 border-neutral-200 border rounded-[12px]  hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all">
                    <div className="rounded-[7px] w-full h-fit bg-neutral-100 group-hover:bg-neutral-100/50 transition-all border-neutral-200 border">
                      <Image
                        src={project.image}
                        height={400}
                        width={822}
                        alt={`Screenshot of ${project.title} - ${project.description}`}
                        className="rounded-[6px] transition-all"
                        itemProp="image"
                      />
                    </div>
                  </div>
                </a>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="data-[current-index='0']:hidden data-[current-index]:block" />
        <CarouselNext className="data-[current-index='4']:hidden data-[current-index]:block" />
      </Carousel>
    </section>
  );
}
