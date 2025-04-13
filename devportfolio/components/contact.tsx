"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Linkedin, Github, Facebook } from "lucide-react"

export default function Contact() {
  return (
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <div className="w-12 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">zakfloreta20@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+63 977 240 3229</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Cebu City, PH</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                        href="https://www.linkedin.com/in/zkflrta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-red-600 hover:underline"
                    >
                      linkedin.com/in/zkflrta
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-red-600 hover:underline"
                    >
                      github.com/kaazzz
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <a
                        href="https://facebook.com/zkflrta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-red-600 hover:underline"
                    >
                      facebook.com/zkflrta
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
  )
}
