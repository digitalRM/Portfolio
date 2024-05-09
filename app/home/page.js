import { bricolage_grotesque } from "@/components/briFont"

export default async function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <div className="relative h-dvh overflow-w-hidden p-4">
        <div className="mx-auto rounded-2xl h-full w-full overflow-hidden relative bg-gray-100 flex flex-col justify-center items-center shadow -[inset_0px_0px_20px_10px_#e2e8f0] max-w-[2000px] max-h-[1200px] bg-cover bg-center bg-no-repeat">
          <h1 className="text-4xl lg:text-6xl font-medium text-center tracking-tight p-3 z-10"><span><span className="text-primary tracking-tighter">Ruslan Mukhamedvaleev</span></span></h1>

        </div>
      </div>
    </div>
  )
}