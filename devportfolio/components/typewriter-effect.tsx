"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: string[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className, cursorClassName }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        // If deleting, remove the last character
        if (isDeleting) {
          setCurrentText((prev) => prev.substring(0, prev.length - 1))

          // If all characters are deleted, start typing the next word
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
        // If typing, add the next character
        else {
          setCurrentText(word.substring(0, currentText.length + 1))

          // If the word is complete, start deleting after a pause
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, 1500) // Pause at the end of the word
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Typing is slower than deleting

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={cn("text-center font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl md:text-4xl lg:text-5xl text-foreground leading-snug tracking-tight inline">
          <span className="text-red-500">{currentText}</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={cn("inline-block rounded-sm w-[4px] h-8 md:h-12 lg:h-14 bg-red-500 ml-1", cursorClassName)}
          ></motion.span>
        </div>
      </div>
    </div>
  )
}
