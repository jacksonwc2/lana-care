'use client'

import { motion } from 'framer-motion'
import { ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeIn } from '@/lib/animations'
import styles from './ArrowIndicator.module.css'

const arrowVariants = createDelayedVariants(fadeIn, ANIMATION.delay.description + 0.2)

const pulseAnimation = {
  y: [0, 8, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function ArrowIndicator() {
  const scrollToButton = () => {
    const button = document.getElementById('contact-button')
    if (button) {
      button.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <motion.button
      className={styles.arrowContainer}
      onClick={scrollToButton}
      initial="hidden"
      animate="visible"
      variants={arrowVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Role para o botão de contato"
      type="button"
    >
      <motion.svg
        className={styles.arrow}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={pulseAnimation}
        aria-hidden="true"
      >
        <path
          d="M7 13L12 18L17 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6L12 11L17 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  )
}
