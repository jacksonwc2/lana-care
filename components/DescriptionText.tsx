'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { COMPANY, ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeInLeft, fadeInRight } from '@/lib/animations'
import styles from './DescriptionText.module.css'

const taglineVariants = createDelayedVariants(fadeInLeft, ANIMATION.delay.tagline)
const descriptionVariants = createDelayedVariants(fadeInRight, ANIMATION.delay.description)

export default function DescriptionText() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={styles.container}>
      <motion.p
        className={styles.tagline}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={taglineVariants}
      >
        {COMPANY.tagline}
      </motion.p>

      <motion.div
        className={styles.description}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={descriptionVariants}
      >
        <p>{COMPANY.description}</p>
      </motion.div>
    </div>
  )
}
