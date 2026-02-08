/**
 * Tipos TypeScript compartilhados
 */

export interface ShareData {
  title: string
  text: string
  url: string
}

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: [number, number, number, number]
}
