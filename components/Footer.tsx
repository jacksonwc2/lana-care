'use client'

import { motion } from 'framer-motion'
import { COMPANY, ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeIn } from '@/lib/animations'
import styles from './Footer.module.css'

const footerVariants = createDelayedVariants(fadeIn, ANIMATION.delay.footer)

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <p className={styles.footerText}>
        © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
      </p>
    </motion.footer>
  )
}
