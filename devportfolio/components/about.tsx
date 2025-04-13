"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <div className="w-12 h-1 bg-red-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-square overflow-hidden rounded-full max-w-[400px] mx-auto border-4 border-red-500/20"
        >
          <Image src="/edited.png" alt="Profile" width={600} height={700}/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-lg">
                I&apos;m a passionate full-stack developer with over 2 years of experience building web applications. I
                specialize in creating responsive, user-friendly interfaces with modern technologies.
              </p>
              <p>
                My journey in web development started when I built my first website back at high school. Since then, I&apos;ve been
                constantly learning and adapting to new technologies and methodologies.
              </p>
              <p>
                When I&apos;m not coding, you can find me running, hiking, tinkering with electronics, or experimenting with new
                recipes in the kitchen.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-muted-foreground">Name</p>
              <p className="font-medium">Zak Floreta</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Email</p>
              <p className="font-medium">zakfloreta20@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Location</p>
              <p className="font-medium">Cebu City, PH</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Availability</p>
              <p className="font-medium">Freelance / Full-time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
