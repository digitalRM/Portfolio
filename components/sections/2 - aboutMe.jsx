"use server";

export default async function AboutMe() {
  return (
    <section aria-labelledby="about-heading" className="mt-12">
      <h2
        id="about-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        About Me
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
        <p
          className="text-sm sm:text-base leading-6 text-neutral-800/80 tracking-[-0.01em]"
          itemProp="description"
        >
          Hi! I'm a junior in high school interested in design, research, and
          coding. I've been fortunate enough to work on designing and coding
          several projects over the last couple of years, most recently
          including work with people at{" "}
          <span
            className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap"
            itemProp="memberOf"
          >
            <span
              className="h-1.5 w-1.5 mr-1 rounded-full bg-[#317EC5] mb-[3px] inline-block"
              aria-hidden="true"
            />
            <span itemProp="worksFor">Koel Labs</span>
          </span>{" "}
          <span
            className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap"
            itemProp="memberOf"
          >
            <span
              className="h-1.5 w-1.5 mr-1 rounded-full bg-[#913140] mb-[3px] inline-block"
              aria-hidden="true"
            />
            <span itemProp="worksFor">Washington State University</span>
          </span>{" "}
          and{" "}
          <span className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap">
            <span
              className="h-1.5 w-1.5 mr-1 rounded-full bg-[#B1040E] mb-[3px] inline-block"
              aria-hidden="true"
            />
            <span>Stanford University</span>
          </span>
          . In my free time, I'm an advocate for youth involvement in
          government, compete in competitive robotics, and work on non-profit
          web design.
        </p>
      </div>
    </section>
  );
}
