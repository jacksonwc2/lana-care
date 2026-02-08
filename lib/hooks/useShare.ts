import { useCallback } from 'react'
import { COMPANY, MESSAGES, SHARE_CONFIG } from '../constants'

/**
 * Hook customizado para funcionalidades de compartilhamento
 */
export function useShare() {
  /**
   * Obtém a URL completa da página atual
   */
  const getShareUrl = useCallback((): string => {
    if (typeof window !== 'undefined' && window.location) {
      try {
        const protocol = window.location.protocol || 'https:'
        const host = window.location.host || new URL(COMPANY.website).host
        const pathname = window.location.pathname || '/'
        const search = window.location.search || ''
        const hash = window.location.hash || ''

        const fullUrl = `${protocol}//${host}${pathname}${search}${hash}`

        if (fullUrl.startsWith('http://') || fullUrl.startsWith('https://')) {
          return fullUrl
        }
      } catch (error) {
        console.error('Erro ao construir URL:', error)
      }
    }
    return COMPANY.website
  }, [])

  /**
   * Compartilha via WhatsApp
   */
  const shareViaWhatsApp = useCallback(() => {
    const url = getShareUrl()
    const text = encodeURIComponent(MESSAGES.share)
    const fullUrl = encodeURIComponent(url)
    window.open(`${SHARE_CONFIG.whatsappUrl}/?text=${text}%20${fullUrl}`, '_blank')
  }, [getShareUrl])

  /**
   * Copia o link para a área de transferência
   */
  const copyLink = useCallback(async (): Promise<boolean> => {
    const url = getShareUrl()
    try {
      await navigator.clipboard.writeText(url)
      return true
    } catch (err) {
      // Fallback para navegadores antigos
      try {
        const textArea = document.createElement('textarea')
        textArea.value = url
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        textArea.style.left = '-9999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        return true
      } catch (e) {
        console.error('Erro ao copiar:', e)
        return false
      }
    }
  }, [getShareUrl])

  /**
   * Compartilha usando a API nativa do navegador
   */
  const shareNative = useCallback(async (): Promise<boolean> => {
    if (!navigator.share) {
      return false
    }

    try {
      await navigator.share({
        title: MESSAGES.shareTitle,
        text: MESSAGES.share,
        url: getShareUrl(),
      })
      return true
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Erro ao compartilhar:', err)
      }
      return false
    }
  }, [getShareUrl])

  return {
    getShareUrl,
    shareViaWhatsApp,
    copyLink,
    shareNative,
  }
}
