import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Layers, Palette, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-red-500" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-red-500" />,
    skills: ["Node.js", "Express", "Python", "Django", "REST API"],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-red-500" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "Design",
    icon: <Palette className="h-6 w-6 text-red-500" />,
    skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Design Systems"],
  },
  {
    title: "DevOps",
    icon: <Layers className="h-6 w-6 text-red-500" />,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Other",
    icon: <Code className="h-6 w-6 text-red-500" />,
    skills: ["Testing", "Jest", "Cypress", "Storybook", "Agile", "Scrum"],
  },
]

export default function Skills() {
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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
        <div className="w-12 h-1 bg-red-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={category.title} variants={item}>
            <Card className="h-full overflow-hidden border-red-500/10 hover:border-red-500/30 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
