import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'
import projectsData from '@data/projects.json'
import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projectsData.slice(0, 4).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="p-6 h-full" onClick={() => setSelectedProject(project)}>
                  <div className="mb-4 h-40 bg-gradient-to-br from-[#E8A0A8]/20 to-[#F7C6C7]/20 rounded-lg" />
                  <h3 className="font-bold text-lg mb-2 text-primary">{project.title}</h3>
                  <p className="text-sm text-muted mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.links.live && (
                      <a onClick={(e) => e.stopPropagation()} href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-[#5A1733] hover:text-[#5A1733]/80">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.links.github && (
                      <a onClick={(e) => e.stopPropagation()} href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[#5A1733] hover:text-[#5A1733]/80">
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          {/* Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-3xl w-full mx-4 p-6 rounded-2xl bg-white/95 dark:bg-black/80 shadow-lg max-h-[90vh] overflow-auto"
                style={{ backgroundColor: 'var(--modal-bg)' }}
              >
                <button
                  aria-label="Close modal"
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/60 hover:bg-white/80"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX size={20} />
                </button>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-xl mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies?.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full text-sm bg-[#F7C6C7]/30 text-[#5A1733]">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading mb-2 text-primary">{selectedProject.title}</h3>
                    <p className="text-sm text-muted mb-4">{selectedProject.longDescription}</p>

                    {selectedProject.achievements && (
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold">Key Features</h4>
                        <ul className="list-disc list-inside text-sm text-muted">
                          {selectedProject.achievements.map((a: string, idx: number) => (
                            <li key={idx}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-3 mt-4">
                      {selectedProject.links.live && (
                        <a onClick={(e) => e.stopPropagation()} href={selectedProject.links.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#E8A0A8] to-[#F7C6C7] text-[#5A1733]">Live</a>
                      )}
                      {selectedProject.links.github && (
                        <a onClick={(e) => e.stopPropagation()} href={selectedProject.links.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-[#E8A0A8] text-[#5A1733]">Code</a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
