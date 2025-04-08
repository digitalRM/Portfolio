"use server";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/sections/1 - header";

export default async function BioPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-10">
      <Header />
      <section aria-labelledby="about-heading" className="mt-12">
        <h2
          id="about-heading"
          className="font-semibold tracking-tight text-black text-xl flex items-center gap-2 justify-between"
        >
          Biography{" "}
          <a
            href="/"
            className="bg-blue-50 text-blue-800 border-blue-200 border px-2 py-1 rounded-full text-sm cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 inline-block group-hover:-translate-x-0.5 transition-all -mt-0.5 mr-1" />
            Go Home
          </a>
        </h2>
        <div className="mt-3 border-b border-neutral-200" />

        <div className="mt-6" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Ruslan Mukhamedvaleev" />
          <meta itemProp="givenName" content="Ruslan" />
          <meta itemProp="familyName" content="Mukhamedvaleev" />
          <meta itemProp="url" content="https://www.ruslan.in" />
          <meta itemProp="sameAs" content="https://www.ruslan.in" />
          <meta itemProp="sameAs" content="https://github.com/digitalRM" />
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
          <meta itemProp="sameAs" content="https://x.com/mukhamedvaleev" />
          <meta
            itemProp="sameAs"
            content="https://scholar.google.com/citations?user=yci2oWcAAAAJ"
          />
          <meta itemProp="knowsAbout" content="Design" />
          <meta itemProp="knowsAbout" content="Research" />
          <meta itemProp="knowsAbout" content="Machine Learning" />
          <meta itemProp="knowsAbout" content="Web Development" />
          <meta itemProp="knowsAbout" content="Robotics" />
          <meta itemProp="knowsAbout" content="Non-profit Web Design" />
          <meta itemProp="worksFor" content="Koel Labs" />
          <meta itemProp="worksFor" content="Washington State University" />
          <meta
            itemProp="memberOf"
            content="Legislative Youth Advisory Council"
          />
          <meta itemProp="memberOf" content="Mukilteo Robotics" />
          <meta itemProp="image" content="/ruslanM.jpg" />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-blue-800 text-sm tracking-[-0.01em]">
            <p>
              <strong className="tracking-tight">Note:</strong> This page is
              primarily intended for search engines and knowledge graphs. The
              formatting and detailed structure are designed to improve
              discoverability and provide structured information about my
              background and work.
            </p>
          </div>
          <div
            className="text-sm sm:text-base leading-6 text-neutral-800/80 tracking-[-0.01em] space-y-4"
            itemProp="description"
          >
            <p>
              Ruslan Mukhamedvaleev is a researcher, student, and developer who
              focuses on the intersection of language and technology,
              particularly in computational linguistics, digital language
              protection, and language accessibility tools.
            </p>

            <p>
              His work spans research, technology, development, design,
              community service, and advocacy. Ruslan focuses on creating
              impactful solutions that help people communicate more effectively
              and protect linguistic diversity. He has also contributed
              extensively to initiatives to preserve the Ukrainian language and
              literature.
            </p>

            <p>
              He co-founded Koel Labs, a research-driven startup building
              dialect-sensitive language learning tools, and worked extensively
              on projects to preserve Ukrainian language and literature. He is
              passionate about using tech + design to solve real-world problems,
              especially those related to language and accessibility.
            </p>

            <p>
              Beyond his academic and technical pursuits, Ruslan curates vintage
              design, mentors fellow students, builds robots, and advocates for
              inclusive education policies through his role with the Washington
              Youth Legislative Advisory Council.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold tracking-tight text-black text-lg mb-4">
              Conferences & Presentations
            </h3>
            <div className="border-t border-neutral-200 pt-4">
              <ul className="text-sm sm:text-base leading-6 text-neutral-800/80 tracking-[-0.01em] space-y-3">
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Washington State Youth Action Day '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">Panelist</span> - Washington
                  State Youth Action Day '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="The Role of Artificial Intelligence in Education LEVinar '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">Panelist</span> - The Role of
                  Artificial Intelligence in Education LEVinar '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Washington State University Academic Showcase '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">Presenter (Poster)</span> -
                  Washington State University Academic Showcase '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Washington State University Everett Research Symposium '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">Presenter (Poster)</span> -
                  Washington State University Everett Research Symposium '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Association for Computers and the Humanities Conference '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">
                    Presenter (Presentation)
                  </span>{" "}
                  - Association for Computers and the Humanities Conference '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Mozilla Demo Day in San Francisco '24"
                  />
                  <meta itemProp="startDate" content="2024" />
                  <span className="font-medium">
                    Presenter (Poster & Presentation)
                  </span>{" "}
                  - Mozilla Demo Day in San Francisco '24
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta itemProp="name" content="Stack Overflow Podcast '25" />
                  <meta itemProp="startDate" content="2025" />
                  <span className="font-medium">Podcast Guest</span> - Stack
                  Overflow Podcast '25
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="Washington Library Association Conference '25"
                  />
                  <meta itemProp="startDate" content="2025" />
                  <span className="font-medium">
                    Presenter (Presentation)
                  </span>{" "}
                  - Washington Library Association Conference '25
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="University of Washington DubHacks' Next Demo Day '25"
                  />
                  <meta itemProp="startDate" content="2025" />
                  <span className="font-medium">
                    Presenter (Poster & Presentation)
                  </span>{" "}
                  - University of Washington DubHacks' Next Demo Day '25
                </li>
                <li
                  itemProp="subjectOf"
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <meta
                    itemProp="name"
                    content="University of Washington Research Symposium '25"
                  />
                  <meta itemProp="startDate" content="2025" />
                  <span className="font-medium">Presenter (Poster)</span> -
                  University of Washington Research Symposium '25
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
