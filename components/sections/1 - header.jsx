'use server'
import Image from 'next/image'
import { MailIcon } from 'lucide-react'

const social = [
  {
    name: 'Email',
    url: 'mailto:ruslanmukhamedvaleev@gmail.com',
    icon: <MailIcon className='inline-block w-6 h-6  text-neutral-800/80' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ruslan-muk/',
    icon: <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="rgb(38 38 38 / 0.8)"   width={24}   height={24}   focusable="false" >   <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /> </svg>
  },
  {
    name: 'GitHub',
    url: 'https://github.com/digitalRM',
    icon: <svg   height={24}   viewBox="0 0 16 16"   fill="rgb(38 38 38 / 0.8)"   width={24} >   <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /> </svg>
  },
]

export default async function Header() {
  return (
    <div className="flex md:pt-12 flex-col-reverse sm:flex-row sm:justify-between sm:items-center">
      <div className='mt-10 sm:mt-3'>
        <h1 className="font-semibold tracking-tight text-black text-xl">Ruslan Mukhamedvaleev</h1>
        <p className="mt-2 text-sm sm:text-base leading-6 max-w-[570px] text-neutral-800/80">Interested in machine learning, research, and design.</p>
        <div className="mt-6 flex gap-1 flex-col sm:flex-row ">
          {social.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="transition-all inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md text-neutral-800/80 bg-neutral-100 hover:bg-neutral-200/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 w-full sm:w-fit border-neutral-200/50 hover:border-neutral-200/75">
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-2 text-sm leading-4 max-w-[570px] text-neutral-600/80"></p>
      </div>
      <div>
        <Image
            src="/grad.png"
            alt="A pink and purple gradient."
            width={128}
            height={128}
            className="rounded-md"
        />
      </div>
    </div>
  )
}
