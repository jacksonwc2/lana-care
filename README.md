# Lana Care - Site Institucional

Site estilo Linktree para apresentação da empresa Lana Care, especializada em concierge médico. Desenvolvido com Next.js 14, TypeScript e Framer Motion.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Google Analytics](#google-analytics)
- [Personalização](#personalização)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)

## 🎯 Sobre o Projeto

Este projeto é um site institucional estilo Linktree desenvolvido para a Lana Care, uma empresa especializada em concierge médico. O site apresenta informações da empresa de forma clara e objetiva, com animações profissionais e design responsivo.

### Características Principais

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado (meta tags, structured data, sitemap)
- ✅ Google Analytics integrado
- ✅ Compartilhamento social (WhatsApp, nativo, copiar link)
- ✅ Código organizado e manutenível
- ✅ Variáveis de ambiente para fácil personalização

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilos modulares e componentizados
- **Framer Motion** - Biblioteca de animações profissionais
- **Google Fonts** - Playfair Display e Crimson Text

## 📁 Estrutura do Projeto

```
lana-care/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout principal com metadados SEO
│   ├── page.tsx                 # Página inicial
│   ├── page.module.css          # Estilos da página
│   ├── globals.css              # Estilos globais e variáveis CSS
│   ├── structured-data.ts       # Dados estruturados (Schema.org)
│   ├── sitemap.ts               # Geração dinâmica do sitemap
│   └── robots.ts                # Configuração do robots.txt
├── components/                   # Componentes React
│   ├── Hero.tsx                 # Logo da empresa
│   ├── DescriptionText.tsx      # Tagline e descrição
│   ├── ContactButton.tsx        # Botão de contato WhatsApp
│   ├── ShareButton.tsx           # Botão de compartilhamento
│   ├── Footer.tsx               # Rodapé com copyright
│   └── GoogleAnalytics.tsx     # Integração Google Analytics
├── lib/                          # Utilitários e constantes
│   ├── constants.ts             # Constantes centralizadas
│   ├── animations.ts            # Variantes de animação reutilizáveis
│   ├── types.ts                 # Tipos TypeScript compartilhados
│   └── hooks/                   # Hooks customizados
│       ├── useShare.ts          # Hook para compartilhamento
│       └── useClickOutside.ts  # Hook para detectar cliques externos
├── public/                       # Arquivos estáticos
│   ├── logo.jpg                 # Logo da empresa
│   ├── icon.png                 # Ícone do site
│   ├── apple-icon.png           # Ícone para iOS
│   └── manifest.json            # Manifest PWA
├── .env.example                 # Exemplo de variáveis de ambiente
├── .env.local                   # Variáveis de ambiente (criar localmente)
└── README.md                    # Este arquivo
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd lana-care
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```

4. **Edite o arquivo `.env.local`** com suas configurações (veja seção [Variáveis de Ambiente](#variáveis-de-ambiente))

5. **Execute em desenvolvimento**
   ```bash
   npm run dev
   ```

6. **Acesse o site**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para facilitar a personalização. Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`.

#### Variáveis Disponíveis

| Variável | Descrição | Padrão | Obrigatório |
|----------|-----------|--------|-------------|
| `NEXT_PUBLIC_COMPANY_NAME` | Nome da empresa | `Lana Care` | Não |
| `NEXT_PUBLIC_COMPANY_TAGLINE` | Slogan da empresa | `Muito além do agendamento` | Não |
| `NEXT_PUBLIC_COMPANY_DESCRIPTION` | Descrição da empresa | `O cuidado que seu consultório merece!...` | Não |
| `NEXT_PUBLIC_COMPANY_PHONE` | Telefone formatado | `+55 49 9954-5323` | Não |
| `NEXT_PUBLIC_COMPANY_PHONE_FORMATTED` | Telefone sem formatação (para WhatsApp) | `554999545323` | Não |
| `NEXT_PUBLIC_COMPANY_WEBSITE` | URL do site | `https://lanacare.com.br` | Não |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics | - | Não |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Mensagem padrão do WhatsApp | `Olá! Gostaria de saber mais...` | Não |
| `NEXT_PUBLIC_SHARE_MESSAGE` | Mensagem de compartilhamento | `Conheça a Lana Care...` | Não |
| `NEXT_PUBLIC_SHARE_TITLE` | Título de compartilhamento | `Lana Care - Concierge Médico` | Não |

#### Exemplo de `.env.local`

```env
# Configurações da Empresa
NEXT_PUBLIC_COMPANY_NAME=Sua Empresa
NEXT_PUBLIC_COMPANY_TAGLINE=Seu Slogan Aqui
NEXT_PUBLIC_COMPANY_DESCRIPTION=Sua descrição completa aqui
NEXT_PUBLIC_COMPANY_PHONE=+55 11 99999-9999
NEXT_PUBLIC_COMPANY_PHONE_FORMATTED=5511999999999
NEXT_PUBLIC_COMPANY_WEBSITE=https://seusite.com.br

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Mensagens
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre seus serviços.
NEXT_PUBLIC_SHARE_MESSAGE=Conheça nossa empresa!
NEXT_PUBLIC_SHARE_TITLE=Sua Empresa - Título
```

### Google Analytics

Para habilitar o Google Analytics:

1. **Obtenha seu ID de medição**
   - Acesse [Google Analytics](https://analytics.google.com/)
   - Crie uma propriedade ou use uma existente
   - Copie o ID de medição (formato: `G-XXXXXXXXXX`)

2. **Configure a variável de ambiente**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Reinicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

O Google Analytics será carregado automaticamente. Se a variável não estiver definida, o componente não será renderizado.

## 🎨 Personalização

### Cores

As cores estão definidas em `app/globals.css` através de variáveis CSS:

```css
:root {
  --color-off: #F8F7F3;        /* Cor de fundo */
  --color-brown: #6B3F35;     /* Cor principal */
  --color-olive: #708A4D;     /* Cor secundária */
  --color-olive-dark: #5A6F3E;
  /* ... */
}
```

Para alterar as cores, edite essas variáveis no arquivo `app/globals.css`.

### Logo

1. **Substitua o arquivo de logo**
   - Coloque sua logo em `public/logo.jpg`
   - Formatos suportados: JPG, PNG, WebP

2. **Ajuste o tamanho** (se necessário)
   - Edite `components/Hero.module.css`
   - Modifique as propriedades `width` e `height` do `.logoContainer`

### Fontes

As fontes estão configuradas em `app/layout.tsx`:

- **Título**: Playfair Display
- **Subtítulo**: Crimson Text

Para alterar, edite o arquivo `app/layout.tsx` e importe novas fontes do Google Fonts.

### Animações

As animações estão centralizadas em `lib/animations.ts`. Para personalizar:

1. Edite os delays em `lib/constants.ts` (seção `ANIMATION.delay`)
2. Modifique as variantes em `lib/animations.ts`
3. Ajuste durações em `lib/constants.ts` (seção `ANIMATION.duration`)

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento em http://localhost:3000

# Produção
npm run build        # Cria build otimizado para produção
npm start            # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa o linter ESLint
```

## 🚀 Deploy

### Guia Completo de Deploy

Para instruções detalhadas de deploy, consulte o arquivo **[DEPLOY.md](./DEPLOY.md)** que contém:

- ✅ Guia passo a passo para Vercel (recomendado)
- ✅ Instruções para Netlify
- ✅ Configuração para Railway
- ✅ Deploy manual em VPS/Cloud
- ✅ Checklist pré-deploy
- ✅ Configuração de domínio customizado
- ✅ Troubleshooting comum

### Resumo Rápido - Vercel (Recomendado)

1. **Conecte seu repositório**
   - Acesse [Vercel](https://vercel.com)
   - Conecte seu repositório GitHub/GitLab/Bitbucket

2. **Configure variáveis de ambiente**
   - Na dashboard da Vercel, vá em Settings > Environment Variables
   - Adicione todas as variáveis do `.env.local`

3. **Deploy automático**
   - A Vercel detecta automaticamente Next.js
   - O deploy acontece automaticamente a cada push

### Variáveis de Ambiente no Deploy

⚠️ **Importante**: Certifique-se de configurar todas as variáveis de ambiente na plataforma de deploy, especialmente:

- `NEXT_PUBLIC_COMPANY_WEBSITE` (para SEO e compartilhamento)
- `NEXT_PUBLIC_GA_ID` (se usar Google Analytics)

📖 **Para mais detalhes, veja [DEPLOY.md](./DEPLOY.md)**

## 📝 Estrutura de Código

### Componentes

Todos os componentes seguem o padrão:

- Componente React em `.tsx`
- Estilos em `.module.css`
- Uso de constantes centralizadas de `lib/constants.ts`
- Animações reutilizáveis de `lib/animations.ts`

### Hooks Customizados

- **`useShare`**: Gerencia funcionalidades de compartilhamento
- **`useClickOutside`**: Detecta cliques fora de elementos

### Constantes

Todas as constantes estão centralizadas em `lib/constants.ts` e podem ser configuradas via variáveis de ambiente.

## 🔍 SEO

O projeto inclui:

- ✅ Meta tags otimizadas (Open Graph, Twitter Cards)
- ✅ Dados estruturados (Schema.org)
- ✅ Sitemap dinâmico
- ✅ Robots.txt configurado
- ✅ URLs canônicas
- ✅ Imagens otimizadas com Next.js Image

## 📱 Responsividade

O design é mobile-first e se adapta a diferentes tamanhos de tela:

- **Mobile**: Layout otimizado para smartphones
- **Tablet/Desktop**: Container centralizado com max-width (estilo Linktree)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e proprietário da Lana Care.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do site ou abra uma issue no repositório.

---

Desenvolvido com ❤️ para Lana Care
