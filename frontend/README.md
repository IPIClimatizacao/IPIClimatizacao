# 🌐 IPI Climatização - Site Portfolio

Site moderno e profissional para empresa de climatização e refrigeração, com design dark theme em azul e branco.

## ✨ Funcionalidades

- ✅ **Hero Section** com ícone animado girando
- ✅ **Seção de Serviços** (Instalação, Manutenção, Conserto)
- ✅ **Produtos** com 6 modelos de ar condicionado e imagens
- ✅ **Portfólio** com 8 fotos de trabalhos realizados
- ✅ **Simulador de Orçamento** em 3 passos
- ✅ **Integração WhatsApp** com mensagens formatadas
- ✅ **100% Frontend** - sem necessidade de backend
- ✅ **Responsivo** para mobile e desktop

## 🎨 Design

- **Cores**: Dark theme com azul profundo e ice blue
- **Animações**: Framer Motion para transições suaves
- **Ícones**: Lucide React (sem emojis de IA)
- **Fontes**: Space Grotesk e Inter via Google Fonts

## 📦 Tecnologias

- React 19
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- Lucide React Icons

## 🚀 Deploy no GitHub Pages

### Passo 1: Preparar o projeto

```bash
cd frontend
yarn build
```

### Passo 2: Instalar gh-pages

```bash
yarn add -D gh-pages
```

### Passo 3: Adicionar scripts no package.json

Adicione as seguintes linhas no seu `package.json`:

```json
{
  "homepage": "https://seu-usuario.github.io/seu-repositorio",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

### Passo 4: Deploy

```bash
yarn deploy
```

### Passo 5: Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** > **Pages**
3. Em **Source**, selecione a branch `gh-pages`
4. Clique em **Save**

Pronto! Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio`

## 📝 Personalização

### Trocar Imagens dos Produtos

Edite o arquivo `/src/components/Products.jsx` e substitua as URLs:

```javascript
image: 'SUA_URL_AQUI'
```

### Trocar Fotos do Portfólio

Edite o arquivo `/src/components/Portfolio.jsx` e substitua as URLs:

```javascript
image: 'SUA_URL_AQUI'
```

### Mudar Número do WhatsApp

Busque por `5511999999999` nos arquivos e substitua pelo seu número.

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn start

# Build para produção
yarn build
```

## 📱 Simulador de Orçamento

O simulador tem **3 passos**:

1. **Passo 1**: Seleção do tipo de serviço (botões)
2. **Passo 2**: Formulário completo com campos de texto
3. **Passo 3**: Resultado com valor estimado e WhatsApp

## 🖼️ Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/ (componentes shadcn)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Portfolio.jsx
│   │   ├── BudgetSimulator.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   └── index.css
└── package.json
```

---

**Desenvolvido para IPI Climatização** 🌬️❄️
