"use client";
import { motion } from "framer-motion";
import { Award, Building2, GraduationCap, Trophy } from "lucide-react";
import SectionTitle from "./shared/SectionTitle";

const certificationsData = {
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      year: "2020 - 2024",
      description:
        "A comprehensive program covering various aspects of computer science, including programming, algorithms, and software development.",
      achievements: ["3.76 GPA"],
      courses: ["System Design", "Algorithms", "Web Development", "Microprocessor Design"],
    },
  ],
  certifications: [
    {
      title: "Next Level Web Development",
      platform: "Programming Hero",
      year: "2024-2025",
      //   credential: "",
      skills: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "React", "Redux", "Next.js"],
      gradient: "bg-gradient-to-tr from-[#130b2e] to-[#2d1b69] hover:from-[#1e1245] hover:to-[#3b1d8c]",
      tagColor: "bg-indigo-500 group-hover:bg-indigo-600",
    },
    {
      title: "Complete Web Development",
      platform: "Programming Hero",
      year: "2021",
      credential: "",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "DOM", "React", "Node.js", "Express.js", "MongoDB", "Next.js"],
      gradient: "bg-gradient-to-tr from-[#130b2e] to-[#2d1b69] hover:from-[#1e1245] hover:to-[#3b1d8c]",
      tagColor: "bg-indigo-500 group-hover:bg-indigo-600",
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Certifications = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Education & Certifications" className="mb-16 text-center" />

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-indigo-500/20 rounded-md">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Education</h3>
            </div>

            <div className="grid gap-8">
              {certificationsData.education.map((edu, index) => (
                <motion.div key={index} variants={item} whileHover={{ y: -5 }} className="group relative">
                  <div className="bg-gradient-to-tr from-[#130b2e] to-[#2d1b69] hover:from-[#1e1245] hover:to-[#3b1d8c] rounded-md border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10 transition-all duration-300">
                    <div className="relative px-8 py-8">
                      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Building2 className="w-16 h-16 text-indigo-300" />
                      </div>

                      <div className="flex flex-col space-y-4 relative z-10">
                        <div className="bg-indigo-500/90 group-hover:bg-indigo-400 transition-all duration-300 w-fit px-4 py-1.5 rounded-md text-sm font-medium text-white mb-2">
                          {edu.year}
                        </div>

                        <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>

                        <div className="flex items-center gap-3 text-indigo-300">
                          <Building2 className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>

                        <p className="text-slate-300/90 leading-relaxed">{edu.description}</p>

                        {edu.achievements.length > 0 && (
                          <div className="pt-4">
                            <h5 className="text-sm font-semibold text-indigo-300 mb-2">KEY ACHIEVEMENTS</h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-md text-sm text-indigo-200 flex items-center gap-1.5"
                                >
                                  <Trophy className="w-3.5 h-3.5 text-yellow-300" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="relative mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-purple-500/20 rounded-md">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Certifications
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {certificationsData.certifications.map((cert, index) => (
                <motion.div key={index} variants={item} whileHover={{ y: -5 }} className="group relative">
                  <div
                    className={`h-full bg-gradient-to-br ${cert.gradient} rounded-md border border-white/10 overflow-hidden shadow-xl transition-all duration-300`}
                  >
                    <div className="relative h-full flex flex-col p-6">
                      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Award className="w-16 h-16 text-purple-300" />
                      </div>

                      <div className="flex-1 flex flex-col space-y-4 relative z-10">
                        <div className={`${cert.tagColor} w-fit px-4 py-1.5 rounded-md text-sm font-medium text-white mb-2`}>{cert.year}</div>

                        <h4 className="text-xl font-bold text-white">{cert.title}</h4>

                        <div className="flex items-center gap-3 text-purple-300">
                          <Building2 className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{cert.platform}</span>
                        </div>

                        {cert.skills.length > 0 && (
                          <div className="pt-4 mt-auto">
                            <h5 className="text-sm font-semibold text-purple-300 mb-2">SKILLS VALIDATED</h5>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, i) => (
                                <div key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-md text-sm text-purple-200">
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
