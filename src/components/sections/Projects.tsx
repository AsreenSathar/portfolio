import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'
import projectsData from '@data/projects.json'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

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
                <Card className="p-6 h-full">
                  <div className="mb-4 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-text-dark/60 dark:text-text-light/60 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
