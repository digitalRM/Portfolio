'use client'

import { Bricolage_Grotesque } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] })



export default async function Home() {

  const { scrollYProgress } = useScroll(1000)
  
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 2])
  const minScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const opacityOfVideo = useTransform(scrollYProgress, [0, 0.01], [1, 0])
  const opacityOfCards = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const background = useTransform(scrollYProgress, [0, 0.05], ["#FFF", "#2f3e46"])
  const backgroundSwap = useTransform(scrollYProgress, [0, 0.1], ["#000", "#FFF"])

  return (
    <motion.div style={{ backgroundColor: background}} className="flex-col relative flex w-screen overflow-x-hidden scroll-smooth items-center p-4">  
      <div className="  top-0 overflow-w-hidden flex items-end justify-between w-full my-4 pt-4">
        <div className="mx-auto max-w-[880px] flex justify-between w-full p-4">
          <Link className="text-2xl font-medium tracking-tight z-10 text-teal-700" href="/">Ruslan Mukhamedvaleev</Link>
          <div className="flex items-center gap-2">
            <Link className="text-lg font-normal tracking-tight z-10" href="/">Home</Link>
            <Link className="text-lg font-normal tracking-tight z-10" href="/about">About</Link>
            <Link className="text-lg font-normal tracking-tight z-10" href="/projects">Projects</Link>
          </div>
        </div>
      </div>

      <motion.h1 style={{ scale: minScale }} className="sm:mx-auto sm:max-w-3xl absolute z-50 mt-[80vh] lg:text-7xl font-bold max-w-[326px] lg:text-nowrap tracking-tighter  md:tracking-[-0.3rem] text-[#FFF] md:text-6xl sm:text-5xl text-left text-3xl sm:text-center">
        <motion.span style={{ scale: minScale }} className={bricolage_grotesque.className}>
          Ruslan Mukhamedvaleev
        </motion.span>
      </motion.h1>
      <motion.p style={{ scale: minScale }} className="mx-auto max-w-lg text-xl absolute z-50 mt-[88vh]  tracking-tight text-white ">
        Student, Researcher, and Founder
      </motion.p>
      
      <motion.div style={{ scale: scale }}  className="w-full sticky top-12 flex sm:items-end h-screen max-w-[1480px] overflow-x-hidden bg-slate-100 rounded-xl bg-[url('/hero-low.webp')] bg-cover mt-4 ">
        <motion.div style={{ opacity: opacity}} className="w-full bg-[#2f3e46] h-full absolute top-0 left-0 z-20"></motion.div>
        <video style={{ opacity: opacityOfVideo}} autoPlay loop muted playsInline className="w-full h-full object-cover absolute top-0 left-0 z-0" src="/hero-vid2.mp4"></video>
          <div style={{ opacity: opacityOfVideo}} className="pb-32 pt-20 text-left relative z-10 sm:text-center lg:pt-44 mx-auto mt lg:max-w-full md:max-w-2xl sm:max-w-xl px-4 sm:px-6 lg:px-8 ">
            

            <div style={{ opacity: opacityOfVideo}} className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
              
            </div>
          </div>

      </motion.div>

      <motion.div style={{ opacity: opacity}}  className="w-full h-[1300px] bg-black relative flex items-center justify-center ">
        <div className="w-full h-[1300px] max-w-[1480px] mx-auto overflow-show rounded-xl grid md:grid-cols-2 gap-9 my-3 absolute z-40 -translate-y-24">
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl border shadow border-neutral-200 flex p-6">
            
          </div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl border shadow border-neutral-200 flex p-6"></div>
        </div>

      </motion.div>
      <div className="w-full h-[1300px] bg-white"></div>

      

      {/* <h1 className=" text-[9.5vw] text-nowrap mr-auto -ml-12 font-medium text-center tracking-tighter p-3 z-10">Ruslan Mukhamedvaleev</h1> */}
    </motion.div>
  )
}