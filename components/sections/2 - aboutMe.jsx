"use server";

const funFacts = [
  "I started coding in 8th grade.",
  "I have a biphasic sleep schedule.",
  "",
];
export default async function AboutMe() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">
        About Me
      </h1>
      <div className="mt-3 border-b border-neutral-200" />

      <p className="mt-6 text-sm sm:text-base leading-6 text-neutral-800/80 tracking-[-0.01em]">
        Hi! I'm a junior in high school interested in design, research, and
        coding. I've been fortunate enough to work on designing and coding
        several projects over the last couple of years, most recently including
        work with people at{" "}
        <span className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap">
          <span className="h-1.5 w-1.5 mr-1 rounded-full bg-[#317EC5] mb-[3px] inline-block" />
          Koel Labs
        </span>{" "}
        <span className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap">
          <span className="h-1.5 w-1.5 mr-1 rounded-full bg-[#913140] mb-[3px] inline-block" />
          Washington State University
        </span>{" "}
        and{" "}
        <span className="p-0.5 px-1.5 bg-neutral-100 border-neutral-200 rounded-lg inline whitespace-nowrap">
          <span className="h-1.5 w-1.5 mr-1 rounded-full bg-[#B1040E] mb-[3px] inline-block" />
          Stanford University
        </span>
        . In my free time, I'm an advocate for youth involvement in government,
        compete in competitive robotics, and work on non-profit web design.
      </p>
    </div>
  );
}
