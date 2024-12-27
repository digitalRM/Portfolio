"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">
      <div className="relative h-dvh overflow-hidden bg-right-bottom bg-cover">
        <div className="mx-auto max-w-[1440px] px-6 pt-6 lg:pt-12 lg:px-8 relative">
          <h1 className="tracking-tight font-medium text-black text-xl">
            Ruslan Mukhamedvaleev
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-2 text-neutral-800/80 tracking-[-0.02em] text-balance">
            I'm a high school student passionate about design, research, and
            coding.
          </p>
        </div>
      </div>
      <div className="mx-auto bg-neutral-100/20 px-6 pt-6 -mt-1 lg:pt-10 lg:px-8 relative w-full h-80"></div>
    </div>
  );
}
