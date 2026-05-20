import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@utils/animationVariants'
import { useInView } from '@hooks/useInView'
import Card from '@components/common/Card'
import certificatesData from '@data/certificates.json'

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="certificates" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Certifications & <span className="gradient-text">Awards</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificatesData.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                  <p className="text-sm text-text-dark/60 dark:text-text-light/60 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary">{cert.issueDate}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
