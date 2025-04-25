"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Stubby",
    description: "Stubby (Study Buddy) is a social study platform designed to help university students connect, collaborate, and grow together academically and personally. This mobile-first app matches students based on their courses, study styles, and academic goals, offering a seamless experience for finding study partners or making new friends.",
    image: "/stubbyy.png?height=300&width=600",
    tags: ["In Development"],

  },

  {
    title: "WildSQUAD",
    description: "WildSQUAD is an innovative autonomous aquatic drone designed to tackle waste pollution in coastal areas. Equipped with AI-powered systems, this drone autonomously detects, collects, and analyzes waste from water bodies, while ensuring minimal disruption to marine life.",
    image: "/wild.png?height=300&width=600",
    tags: ["React", "Express.js", "MongoDB", "Leaflet", "Tailwind CSS"],

  },

  {
    title: "Sign Language Conversion Engine",
    description: "A web app that uses a Raspberry Pi camera and machine learning to detect and interpret sign language gestures in real-time. The system converts hand signs into text, enabling seamless communication between deaf and hearing individuals. Built to bridge communication gaps, the engine integrates AI for gesture recognition and language translation.",
    image: "/slicee.png?height=300&width=600",
    tags: ["Raspberry Pi", "Keras", "OpenCV", "Machine Learning", "Python"],
    githubUrl: "https://github.com/Kaazzz/SLICE-SignLanguageConversionEngine",
  },
  {
    title: "RESIKLO",
    description: "An AI-powered waste reduction and tracking platform that helps users live sustainably through real-time waste classification, personal progress tracking, and gamified social challenges. Features a YOLO-based image scanner, leaderboards, and rewards via business partnerships.",
    image: "/resikloo.png?height=300&width=600",
    tags: ["React Native", "YOLO", "TensorFlow", "Node.js", "Firebase"],
    githubUrl: "https://github.com/drkcutie/cherry_on_top",
  },
  {
    title: "The Technologian Student Press Website",
    description: "The official digital publishing platform of The Technologian, designed to manage and publish student journalism with team collaboration, real-time updates, and modern UI/UX for campus readers.",
    image: "/techno.png?height=300&width=600",
    tags: ["Elementor", "WordPress"],
    demoUrl: "https://thetechnologian.com",
    githubUrl: "#",
  },
  {
    title: "StudyHive",
    description: "A study group coordination platform built to help students find, form, and manage study groups based on subjects, schedules, and academic goals. Offers session planning, chat, and progress tracking tools.",
    image: "/studyhiveee.png?height=300&width=600",
    tags: ["Django", "Tailwind CSS", "SQLite", "HTML", "CSS"],
    githubUrl: "https://github.com/yourusername/studyhive",
  },


];



export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <div className="w-12 h-1 bg-red-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={item}>
            <Card className="overflow-hidden border-red-500/10 hover:border-red-500/30 transition-colors h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-1 bg-red-500 hover:bg-red-600" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
