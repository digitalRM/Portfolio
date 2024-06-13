'use server'

const education = [
  {
    name: 'Kamiak High School',
    location: 'Mukilteo, Washington',
    graduation: '2026',
    gpa: '4.000/4.000',
    extracurriculars: 'President of Kamiak Robotics Club, School Council Representative, Technology Student Association, Computer Science Club.'
  }
]

export default async function Education() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">Education</h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200" />
      {education.map((school) => (
        <div key={school.name} className="mt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h2 className="text-base font-semibold">{school.name}</h2>
            <p className="text-base font-semibold">{school.location}</p> 
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">GPA {school.gpa}</p>
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">{school.graduation}</p>
          </div>
          <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80">Extracurriculars: {school.extracurriculars}</p>   
        </div> 
      ))}
    </div>
  )
}
