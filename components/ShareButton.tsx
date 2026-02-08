'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { ANIMATION } from '@/lib/constants'
import { createDelayedVariants, fadeIn, scaleIn } from '@/lib/animations'
import { useShare } from '@/lib/hooks/useShare'
import { useClickOutside } from '@/lib/hooks/useClickOutside'
import styles from './ShareButton.module.css'

const containerVariants = createDelayedVariants(fadeIn, ANIMATION.delay.share)

const ShareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6L12 2L8 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { shareViaWhatsApp, copyLink, shareNative } = useShare()
  
  // Verifica se a API de compartilhamento nativo está disponível
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator && typeof navigator.share === 'function'

  useClickOutside([menuRef, buttonRef], () => setIsOpen(false), isOpen)

  const handleToggleMenu = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleShareNative = async () => {
    await shareNative()
    setIsOpen(false)
  }

  const handleShareWhatsApp = () => {
    shareViaWhatsApp()
    setIsOpen(false)
  }

  const handleCopyLink = async () => {
    await copyLink()
    setIsOpen(false)
  }

  return (
    <div className={styles.shareWrapper}>
      <motion.button
        ref={buttonRef}
        className={styles.shareButton}
        onClick={handleToggleMenu}
        onTouchEnd={handleToggleMenu}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileTap={{ scale: 0.95 }}
        aria-label="Compartilhar"
        type="button"
        aria-expanded={isOpen}
      >
        <ShareIcon />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className={styles.shareMenu}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {canShare && (
              <button
                className={styles.shareOption}
                onClick={handleShareNative}
                type="button"
              >
                <span className={styles.shareIcon}>📤</span>
                <span className={styles.shareText}>Compartilhar</span>
              </button>
            )}
            <button
              className={styles.shareOption}
              onClick={handleShareWhatsApp}
              type="button"
            >
              <span className={styles.shareIcon}>💬</span>
              <span className={styles.shareText}>WhatsApp</span>
            </button>
            <button
              className={styles.shareOption}
              onClick={handleCopyLink}
              type="button"
            >
              <span className={styles.shareIcon}>🔗</span>
              <span className={styles.shareText}>Copiar Link</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
