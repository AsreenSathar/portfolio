import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'
import skillsData from '@data/skills.json'
import * as Icons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  // Group skills by category
  const groupedSkills = skillsData.reduce((acc: any, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  const getIcon = (iconName: string) => {
    if (iconName.startsWith('Si')) {
      return (SiIcons as any)[iconName] || Icons.FaCode
    }
    return (Icons as any)[iconName] || Icons.FaCode
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          {Object.entries(groupedSkills).map(([category, skills]: [string, any]) => (
            <motion.div key={category} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold capitalize">{category}</h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {skills.map((skill: any) => {
                  const IconComponent = getIcon(skill.icon)
                  return (
                    <motion.div key={skill.id} variants={itemVariants}>
                      <Card className="p-4 h-full flex flex-col items-center text-center">
                        <IconComponent size={32} className="text-primary mb-3" />
                        <h4 className="font-semibold mb-2">{skill.name}</h4>
                        <div className="w-full bg-white/10 rounded-full h-2 mt-auto">
                          <motion.div
                            className="h-full rounded-full progress-moving"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level * 10}%` } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <p className="text-xs text-text-dark/60 dark:text-text-light/60 mt-2">{skill.level}/10</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
