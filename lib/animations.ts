import { Variants } from 'framer-motion'
import { ANIMATION } from './constants'

/**
 * Variantes de animação reutilizáveis
 */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing,
    },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing,
      type: 'spring',
      stiffness: 100,
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing,
    },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing,
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.fast,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.15 },
  },
}

/**
 * Cria variantes de animação com delay customizado
 */
export const createDelayedVariants = (
  baseVariants: Variants,
  delay: number
): Variants => {
  const visibleVariant = baseVariants.visible
  
  // Verifica se é um objeto (não uma função TargetResolver)
  if (visibleVariant && typeof visibleVariant === 'object') {
    const existingTransition =
      'transition' in visibleVariant
        ? (visibleVariant.transition as Record<string, unknown>)
        : {}
    
    return {
      ...baseVariants,
      visible: {
        ...visibleVariant,
        transition: {
          ...existingTransition,
          delay,
        },
      },
    }
  }
  
  // Se visible não for um objeto, retorna com delay no transition
  return {
    ...baseVariants,
    visible: {
      transition: {
        delay,
      },
    },
  }
}
