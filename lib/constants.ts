/**
 * Constantes centralizadas da aplicação
 *
 * IMPORTANTE: Para personalizar o site, edite as variáveis de ambiente no arquivo .env.local
 * Veja .env.example para referência das variáveis disponíveis
 */

// Informações da empresa (configuráveis via variáveis de ambiente)
export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Lana Care',
  tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Muito além do agendamento',
  description:
    process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION ||
    'O cuidado que seu consultório merece! Concierge médico especializado. Soluções completas em concierge e marketing para consultórios médicos.',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+55 49 9954-5323',
  phoneFormatted: process.env.NEXT_PUBLIC_COMPANY_PHONE_FORMATTED || '554999545323',
  website: process.env.NEXT_PUBLIC_COMPANY_WEBSITE || 'https://lanacare.com.br',
} as const

// Mensagens (configuráveis via variáveis de ambiente)
export const MESSAGES = {
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Olá! Gostaria de saber mais sobre os serviços da Lana Care.',
  share:
    process.env.NEXT_PUBLIC_SHARE_MESSAGE || 'Conheça a Lana Care - Concierge Médico!',
  shareTitle:
    process.env.NEXT_PUBLIC_SHARE_TITLE || 'Lana Care - Concierge Médico',
} as const

// Google Analytics ID (configurável via variável de ambiente)
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// URLs e caminhos
export const PATHS = {
  logo: '/logo.jpg',
  icon: '/icon.png',
  appleIcon: '/apple-icon.png',
} as const

// Configurações de animação
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.6,
    slow: 0.7,
  },
  delay: {
    hero: 0,
    tagline: 0.4,
    description: 0.6,
    button: 0.8,
    footer: 1.0,
    share: 1.5,
  },
  easing: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
} as const

// Configurações de compartilhamento
export const SHARE_CONFIG = {
  whatsappUrl: 'https://wa.me',
  fallbackUrl: COMPANY.website,
} as const
