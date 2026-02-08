'use client'

import { GA_ID } from '@/lib/constants'
import Script from 'next/script'

/**
 * Componente para integração do Google Analytics
 * 
 * Para usar, defina a variável de ambiente NEXT_PUBLIC_GA_ID no arquivo .env.local
 * Exemplo: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */
export default function GoogleAnalytics() {
  if (!GA_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
