"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

  return (
    <div ref={containerRef} className="relative bg-background text-foreground">
      <ParticleBackground />

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Button size="icon" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button size="icon" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button size="icon" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button size="icon" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </div>

      <Navigation />

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-red-500" />
        </motion.div>
        <Hero />
      </section>

      <section id="about" className="min-h-screen py-20 flex items-center justify-center">
        <About />
      </section>

      <section id="skills" className="flex items-center justify-center min-h-screen py-20 bg-black/20">
        <Skills />
      </section>

      <section id="projects" className="flex items-center justify-center min-h-screen py-20">
        <Projects />
      </section>

      <section id="experience" className="flex items-center justify-center min-h-screen py-20 bg-black/20">
        <Experience />
      </section>

      <section id="contact" className="flex items-center justify-center min-h-screen py-20">
        <Contact />
      </section>
    </div>
  )
}
