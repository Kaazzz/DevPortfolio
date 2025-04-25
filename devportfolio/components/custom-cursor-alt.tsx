"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion"

interface CustomCursorProps {
    color?: string
    size?: number
    glowSize?: number
    glowColor?: string
    idleAnimation?: "pulse" | "rotate" | "bounce"
    idleDelay?: number
    cursorStyle?: "dot" | "ring" | "arrow" | "pointer"
}

export default function CustomCursor({
                                         color = "#ff0000",
                                         size = 24,
                                         glowSize = 10,
                                         glowColor = "#ff0000",
                                         idleAnimation = "pulse",
                                         idleDelay = 2000,
                                         cursorStyle = "pointer",
                                     }: CustomCursorProps) {
    const cursorRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Highly responsive spring config
    const springConfig = { damping: 35, stiffness: 1000, mass: 0.5 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    const [isVisible, setIsVisible] = useState(false)
    const [isIdle, setIsIdle] = useState(false)
    const idleTimer = useRef<NodeJS.Timeout | null>(null)
    const controls = useAnimation()

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - size / 2)
            mouseY.set(e.clientY - size / 2)

            if (!isVisible) setIsVisible(true)

            // Reset idle timer
            if (idleTimer.current) {
                clearTimeout(idleTimer.current)
            }

            setIsIdle(false)

            // Set new idle timer
            idleTimer.current = setTimeout(() => {
                setIsIdle(true)
            }, idleDelay)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)

            if (idleTimer.current) {
                clearTimeout(idleTimer.current)
            }
        }
    }, [mouseX, mouseY, isVisible, size, idleDelay])

    // Handle idle animations - simplified to just rotation
    useEffect(() => {
        if (isIdle) {
            // Always rotate when idle, regardless of idleAnimation prop
            controls.start({
                rotate: [0, 360],
                filter: [
                    `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                    `drop-shadow(0 0 ${glowSize * 2}px ${glowColor})`,
                    `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                ],
                transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "linear",
                },
            })
        } else {
            controls.start({
                scale: 1,
                rotate: 0,
                y: 0,
                filter: `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                opacity: 1,
            })
        }
    }, [isIdle, controls, glowSize, glowColor])

    // Hide default cursor
    useEffect(() => {
        document.body.style.cursor = "none"

        // Add cursor styles to clickable elements
        const clickableElements = document.querySelectorAll("a, button, [role=button], input, select, textarea")
        clickableElements.forEach((el) => {
            ;(el as HTMLElement).style.cursor = "none"
        })

        return () => {
            document.body.style.cursor = "auto"
            clickableElements.forEach((el) => {
                ;(el as HTMLElement).style.cursor = ""
            })
        }
    }, [])

    if (typeof window === "undefined") return null

    // Render different cursor styles
    const renderCursor = () => {
        switch (cursorStyle) {
            case "dot":
                return (
                    <motion.div
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: color,
                            borderRadius: "50%",
                            filter: `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                            willChange: "transform",
                        }}
                    />
                )
            case "ring":
                return (
                    <motion.div
                        style={{
                            width: size,
                            height: size,
                            border: `2px solid ${color}`,
                            borderRadius: "50%",
                            filter: `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                            willChange: "transform",
                        }}
                    />
                )
            case "arrow":
                return (
                    <motion.div
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft: `${size / 2}px solid transparent`,
                            borderRight: `${size / 2}px solid transparent`,
                            borderBottom: `${size}px solid ${color}`,
                            transform: "rotate(45deg)",
                            filter: `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                            willChange: "transform",
                        }}
                    />
                )
            case "pointer":
            default:
                return (
                    <motion.div
                        style={{
                            width: size,
                            height: size * 1.2,
                            backgroundColor: "transparent",
                            position: "relative",
                            filter: `drop-shadow(0 0 ${glowSize}px ${glowColor})`,
                            willChange: "transform",
                            transform: "rotate(135deg)", // Rotate to match the image
                        }}
                    >
                        <motion.div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                                backgroundColor: color,
                            }}
                        />
                    </motion.div>
                )
        }
    }

    return (
        <motion.div
            ref={cursorRef}
            className="pointer-events-none fixed z-50 flex items-center justify-center"
            animate={controls}
            style={{
                x: springX,
                y: springY,
                opacity: isVisible ? 1 : 0,
            }}
        >
            {renderCursor()}
        </motion.div>
    )
}
