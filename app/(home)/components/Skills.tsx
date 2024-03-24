"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Git",
            Icon: SiGit,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Typescript",
            Icon: SiTypescript,
        },
        {
            text: "HTML",
            Icon: SiHtml5,
        },
        {
            text: "CSS",
            Icon: SiCss3,
        },
        {
            text: "Python",
            Icon: SiPython,
        },
    ]
  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills ⚔️" className="flex flex-col items-center justify-center -rotate-6"/>
        <HoverEffect items={skills}/>
    </div>
  )
}
