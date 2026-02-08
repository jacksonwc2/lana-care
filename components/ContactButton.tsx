'use client'

import { motion } from 'framer-motion'
import { COMPANY, MESSAGES, ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeInDown } from '@/lib/animations'
import styles from './ContactButton.module.css'

const buttonVariants = createDelayedVariants(fadeInDown, ANIMATION.delay.button)

const buttonHover = {
  scale: 1.03,
  y: -3,
  transition: { duration: ANIMATION.duration.fast, ease: 'easeOut' },
}

const buttonTap = {
  scale: 0.97,
  y: 0,
}

export default function ContactButton() {
  const handleContact = () => {
    const message = encodeURIComponent(MESSAGES.whatsapp)
    window.open(`https://wa.me/${COMPANY.phoneFormatted}?text=${message}`, '_blank')
  }

  return (
    <motion.div
      className={styles.buttonContainer}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <motion.button
        id="contact-button"
        onClick={handleContact}
        className={styles.contactButton}
        aria-label="Fale com Lana via WhatsApp"
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        <span className={styles.buttonText}>Fale com Lana</span>
        <span className={styles.buttonIcon} aria-hidden="true">
          💬
        </span>
      </motion.button>
    </motion.div>
  )
}
