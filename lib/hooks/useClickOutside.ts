import { useEffect, RefObject } from 'react'

/**
 * Hook para detectar cliques fora de um elemento
 * Aceita múltiplos refs de diferentes tipos de elementos HTML
 */
export function useClickOutside(
  refs: RefObject<HTMLElement>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(target)
      )

      if (isOutside) {
        handler(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [refs, handler, enabled])
}
