# 💰 Planos Gratuitos - Comparação de Plataformas

Este documento compara os planos gratuitos das principais plataformas de deploy para Next.js.

## 📊 Comparação Rápida

| Plataforma | Plano Gratuito | Limites Principais | Melhor Para |
|------------|----------------|-------------------|-------------|
| **Vercel** | ✅ Hobby Plan | 100 deploys/dia, 100GB bandwidth/mês | ⭐ **Recomendado** |
| **Netlify** | ✅ Free Plan | 300 créditos/mês | Sites estáticos e pequenos |
| **Railway** | ✅ Free Plan | $1 crédito/mês | Apps experimentais |
| **Render** | ✅ Free Plan | 750 horas/mês | Projetos pessoais |
| **Fly.io** | ✅ Free Plan | 3 VMs compartilhadas | Apps distribuídos |

---

## 🟢 Vercel - Hobby Plan (GRATUITO)

### ✅ O que está incluído:

- **Deploys**: 100 por dia
- **Bandwidth**: 100 GB/mês
- **Builds**: 100 horas/mês
- **CPU**: 4 CPU-hours/mês
- **Memória**: 360 GB-hours/mês
- **Funções Serverless**: 1 milhão de invocações/mês
- **Projetos**: Até 200 projetos
- **Domínios customizados**: Ilimitados
- **SSL**: Automático e gratuito
- **CDN Global**: Incluído
- **Preview Deployments**: Ilimitados

### 💡 É suficiente para:

✅ **SIM** - Perfeito para este projeto!  
- Site institucional simples
- Baixo tráfego esperado
- Deploys ocasionais
- Sem necessidade de funções serverless complexas

### ⚠️ Limitações:

- 1 build simultâneo (não afeta projetos pequenos)
- Sem suporte prioritário
- Sem analytics avançado

### 🎯 Recomendação:

**⭐ MELHOR OPÇÃO** para o projeto Lana Care. Mais do que suficiente para um site institucional.

---

## 🟢 Netlify - Free Plan (GRATUITO)

### ✅ O que está incluído:

- **Créditos Mensais**: 300 créditos/mês
- **Deploys**: ~20 deploys de produção/mês (15 créditos cada)
- **Bandwidth**: ~30 GB/mês (10 créditos por GB)
- **Builds**: 1 build simultâneo
- **Domínios customizados**: Ilimitados
- **SSL**: Automático
- **CDN Global**: Incluído
- **Preview Deployments**: Ilimitados
- **Formulários**: 100 submissões/mês

### 💡 É suficiente para:

⚠️ **LIMITADO** - Pode ser suficiente, mas precisa de configuração extra  
- Site estático simples
- Poucos deploys por mês
- Baixo tráfego

### ⚠️ Limitações:

- Sistema de créditos pode ser confuso
- Menos créditos que Vercel
- Precisa plugin adicional para Next.js completo

### 🎯 Recomendação:

Funciona, mas Vercel é mais simples e generosa para Next.js.

---

## 🟡 Railway - Free Plan (GRATUITO)

### ✅ O que está incluído:

- **Crédito Mensal**: $1 USD/mês
- **Projetos**: 1 projeto
- **RAM**: 256 MB por serviço
- **CPU**: 1 vCPU core
- **Domínios**: Suportados
- **SSL**: Automático

### 💡 É suficiente para:

❌ **NÃO RECOMENDADO** para este projeto  
- Crédito muito limitado ($1/mês)
- Site pode ficar offline quando crédito acabar
- Melhor para testes e experimentos

### ⚠️ Limitações:

- Crédito muito baixo ($1 = ~10-20 horas de uso)
- Site desliga quando crédito acaba
- Apenas 1 projeto

### 🎯 Recomendação:

Não recomendado para produção. Melhor para testes.

---

## 🟢 Render - Free Plan (GRATUITO)

### ✅ O que está incluído:

- **Horas de Serviço**: 750 horas/mês
- **Bandwidth**: 100 GB/mês
- **SSL**: Automático
- **Domínios**: Customizados suportados
- **Sleep após inatividade**: Sim (após 15 min)

### 💡 É suficiente para:

✅ **SIM** - Funciona bem  
- Site pequeno/médio
- Aceita que site "durma" após inatividade
- Bom para projetos pessoais

### ⚠️ Limitações:

- Site "dorme" após 15 minutos de inatividade
- Primeira requisição após dormir pode ser lenta (~30s)
- Não ideal para sites comerciais

### 🎯 Recomendação:

Funciona, mas o "sleep" pode ser problemático para site comercial.

---

## 🟢 Fly.io - Free Plan (GRATUITO)

### ✅ O que está incluído:

- **VMs Compartilhadas**: 3 VMs
- **RAM**: 256 MB por VM
- **Bandwidth**: 160 GB/mês
- **SSL**: Automático
- **Global**: Deploy em múltiplas regiões

### 💡 É suficiente para:

⚠️ **COMPLEXO** - Mais para apps distribuídos  
- Apps que precisam de múltiplas regiões
- Microserviços
- Não ideal para site simples

### ⚠️ Limitações:

- Mais complexo de configurar
- Overkill para site institucional simples

### 🎯 Recomendação:

Não recomendado para este projeto. Muito complexo para o que precisa.

---

## 🏆 Recomendação Final

### Para o projeto Lana Care:

**1º Lugar: Vercel** ⭐
- ✅ Mais generoso (100 deploys/dia, 100GB/mês)
- ✅ Criado pela equipe do Next.js
- ✅ Zero configuração
- ✅ Mais do que suficiente para site institucional
- ✅ Sem limitações que afetem o projeto

**2º Lugar: Netlify**
- ✅ Funciona bem
- ⚠️ Sistema de créditos pode ser limitante
- ⚠️ Precisa configuração extra para Next.js

**3º Lugar: Render**
- ✅ Funciona
- ❌ Site "dorme" após inatividade (não ideal para comercial)

**Não Recomendado:**
- ❌ Railway: Crédito muito baixo ($1/mês)
- ❌ Fly.io: Muito complexo para site simples

---

## 📝 Resumo por Uso

### Site Institucional Pequeno/Médio (como Lana Care)
**✅ Vercel** - Perfeito, mais do que suficiente

### Site com Alto Tráfego
**✅ Vercel** ou upgrade para plano pago

### Projeto Pessoal/Portfolio
**✅ Vercel** ou **Render** (se aceitar sleep)

### App Complexo com Múltiplas Regiões
**✅ Fly.io** ou **Railway** (com plano pago)

---

## 💡 Dica Importante

**Todos os planos gratuitos são suficientes para começar!**

Para o projeto Lana Care, **Vercel é a melhor escolha** porque:
1. Mais generoso em limites
2. Otimizado para Next.js
3. Zero configuração
4. Sem limitações que afetem o projeto
5. Fácil upgrade se precisar no futuro

---

## 🔄 Upgrade Quando Necessário

Você pode começar no plano gratuito e fazer upgrade apenas se:
- Exceder 100 deploys/dia (improvável)
- Exceder 100GB de bandwidth/mês (muito tráfego)
- Precisar de suporte prioritário
- Precisar de recursos avançados

Para um site institucional, o plano gratuito da Vercel deve ser suficiente por muito tempo! 🎉
