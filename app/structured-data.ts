import { COMPANY, PATHS } from '@/lib/constants'

export default function StructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    logo: `${COMPANY.website}${PATHS.logo}`,
    image: `${COMPANY.website}${PATHS.logo}`,
    slogan: COMPANY.tagline,
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: [
      'Concierge Médico',
      'Marketing Médico',
      'Gestão de Consultório',
      'Agendamento Médico',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Portuguese',
    },
  }
}
