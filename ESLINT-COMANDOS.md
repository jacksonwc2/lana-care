# 🔧 Comandos ESLint - Guia Rápido

Comandos úteis para configurar e usar o ESLint no projeto.

## 📋 Comandos Disponíveis

### 1. Executar Lint Manualmente

```bash
# Verificar erros em todos os arquivos
yarn lint

# Ou com npm
npm run lint
```

### 2. Corrigir Erros Automaticamente

```bash
# Corrigir automaticamente problemas que podem ser corrigidos
yarn lint --fix

# Ou com npm
npm run lint -- --fix
```

### 3. Verificar Arquivo Específico

```bash
# Verificar apenas um arquivo
yarn lint components/ShareButton.tsx

# Verificar uma pasta específica
yarn lint components/
```

### 4. Ignorar Regras Específicas (Temporário)

Se precisar ignorar uma regra específica em uma linha:

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = someValue
```

Ou para um bloco:

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
const data: any = someValue
const other: any = anotherValue
/* eslint-enable @typescript-eslint/no-explicit-any */
```

## 🔧 Configuração

### Arquivo `.eslintrc.json`

O projeto já está configurado com:

```json
{
  "extends": "next/core-web-vitals"
}
```

Isso inclui:
- ✅ Regras do Next.js
- ✅ Regras do React
- ✅ Regras de performance (Core Web Vitals)

### Adicionar Mais Regras (Opcional)

Se quiser adicionar mais regras, edite `.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // Suas regras customizadas aqui
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

## 🚨 Resolver Problemas Comuns

### Problema: ESLint não está instalado

```bash
# Instalar ESLint e configuração do Next.js
yarn add --dev eslint eslint-config-next

# Ou com npm
npm install --save-dev eslint eslint-config-next
```

### Problema: Versão incompatível

```bash
# Verificar versão do Node.js (precisa >= 18.17.0)
node --version

# Se necessário, atualizar Node.js
# Use nvm se tiver instalado:
nvm install 18.17.0
nvm use 18.17.0
```

### Problema: Erros durante o build

Se quiser ignorar erros do ESLint durante o build (não recomendado):

Edite `next.config.js`:

```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ Não recomendado
  },
}
```

## 📝 Comandos Úteis Adicionais

### Verificar apenas TypeScript (sem ESLint)

```bash
# Verificar tipos TypeScript
yarn tsc --noEmit

# Ou adicionar ao package.json:
# "type-check": "tsc --noEmit"
```

### Formatar código automaticamente

Se quiser formatar código automaticamente, considere adicionar Prettier:

```bash
yarn add --dev prettier eslint-config-prettier
```

Crie `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## ✅ Checklist

- [ ] ESLint instalado: `yarn add --dev eslint eslint-config-next`
- [ ] Node.js >= 18.17.0
- [ ] Arquivo `.eslintrc.json` configurado
- [ ] Comando `yarn lint` funciona
- [ ] Build passa sem erros: `yarn build`

## 🎯 Comando Rápido para Corrigir Tudo

```bash
# 1. Instalar dependências
yarn install

# 2. Tentar corrigir automaticamente
yarn lint --fix

# 3. Verificar build
yarn build
```

---

**Dica**: O Next.js já vem com ESLint configurado. Na maioria dos casos, você só precisa executar `yarn lint` para verificar problemas.
