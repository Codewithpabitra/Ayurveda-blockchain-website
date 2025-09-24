"use client";
import React from "react";
import { ContainerScroll } from "../components/container-scroll-animation";
import flowDiagram from '../assets/flowDiagram.png'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             Revolutionary <br />
              <span className="text-6xl md:text-[6rem] font-bold mt-1 leading-none">
                Supply Chain Transparency 
              </span>
            </h1>
          </>
        }>
        <img
          src={flowDiagram}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
