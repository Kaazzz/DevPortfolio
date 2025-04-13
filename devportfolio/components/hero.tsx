import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Hero() {
  const words = ["Let's Build.", "Let's Design.", "Let's Develop.", "Let's Innovate."]

  return (
    <div className="container flex flex-col items-center justify-center h-full gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hi, I&apos;m</span>
          <span className="block text-red-500">Kaz Floreta</span>
        </h1>
        <div className="h-16">
          <TypewriterEffect words={words} />
        </div>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
          I am a Full-stack Web developer specializing in building impactful digital experiences
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          size="lg"
          className="bg-red-500 hover:bg-red-600 text-white"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get in Touch
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-500/10"
          onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View My Work
        </Button>
      </motion.div>
    </div>
  )
}
