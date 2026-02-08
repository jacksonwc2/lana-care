# 🚀 Guia de Deploy - Lana Care

Este documento detalha as melhores opções e passos para fazer deploy do site Lana Care.

> 💡 **Quer saber sobre planos gratuitos?** Veja [PLANOS-GRATUITOS.md](./PLANOS-GRATUITOS.md) para comparação detalhada.

## 📋 Índice

- [Opção 1: Vercel (Recomendado)](#opção-1-vercel-recomendado)
- [Opção 2: Netlify](#opção-2-netlify)
- [Opção 3: Railway](#opção-3-railway)
- [Opção 4: Deploy Manual (VPS/Cloud)](#opção-4-deploy-manual-vpscloud)
- [Checklist Pré-Deploy](#checklist-pré-deploy)
- [Configuração de Domínio](#configuração-de-domínio)
- [Troubleshooting](#troubleshooting)

---

## ⭐ Opção 1: Vercel (Recomendado)

**Por que Vercel?**
- ✅ Criada pela equipe do Next.js
- ✅ Deploy automático a cada push
- ✅ CDN global integrado
- ✅ SSL automático
- ✅ Preview deployments para PRs
- ✅ Plano gratuito generoso
- ✅ Zero configuração necessária

### Passo a Passo

#### 1. Preparar o Repositório

```bash
# Certifique-se de que tudo está commitado
git add .
git commit -m "Preparar para deploy"
git push origin main
```

#### 2. Criar Conta na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub" (ou GitLab/Bitbucket)
4. Autorize a Vercel a acessar seus repositórios

#### 3. Importar Projeto

1. No dashboard da Vercel, clique em "Add New Project"
2. Selecione o repositório `lana-care`
3. A Vercel detectará automaticamente que é um projeto Next.js

#### 4. Configurar Variáveis de Ambiente

Na tela de configuração do projeto:

1. Vá até a seção "Environment Variables"
2. Adicione cada variável do seu `.env.local`:

```
NEXT_PUBLIC_COMPANY_NAME=Lana Care
NEXT_PUBLIC_COMPANY_TAGLINE=Muito além do agendamento
NEXT_PUBLIC_COMPANY_DESCRIPTION=O cuidado que seu consultório merece! Concierge médico especializado. Soluções completas em concierge e marketing para consultórios médicos.
NEXT_PUBLIC_COMPANY_PHONE=+55 49 9954-5323
NEXT_PUBLIC_COMPANY_PHONE_FORMATTED=554999545323
NEXT_PUBLIC_COMPANY_WEBSITE=https://lanacare.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre os serviços da Lana Care.
NEXT_PUBLIC_SHARE_MESSAGE=Conheça a Lana Care - Concierge Médico!
NEXT_PUBLIC_SHARE_TITLE=Lana Care - Concierge Médico
```

**Importante**: 
- Marque todas como "Production", "Preview" e "Development"
- Substitua `G-XXXXXXXXXX` pelo seu ID real do Google Analytics

#### 5. Configurar Build Settings

A Vercel detecta automaticamente, mas verifique:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (ou `yarn build`)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (ou `yarn install`)

#### 6. Deploy

1. Clique em "Deploy"
2. Aguarde o build (geralmente 1-3 minutos)
3. Seu site estará disponível em `https://lana-care.vercel.app`

#### 7. Configurar Domínio Customizado (Opcional)

1. Vá em Settings > Domains
2. Adicione seu domínio (ex: `lanacare.com.br`)
3. Siga as instruções de DNS:
   - Adicione um registro CNAME apontando para `cname.vercel-dns.com`
   - Ou adicione um registro A com o IP fornecido pela Vercel
4. Aguarde a propagação DNS (pode levar até 48h, geralmente < 1h)

#### 8. Deploy Automático

A partir de agora, cada push para a branch `main` fará deploy automático!

---

## 🌐 Opção 2: Netlify

**Por que Netlify?**
- ✅ Interface amigável
- ✅ Deploy automático
- ✅ CDN global
- ✅ SSL automático
- ✅ Plano gratuito

### Passo a Passo

#### 1. Criar Conta

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub/GitLab/Bitbucket

#### 2. Criar Site Novo

1. Clique em "Add new site" > "Import an existing project"
2. Selecione seu repositório `lana-care`

#### 3. Configurar Build

```
Build command: npm run build
Publish directory: .next
```

**⚠️ Importante**: O Netlify precisa de uma configuração adicional para Next.js.

#### 4. Criar Arquivo `netlify.toml`

Crie na raiz do projeto:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 5. Instalar Plugin Next.js

```bash
npm install --save-dev @netlify/plugin-nextjs
```

#### 6. Configurar Variáveis de Ambiente

1. Vá em Site settings > Environment variables
2. Adicione todas as variáveis do `.env.local`

#### 7. Deploy

1. Faça commit e push do `netlify.toml`
2. O Netlify fará deploy automaticamente

---

## 🚂 Opção 3: Railway

**Por que Railway?**
- ✅ Simples e rápido
- ✅ Deploy automático
- ✅ SSL automático
- ✅ Plano gratuito com créditos mensais

### Passo a Passo

#### 1. Criar Conta

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub

#### 2. Criar Novo Projeto

1. Clique em "New Project"
2. Selecione "Deploy from GitHub repo"
3. Escolha o repositório `lana-care`

#### 3. Configurar Variáveis

1. Vá em Variables
2. Adicione todas as variáveis de ambiente

#### 4. Configurar Build

Railway detecta Next.js automaticamente, mas você pode ajustar:

- **Start Command**: `npm start`
- **Build Command**: `npm run build`

#### 5. Deploy

Railway fará deploy automaticamente após o primeiro push.

---

## 🖥️ Opção 4: Deploy Manual (VPS/Cloud)

Para servidores próprios (AWS EC2, DigitalOcean, Linode, etc.)

### Pré-requisitos

- Node.js 18+ instalado
- PM2 (gerenciador de processos)
- Nginx (proxy reverso)
- Domínio configurado

### Passo a Passo

#### 1. Preparar Servidor

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt install nginx -y
```

#### 2. Clonar Repositório

```bash
cd /var/www
sudo git clone <seu-repositorio> lana-care
cd lana-care
sudo npm install
```

#### 3. Configurar Variáveis de Ambiente

```bash
sudo nano .env.production
```

Adicione todas as variáveis necessárias.

#### 4. Build e Start

```bash
# Build
sudo npm run build

# Iniciar com PM2
pm2 start npm --name "lana-care" -- start
pm2 save
pm2 startup
```

#### 5. Configurar Nginx

Crie `/etc/nginx/sites-available/lana-care`:

```nginx
server {
    listen 80;
    server_name lanacare.com.br www.lanacare.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Habilitar site
sudo ln -s /etc/nginx/sites-available/lana-care /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. Configurar SSL com Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d lanacare.com.br -d www.lanacare.com.br
```

---

## ✅ Checklist Pré-Deploy

Antes de fazer deploy, certifique-se de:

- [ ] Todas as variáveis de ambiente estão configuradas
- [ ] `NEXT_PUBLIC_COMPANY_WEBSITE` aponta para o domínio correto
- [ ] Google Analytics ID está configurado (se aplicável)
- [ ] Logo e imagens estão em `public/`
- [ ] Testes locais passaram (`npm run build`)
- [ ] Código está commitado e pushado
- [ ] `.env.local` não está no repositório (já está no `.gitignore`)

### Testar Build Localmente

```bash
# Build de produção
npm run build

# Testar servidor de produção localmente
npm start

# Acesse http://localhost:3000
```

---

## 🌍 Configuração de Domínio

### Para Vercel

1. **Adicionar Domínio**:
   - Settings > Domains > Add Domain
   - Digite seu domínio (ex: `lanacare.com.br`)

2. **Configurar DNS**:
   - **Opção A (Recomendada)**: Adicione CNAME:
     ```
     Type: CNAME
     Name: @ (ou www)
     Value: cname.vercel-dns.com
     ```
   - **Opção B**: Adicione A Record:
     ```
     Type: A
     Name: @
     Value: [IP fornecido pela Vercel]
     ```

3. **Aguardar Propagação**: 5 minutos a 48 horas (geralmente < 1h)

### Para Netlify

1. Site settings > Domain management > Add custom domain
2. Configure DNS conforme instruções do Netlify
3. Aguarde propagação

### Para Railway

1. Settings > Networking > Add Domain
2. Configure DNS conforme instruções
3. Aguarde propagação

---

## 🔧 Troubleshooting

### Build Falha

**Erro**: `Module not found`
- **Solução**: Execute `npm install` e verifique se todas as dependências estão no `package.json`

**Erro**: `Environment variable not found`
- **Solução**: Verifique se todas as variáveis `NEXT_PUBLIC_*` estão configuradas na plataforma

### Site Não Carrega

**Problema**: Página em branco
- **Solução**: Verifique o console do navegador e logs da plataforma de deploy

**Problema**: Erro 404 em rotas
- **Solução**: Verifique se está usando Next.js App Router corretamente

### Variáveis de Ambiente Não Funcionam

**Problema**: Valores padrão aparecem ao invés dos configurados
- **Solução**: 
  1. Verifique se as variáveis começam com `NEXT_PUBLIC_`
  2. Reinicie o servidor/build
  3. Limpe cache do navegador

### Google Analytics Não Funciona

**Problema**: Analytics não registra visitas
- **Solução**:
  1. Verifique se `NEXT_PUBLIC_GA_ID` está configurado
  2. Verifique formato do ID (deve ser `G-XXXXXXXXXX`)
  3. Use extensão do Chrome "Google Analytics Debugger" para testar

### Performance

**Problema**: Site lento
- **Solução**:
  1. Verifique se está usando CDN (Vercel/Netlify têm por padrão)
  2. Otimize imagens (já está usando `next/image`)
  3. Verifique se `unoptimized` não está habilitado desnecessariamente

---

## 📊 Comparação de Plataformas

| Recurso | Vercel | Netlify | Railway | VPS Manual |
|---------|--------|---------|---------|------------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Deploy Automático** | ✅ | ✅ | ✅ | ❌ |
| **CDN Global** | ✅ | ✅ | ✅ | ❌* |
| **SSL Automático** | ✅ | ✅ | ✅ | ⚠️ |
| **Plano Gratuito** | ✅ | ✅ | ✅ | ❌ |
| **Custo Escala** | 💰💰 | 💰💰 | 💰💰💰 | 💰💰💰💰 |
| **Melhor Para** | Next.js | Sites Estáticos | Apps Full-Stack | Controle Total |

*Pode ser configurado com Cloudflare

---

## 🎯 Recomendação Final

**Para este projeto, recomendo fortemente a Vercel** porque:

1. ✅ Criada pela equipe do Next.js
2. ✅ Zero configuração necessária
3. ✅ Deploy em segundos
4. ✅ CDN global integrado
5. ✅ SSL automático
6. ✅ Preview deployments
7. ✅ Plano gratuito generoso
8. ✅ Suporte excelente

**Próximos Passos**:
1. Escolha a plataforma (recomendo Vercel)
2. Siga o passo a passo correspondente acima
3. Configure variáveis de ambiente
4. Faça deploy!
5. Configure domínio customizado

---

## 📞 Suporte

Se encontrar problemas durante o deploy:

1. Verifique os logs da plataforma de deploy
2. Teste o build localmente (`npm run build`)
3. Consulte a documentação da plataforma escolhida
4. Abra uma issue no repositório

---

**Boa sorte com o deploy! 🚀**
