"use server";

const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Python", icon: "python" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Supabase", icon: "supabase" },
  { name: "Cloudflare", icon: "cloudflare" },
  { name: "GitHub", icon: "github" },
  { name: "Discord Bots", icon: "bots" },
];

export default async function Skills() {
  const desktopIcons = skills.map((s) => s.icon).join(",");
  const mobileIcons = `${skills.map((s) => s.icon).join(",")}&perline=5`;

  return (
    <section aria-labelledby="skills-heading" className="mt-12">
      <h2
        id="skills-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Skills
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      <div className="mt-6" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="numberOfItems" content={skills.length.toString()} />
        <meta itemProp="itemListOrder" content="Unordered" />

        <div className="hidden md:block" role="list" aria-label="Skills grid">
          <img
            className="w-full"
            src={`https://skillicons.dev/icons?i=${desktopIcons}`}
            alt="Skills including JavaScript, HTML, CSS, Tailwind, React, Next.js, Python, Git, Figma, PostgreSQL, Supabase, Cloudflare, GitHub, and Discord Bots development"
            loading="lazy"
          />
        </div>

        <div className="block md:hidden" role="list" aria-label="Skills grid">
          <img
            className="w-full"
            src={`https://skillicons.dev/icons?i=${mobileIcons}`}
            alt="Skills including JavaScript, HTML, CSS, Tailwind, React, Next.js, Python, Git, Figma, PostgreSQL, Supabase, Cloudflare, GitHub, and Discord Bots development"
            loading="lazy"
          />
        </div>

        <div className="sr-only">
          <ul>
            {skills.map((skill, index) => (
              <li
                key={skill.name}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                <span itemProp="name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
