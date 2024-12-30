"use server";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Kamiak Sophomore on a Mission to Assist Nonprofits",
    date: "July 2023",
    released: true,
    badge: "News",
    company: "Mukilteo Beacon",
    image:
      "https://www.mukilteobeacon.com/home/cms_data/dfault/photos/stories/id/9/8/24798/.TEMP/s_topTEMP900x420-6795.jpeg",
    imageAlt: "A photo of Ruslan Mukhamedvaleev",
    link: "https://www.mukilteobeacon.com/story/2023/07/12/schools/kamiak-sophomore-on-a-mission-to-assist-nonprofits/24798.html",
    short:
      "Kamiak High School sophomore Ruslan Mukhamedvaleev is on a mission to help nonprofits and other organizations with their websites and other technology needs.",
  },
  {
    title:
      "14 AI projects to watch: Mozilla's first Builders Accelerator cohort kicks off",
    date: "September 2024",
    released: true,
    badge: "News",
    company: "Mozilla",
    image: "/mozilla.png",
    imageAlt:
      "14 AI projects to watch: Mozilla's first Builders Accelerator cohort kicks off",
    link: "https://blog.mozilla.org/en/mozilla/14-ai-projects-to-watch-mozillas-first-builders-accelerator-cohort-kicks-off/",
    short:
      "Calling on AI and machine learning engineers passionate about open source and local AI, nearly 200 applicants from 44 countries stepped up to push the boundaries of what's possible with running models directly on personal devices instead of relying on the cloud.",
  },
  {
    title: "Mapping Ukrainian Collections in US Public Libraries",
    authors: [
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
      "Gabriella Reznowski",
      "Anika Krishnan",
    ],
    date: "May 2024",
    datePublished: "2024-05-04",
    dateModified: "2024-05-04",
    released: true,
    badge: "Research",
    company: "Washington State University",
    abstract:
      "Over 270,000 Ukrainians have come to the United States since the February 24th, 2022, full-scale military invasion of Ukraine by the Russian Federation.1 This has raised demand for Ukrainian language materials that some public libraries have struggled to meet. In order to facilitate the acquisition pipeline for libraries developing new Ukrainian language collections, we sought to identify libraries with strong existing collections, as well as those libraries that may need assistance with building these collections. We used OCLC data on Ukrainian language titles and their holding libraries. Two Washington State high school students with data science skills assisted us in the process, creating an interactive map showing the location of Ukrainian books in American libraries. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    publisher: "Ukrainian Book Project",
    link: "https://www.ukrainianbookproject.com/publications/mapping-ukrainian-collections-in-us-public-libraries",
    short:
      "In order to facilitate the acquisition pipeline for libraries developing new Ukrainian language collections, we sought to identify libraries with strong existing collections, as well as those libraries that may need assistance with building these collections. We used OCLC data on Ukrainian language titles and their holding libraries. Two Washington State high school students with data science skills assisted us in the process, creating an interactive map showing the location of Ukrainian books in American libraries. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
  },

  {
    title: "Locations of Ukrainian-language books based on OCLC data",
    authors: ["Ruslan Mukhamedvaleev", "Emily Cukier", "Gabriella Reznowski"],
    date: "August 2024",
    datePublished: "2024-08-20",
    dateModified: "2024-08-20",
    released: true,
    badge: "Research",
    company: "Washington State University",
    publisher: "Ukrainian Book Project",
    link: "https://www.ukrainianbookproject.com/publications/locations-of-ukrainian-language-books-based-on-oclc-data",
    abstract:
      "We sought to create an interactive map of Ukrainian books across American public libraries. Our primary data source for this project was OCLC, a global library organization that compiles standardized library catalogs and holding data for its members. We used it to obtain catalog records for books in the Ukrainian language, library holdings data for the books, and library type and location data (geographic coordinates). We used Tableau software to create the visualization. Note that holding data does not guarantee that books are available to the public for reading or checkout. We hope this map will be useful for improving the state of Ukrainian language collections to serve communities in the United States.",
    short:
      "We sought to create an interactive map of We sought to create an interactive map of Ukrainian books across American public libraries. Our primary data source for this project was OCLC, a global library organization that compiles standardized library catalogs and holding data for its members. We used it to obtain catalog records for books in the Ukrainian language, library holdings data for the books, and library type and location data (geographic coordinates).",
  },

  {
    title: "Exploring Ukrainian Language Collections in US Libraries",
    authors: ["Emily Cukier", "Ruslan Mukhamedvaleev", "Gabriella Reznowski"],
    date: "November 2024",
    datePublished: "2024-11-08",
    dateModified: "2024-12-28",
    released: true,
    badge: "Research",
    company: "Washington State University",
    publisher: "Ukrainian Book Project",
    link: "https://www.ukrainianbookproject.com/publications/exploring-ukrainian-language-collections-in-us-libraries",
    abstract:
      "Russia began the invasion of Ukraine on February 24, 2022. This invasion does not just affect people and their sovereignty, but the entire Ukrainian culture is under attack: Russia's bombing targets specifically include Ukrainian libraries and other cultural heritage institutions. Ukrainian advocacy groups have tried to encourage collecting at U.S. libraries but have been met with resistance, and continued efforts are slow. Many US libraries don't know where to order Ukrainian books, which ones to choose from, or how to catalog them, especially if they don't have Ukrainian speakers on staff. This project aims to shed light on the landscape of collecting. It is the first step for us to identify and overcome barriers to building Ukrainian collections in US public libraries.",
    short:
      "Ukrainian advocacy groups have tried to encourage collecting at U.S. libraries but have been met with resistance, and continued efforts are slow. Many US libraries don't know where to order Ukrainian books, which ones to choose from, or how to catalog them, especially if they don't have Ukrainian speakers on staff. This project aims to shed light on the landscape of collecting. It is the first step for us to identify and overcome barriers to building Ukrainian collections in US public libraries.",
  },
];
export default async function Publications() {
  return (
    <section aria-labelledby="publications-heading" className="mt-12">
      <h2
        id="publications-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Publications
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      <div className="mt-6 grid grid-cols-3 gap-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="col-span-3"
            itemScope
            itemType={
              pub.badge === "Research"
                ? "https://schema.org/ScholarlyArticle"
                : "https://schema.org/NewsArticle"
            }
          >
            {pub.released ? (
              <a
                href={pub.link}
                target="_blank"
                aria-label={`Read ${pub.title}`}
              >
                <div className="mt-0 bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex gap-1">
                        <h3 className="text-base font-semibold">
                          {pub.company}
                        </h3>

                        {pub.publisher ? (
                          <>
                            <span className="text-base font-semibold">-</span>
                            <h3
                              className="text-base font-semibold"
                              itemProp="publisher"
                            >
                              {pub.publisher}
                            </h3>
                          </>
                        ) : null}
                      </div>

                      <Badge
                        style={{
                          height: "fit-content",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                        }}
                        className={
                          pub.badge === "News"
                            ? "bg-black-300/5 border hover:bg-black-300/5 border-black/10 text-black"
                            : "bg-purple-500/10 text-purple-700 border border-purple-500/30"
                        }
                      >
                        {pub.badge}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p
                        className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                        itemProp="headline name"
                      >
                        {pub.title}
                      </p>
                      <p
                        className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                        itemProp="datePublished"
                      >
                        {pub.datePublished ? pub.datePublished : pub.date}
                      </p>
                    </div>
                    <p
                      className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75"
                      itemProp="abstract"
                    >
                      {pub.abstract ? pub.abstract : pub.short}
                    </p>
                    {pub.authors?.map((author, index) => (
                      <meta key={index} itemProp="author" content={author} />
                    ))}
                    <meta
                      itemProp="datePublished"
                      content={pub.datePublished}
                    />
                    <meta itemProp="dateModified" content={pub.dateModified} />
                    <meta itemProp="publisher" content={pub.publisher} />
                    <meta itemProp="url" content={pub.link} />
                  </div>
                </div>
              </a>
            ) : (
              <div className="mt-0 cursor-not-allowed bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/60 transition-all">
                <div>
                  <div className="flex justify-between">
                    <h3
                      className="text-base font-semibold"
                      itemProp="publisher"
                    >
                      {pub.company}
                    </h3>
                    <Badge
                      style={{
                        height: "fit-content",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                      }}
                      className={
                        pub.badge === "News"
                          ? "bg-blue-300/5 border border-black/10 text-black"
                          : "bg-purple-500/10 text-purple-700 border border-purple-500/30 hover:bg-purple-500/10"
                      }
                    >
                      {pub.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p
                      className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                      itemProp="headline name"
                    >
                      {pub.title}
                    </p>
                    <p
                      className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                      itemProp="datePublished"
                    >
                      {pub.date}
                    </p>
                  </div>
                  <p
                    className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75"
                    itemProp="abstract"
                  >
                    {pub.short}
                  </p>
                  {pub.authors?.map((author, index) => (
                    <meta key={index} itemProp="author" content={author} />
                  ))}
                  <meta itemProp="datePublished" content={pub.datePublished} />
                  <meta itemProp="dateModified" content={pub.dateModified} />
                  <meta itemProp="publisher" content={pub.publisher} />
                  <meta itemProp="url" content={pub.link} />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
