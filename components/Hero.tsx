'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { COMPANY, PATHS, ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeInUp } from '@/lib/animations'
import styles from './Hero.module.css'

const containerVariants = createDelayedVariants(fadeInUp, ANIMATION.delay.hero)

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      className={styles.hero}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className={styles.logoContainer}>
        <Image
          src={PATHS.logo}
          alt={`${COMPANY.name} Logo`}
          width={140}
          height={140}
          priority
          className={styles.logo}
          unoptimized
        />
      </div>
    </motion.section>
  )
}
