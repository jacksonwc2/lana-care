# 🚀 Guia Completo: Deploy na Vercel com Variáveis de Ambiente

Este guia mostra passo a passo como fazer deploy na Vercel e configurar suas variáveis de ambiente.

## ⚠️ IMPORTANTE: Sobre o .env.local

**O arquivo `.env.local` NÃO vai para o repositório Git!**

- ✅ Está no `.gitignore` (não será commitado)
- ✅ É apenas para desenvolvimento local
- ✅ Na Vercel, você configura as variáveis pela interface web

---

## 📋 Passo a Passo Completo

### 1️⃣ Preparar o Código

```bash
# Certifique-se de que tudo está commitado
git add .
git commit -m "Preparar para deploy na Vercel"
git push origin main
```

### 2️⃣ Criar Conta na Vercel

1. Acesse **[vercel.com](https://vercel.com)**
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (ou GitLab/Bitbucket)
4. Autorize a Vercel a acessar seus repositórios

### 3️⃣ Importar Projeto

1. No dashboard da Vercel, clique em **"Add New Project"**
2. Selecione o repositório **`lana-care`**
3. A Vercel detectará automaticamente que é um projeto Next.js ✅

### 4️⃣ Configurar Variáveis de Ambiente (PASSO CRUCIAL!)

**⚠️ ANTES de clicar em "Deploy", configure as variáveis!**

#### Opção A: Configurar Antes do Deploy (Recomendado)

Na tela de configuração do projeto:

1. Role até a seção **"Environment Variables"**
2. Clique em **"Add"** para cada variável
3. Adicione todas as variáveis do seu `.env.local`:

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

**Para cada variável:**
- **Key**: Nome da variável (ex: `NEXT_PUBLIC_COMPANY_NAME`)
- **Value**: Valor da variável (ex: `Lana Care`)
- **Environments**: Marque todas ✅
  - ✅ Production
  - ✅ Preview  
  - ✅ Development

#### Opção B: Configurar Depois do Deploy

Se já fez deploy:

1. Vá em **Settings** > **Environment Variables**
2. Adicione as variáveis uma por uma
3. Após adicionar, faça um novo deploy:
   - Vá em **Deployments**
   - Clique nos 3 pontinhos do último deploy
   - Selecione **"Redeploy"**

### 5️⃣ Configurar Build Settings (Opcional)

A Vercel detecta automaticamente, mas você pode verificar:

- **Framework Preset**: Next.js ✅
- **Build Command**: `npm run build` (ou `yarn build`)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (ou `yarn install`)

### 6️⃣ Fazer Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (geralmente 1-3 minutos)
3. ✅ Seu site estará disponível em `https://lana-care.vercel.app`

---

## 🔄 Como Funcionam as Variáveis na Vercel

### Durante o Build

1. A Vercel lê as variáveis de ambiente que você configurou
2. Elas são injetadas no código durante o build
3. Variáveis `NEXT_PUBLIC_*` ficam disponíveis no cliente (browser)
4. Outras variáveis ficam apenas no servidor

### Após o Deploy

- As variáveis estão "embutidas" no código buildado
- Não precisa de arquivo `.env.local` em produção
- Cada deploy usa as variáveis configuradas na Vercel

---

## 📝 Exemplo Prático

### No seu `.env.local` (local):

```env
NEXT_PUBLIC_COMPANY_NAME=Lana Care
NEXT_PUBLIC_COMPANY_WEBSITE=https://lanacare.com.br
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```

### Na Vercel (produção):

1. Vá em **Settings** > **Environment Variables**
2. Adicione:
   - Key: `NEXT_PUBLIC_COMPANY_NAME`
   - Value: `Lana Care`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

3. Repita para todas as variáveis

---

## ✅ Checklist de Variáveis

Antes de fazer deploy, certifique-se de ter configurado:

- [ ] `NEXT_PUBLIC_COMPANY_NAME`
- [ ] `NEXT_PUBLIC_COMPANY_TAGLINE`
- [ ] `NEXT_PUBLIC_COMPANY_DESCRIPTION`
- [ ] `NEXT_PUBLIC_COMPANY_PHONE`
- [ ] `NEXT_PUBLIC_COMPANY_PHONE_FORMATTED`
- [ ] `NEXT_PUBLIC_COMPANY_WEBSITE` ⚠️ **IMPORTANTE: Use a URL da Vercel inicialmente, depois atualize para seu domínio**
- [ ] `NEXT_PUBLIC_GA_ID` (se usar Google Analytics)
- [ ] `NEXT_PUBLIC_WHATSAPP_MESSAGE`
- [ ] `NEXT_PUBLIC_SHARE_MESSAGE`
- [ ] `NEXT_PUBLIC_SHARE_TITLE`

---

## 🎯 Dicas Importantes

### 1. URL do Site

**Inicialmente:**
```env
NEXT_PUBLIC_COMPANY_WEBSITE=https://lana-care.vercel.app
```

**Depois de configurar domínio customizado:**
```env
NEXT_PUBLIC_COMPANY_WEBSITE=https://lanacare.com.br
```

### 2. Google Analytics

- Se não tiver Google Analytics ainda, deixe vazio: `NEXT_PUBLIC_GA_ID=` (vazio)
- O componente não será renderizado se estiver vazio
- Você pode adicionar depois e fazer redeploy

### 3. Variáveis por Ambiente

Você pode ter valores diferentes para:
- **Production**: Valores reais
- **Preview**: Valores de teste (para PRs)
- **Development**: Valores locais

### 4. Atualizar Variáveis

Se mudar uma variável:
1. Vá em **Settings** > **Environment Variables**
2. Edite ou adicione a variável
3. Vá em **Deployments** > **Redeploy** do último deploy

---

## 🚨 Problemas Comuns

### Problema: Variáveis não aparecem no site

**Solução:**
1. Verifique se começam com `NEXT_PUBLIC_`
2. Faça um novo deploy após adicionar variáveis
3. Limpe cache do navegador

### Problema: Site mostra valores padrão

**Solução:**
1. Verifique se as variáveis estão configuradas na Vercel
2. Verifique se estão marcadas para "Production"
3. Faça um redeploy

### Problema: Build falha

**Solução:**
1. Verifique os logs do build na Vercel
2. Teste localmente: `npm run build`
3. Verifique se todas as dependências estão no `package.json`

---

## 🔗 Próximos Passos

Após o deploy bem-sucedido:

1. ✅ Teste o site em `https://lana-care.vercel.app`
2. ✅ Configure domínio customizado (opcional)
3. ✅ Configure Google Analytics (se aplicável)
4. ✅ Compartilhe o link!

---

## 📞 Precisa de Ajuda?

- **Logs do Build**: Vá em Deployments > Clique no deploy > Ver logs
- **Variáveis**: Settings > Environment Variables
- **Documentação Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**Pronto! Agora você sabe como fazer deploy na Vercel com variáveis de ambiente! 🚀**
