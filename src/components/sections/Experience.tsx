import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'
import educationData from '@data/education.json'

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Education & <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            {educationData.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <p className="text-sm text-text-dark/60 dark:text-text-light/60 mt-2">
                    {edu.field} • {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && <p className="text-sm mt-2">GPA: {edu.gpa}/4.0</p>}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
