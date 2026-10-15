# 🎬 MovieCity - Landing Page

Landing page responsiva de um serviço de streaming fictício desenvolvida como exercício prático de componentização com React, estruturação de layout com CSS puro e adaptação para diferentes tamanhos de tela.

---

## 📸 Resultado Final

![Demonstração do Projeto](./Landing_Page.png)

---

## 📌 Sobre o Projeto

A aplicação é uma landing page dividida em duas áreas principais:
- **Header (Cabeçalho):** Contém a logo "MovieCity", links de navegação (*Filmes, Categoria, Sobre, Contato*) e botão de *Login*. Em telas menores, a navegação é ocultada e ativada por um menu hambúrguer.
- **Main (Conteúdo Principal):** Possui uma coluna de chamada (*"Seus Filmes"*) com botão de ação e uma grelha contendo 6 cards de filmes (*Afterlife, Transformers, Mowgli, Shift, Round 6 e Harry Potter*).

---

## 🚀 Tecnologias Utilizadas

- **React 19** — Biblioteca de UI baseada em componentes
- **Vite 7** — Servidor de desenvolvimento rápido e bundler de produção
- **JavaScript (ESM)** — Sistema de módulos nativo
- **CSS3 (Puro)** — Estilização global, Flexbox, CSS Grid e Media Queries para responsividade

---

## 📁 Estrutura do Projeto

```text
01_landingpage/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── afterlife.jpg
│   │   ├── harrypotter.jpg
│   │   ├── mowgli.jpg
│   │   ├── preview.png
│   │   ├── shift.png
│   │   ├── squidgame.webp
│   │   └── transformers.jpg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md