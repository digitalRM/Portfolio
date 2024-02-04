'use client'
import { toast } from 'sonner'
import React from 'react'
import { ArrowRightSquare } from 'lucide-react'

export function InteractiveLink({ children, project}) {
    const handleClick = () => {
      toast(
        'Looking for the code?', {
        duration: 9000,
        type: 'info',
        action: {
          text: <ArrowRightSquare className='inline-block mb-0.5 -ml-0.5' size={16} />,
          onClick: () => window.open(project.link, '_blank')
        }
      });
    };

  
    return (

    <a onClick={handleClick} href={project.link} target="_blank" rel="noopener noreferrer" className='bg-neutral-100/50 group p-6 rounded-lg sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all w-full flex flex-col justify-between'>
        {children}
    </a>
    );
  }

  