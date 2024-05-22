

import { Bricolage_Grotesque } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

export const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] })

export default async function Home() {
  return (
    <div className="flex-col relative flex w-screen scroll-smooth items-center p-4">  
      <div className="  top-0 z-20 overflow-w-hidden flex items-end justify-between w-full my-4">
        <div className="mx-auto max-w-[880px] flex justify-between w-full p-4">
          <Link className="text-2xl font-medium tracking-tight z-10 text-teal-700" href="/">Ruslan Mukhamedvaleev</Link>
          <div className="flex items-center gap-2">
            <Link className="text-lg font-normal tracking-tight z-10" href="/">Home</Link>
            <Link className="text-lg font-normal tracking-tight z-10" href="/about">About</Link>
            <Link className="text-lg font-normal tracking-tight z-10" href="/projects">Projects</Link>
          </div>
        </div>
      </div>
      
      <div className="w-full flex sm:items-end h-screen max-h-[1000px] max-w-[1480px] overflow-x-hidden bg-slate-100 rounded-xl bg-[url('/hero-low.webp')] bg-cover mt-4 relative">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute top-0 left-0 z-0" src="/hero-vid2.mp4"></video>
          <div className="pb-32 pt-20 text-left relative z-10 sm:text-center lg:pt-44 mx-auto mt lg:max-w-full md:max-w-2xl sm:max-w-xl px-4 sm:px-6 lg:px-8 ">
            <h1 className="sm:mx-auto sm:max-w-3xl lg:text-7xl font-bold max-w-[326px] lg:text-nowrap tracking-tighter  md:tracking-[-0.3rem] text-white md:text-6xl sm:text-5xl text-left text-3xl sm:text-center">
              <span className={bricolage_grotesque.className}>
                Ruslan Mukhamedvaleev
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-xl tracking-tight text-white ">
              Student, Researcher, and Founder
            </p>

            <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
              
            </div>
          </div>

      </div>

      <div className="w-full h-[1300px] max-w-[1480px] overflow-show rounded-xl grid md:grid-cols-2 gap-3 my-3">
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl border shadow border-neutral-200 flex p-6">
          
        </div>
        <div className="col-span-1 row-span-1">
          <h1 className="text-2xl font-medium tracking-[-0.01em] text-neutral-700">Projects In Progress</h1>
        

        </div>
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl border shadow border-neutral-200 flex p-6"></div>
      </div>

      <div className="w-full h-[1000px] max-w-[1480px] overflow-show rounded-xl grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-3 my-24">
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl transition hover:rotate-x-[] hover:scale-105 hover:z-10 shadow-sm border hover:shadow-xl items-end border-neutral-200 flex p-6">
          <h1 className="text-xl font-medium tracking-[-0.01em] text-neutral-700">Mukilteo Robotics</h1>
        </div>
        <div className="col-span-1 row-span-2 bg-neutral-100 rounded-xl transition hover:rotate-2 hover:scale-105 hover:z-10 shadow-sm border hover:shadow-xl border-neutral-200"></div>
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl transition hover:-rotate-2 hover:scale-105 hover:z-10 shadow-sm border hover:shadow-xl border-neutral-200"></div>
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl transition hover:-rotate-2 hover:scale-105 hover:z-10 shadow-sm border hover:shadow-xl border-neutral-200"></div>
        <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl transition hover:-rotate-2 hover:scale-105 hover:z-10 shadow-sm border hover:shadow-xl border-neutral-200"></div>
      </div>

      {/* <h1 className=" text-[9.5vw] text-nowrap mr-auto -ml-12 font-medium text-center tracking-tighter p-3 z-10">Ruslan Mukhamedvaleev</h1> */}
    </div>
  )
}