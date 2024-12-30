"use server";

const education = [
  {
    name: "Kamiak High School",
    location: "Mukilteo, Washington",
    graduation: "2026",
    gpa: "4.000/4.000",
    url: "https://ka.mukilteoschools.org/",
    extracurriculars: [
      "President of Kamiak Robotics Club, ",
      " School Council Representative, ",
      " Technology Student Association, ",
      "Computer Science Club",
    ],
  },
];

export default async function Education() {
  return (
    <section aria-labelledby="education-heading" className="mt-12">
      <h2
        id="education-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Education
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      {education.map((school) => (
        <article
          key={school.name}
          className="mt-6"
          itemScope
          itemType="https://schema.org/EducationalOrganization"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h3 className="text-base font-semibold">
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                itemProp="name"
                className="hover:text-neutral-600 transition-colors"
              >
                {school.name}
              </a>
            </h3>
            <p
              className="text-base font-semibold"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">{school.location}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">
              <span itemProp="award">GPA {school.gpa}</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">
              Expected Graduation: <span>{school.graduation}</span>
            </p>
          </div>
          <div className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80">
            <strong className="font-medium">Extracurriculars:</strong>
            <ul className="flex flex-wrap mt-1">
              {school.extracurriculars.map((activity, index) => (
                <li key={index} className="mr-1">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
