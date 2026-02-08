import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Text } from 'next/font/google'
import { COMPANY, PATHS } from '@/lib/constants'
import structuredData from './structured-data'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${COMPANY.name} - Concierge Médico | ${COMPANY.tagline}`,
  description: COMPANY.description,
  keywords: [
    'concierge médico',
    'concierge para consultório',
    'agendamento médico',
    'marketing médico',
    'gestão de consultório',
    COMPANY.name,
    'concierge saúde',
    'atendimento médico',
    'consultório médico',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(COMPANY.website),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY.name} - Concierge Médico | ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: COMPANY.website,
    siteName: COMPANY.name,
    images: [
      {
        url: PATHS.logo,
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Concierge Médico`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} - Concierge Médico`,
    description: COMPANY.description,
    images: [PATHS.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: PATHS.logo, type: 'image/jpeg', sizes: 'any' },
      { url: PATHS.icon, type: 'image/png', sizes: 'any' },
    ],
    apple: [
      { url: PATHS.appleIcon, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: PATHS.logo,
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#F8F7F3',
    'geo.region': 'BR',
    'geo.placename': 'Brasil',
    language: 'Portuguese',
  },
  verification: {
    // Adicione aqui quando tiver verificação do Google Search Console
    // google: 'seu-codigo-de-verificacao',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = structuredData()

  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${crimsonText.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
