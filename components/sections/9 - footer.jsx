import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 h-fit pb-10">
      <div className="mx-auto md:flex md:items-center md:justify-between ">
        <div className='flex flex-col sm:flex-row justify-between w-full'>
          <p className="sm:text-center text-xs font-medium leading-5 text-neutral-900">
            &copy; 2024 - Ruslan Mukhamedvaleev - MIT License
          </p>
          <p className="sm:text-center mt-4 sm:mt-0 text-xs font-medium leading-5 text-neutral-900">
            <a href="https://github.com/digitalRM/portfolio" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-neutral-800 transition-all">View Source Code <ArrowUpRight className='inline-block mb-0.5 -ml-0.5' size={16} /></a>
          </p>
        </div>
      </div>
    </footer>
  )
}
