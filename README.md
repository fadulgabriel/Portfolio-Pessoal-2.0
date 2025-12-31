# Portfólio Interativo - Estatística e Ciência de Dados

Portfólio pessoal interativo desenvolvido em React, focado em apresentar experiência profissional, habilidades técnicas e projetos de análise de dados.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Ícones para a interface

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

```
src/
├── components/       # Componentes React
├── data/            # Dados estruturados (skills, experience, projects)
├── styles/          # Estilos globais
└── App.jsx          # Componente principal
```

## ✏️ Personalização

### Adicionar Conteúdo

1. **Habilidades**: Edite `src/data/skills.js`
2. **Experiência**: Edite `src/data/experience.js`
3. **Projetos**: Edite `src/data/projects.js`

### Links de Contato

Edite os links em `src/components/Contact.jsx` na seção `socialLinks`.

### Cores e Estilo

As variáveis CSS estão definidas em `src/styles/global.css`. Modifique as variáveis `:root` para personalizar as cores.

## 📝 Seções

- **Hero**: Introdução e call-to-action
- **Sobre**: Informações pessoais e trajetória
- **Habilidades**: Competências técnicas organizadas por categoria
- **Experiência**: Timeline de experiências profissionais
- **Projetos**: Grid de projetos com filtros
- **Contato**: Links para redes sociais

## 🎨 Recursos

- Design responsivo (mobile-first)
- Animações suaves com Framer Motion
- Navegação com scroll suave
- Menu mobile adaptativo
- Filtros de projetos
- Barras de progresso animadas

## 📄 Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🌐 Deploy

O projeto pode ser facilmente deployado em:
- **Vercel**: Conecte seu repositório GitHub
- **Netlify**: Arraste a pasta `dist` após o build
- **GitHub Pages**: Configure o GitHub Actions

## 📧 Contato

Personalize as informações de contato em `src/components/Contact.jsx`.

