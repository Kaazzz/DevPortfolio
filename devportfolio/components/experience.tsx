import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "June 2022 – Present",
    description:
        "Built full-stack web applications using React, Next.js, Django, and Tailwind CSS. Integrated AI-powered features with machine learning models using Python, Keras, and TensorFlow. Handled database management with PostgreSQL, MongoDB, and Firebase, and deployed secure, scalable projects via Vercel.",
    skills: ["React", "Next.js", "Django", "Tailwind CSS", "TensorFlow", "PostgreSQL", "Firebase"],
  },
  {
    title: "Chief Finance and Externals Officer",
    company: "Google Developer Groups on Campus: CIT-U",
    period: "August 2024 – Present",
    description:
        "Manages budgeting, sponsorship acquisition, and financial planning to support tech community initiatives. Organizes events, workshops, and hackathons to promote student engagement and technical growth. Leads partnerships to boost outreach and visibility.",
    skills: ["Event Management", "Sponsorships", "Budgeting", "External Relations", "Leadership"],
  },
  {
    title: "Head Researcher",
    company: "The Technologian Student Press",
    period: "July 2024 – Present",
    description:
        "Leads research for in-depth stories and investigative reports focused on campus and student issues. Oversees a team of writers, ensuring accurate reporting and source validation for publication.",
    skills: ["Research", "Data Analysis", "Team Management", "Editorial Oversight", "Investigative Writing"],
  },
  {
    title: "Website Editor",
    company: "The Technologian Student Press",
    period: "July 2023 – July 2024",
    description:
        "Maintained and enhanced the official student press website, focusing on content management, security, and SEO. Implemented UI/UX improvements to optimize usability and engagement.",
    skills: ["Web Development", "SEO", "UI/UX", "Content Management", "Site Optimization"],
  },
]


export default function Experience() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
        <div className="w-12 h-1 bg-red-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500/20"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "md:pl-12 md:ml-1/2"} md:w-1/2 z-10`}
            >
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "md:-right-4" : "md:-left-4"
                } h-8 w-8 rounded-full bg-red-500 flex items-center justify-center`}
              >
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <Card className="border-red-500/10">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-red-500/10 text-red-500 border-red-500/20 self-start md:self-center"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-red-500/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
