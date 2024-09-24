# Lazy Loading com IntersectionObserver

Este projeto é um exemplo prático de como implementar **lazy loading** em imagens utilizando o objeto `IntersectionObserver`. O objetivo é otimizar o carregamento de imagens em uma página, carregando-as apenas quando entram na área visível do usuário, melhorando a performance e experiência do usuário.

### 📚 Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilos e layout.
- **JavaScript**: Lógica de interatividade e implementação do `IntersectionObserver`.

### 🔍 Funcionalidades

- **Lazy Loading**: As imagens na página são carregadas de forma eficiente apenas quando estão prestes a aparecer no viewport.
- **IntersectionObserver**: Utilizado para detectar quando as imagens entram na área visível da janela do navegador.

### 🚀 Como Funciona?

1. Quando a página é carregada, as imagens não são carregadas imediatamente, exceto aquelas que já estão visíveis na tela.
2. À medida que o usuário faz o scroll pela página, o `IntersectionObserver` detecta quando uma imagem está prestes a entrar na área visível (viewport).
3. Nesse momento, o navegador carrega a imagem, exibindo-a ao usuário.

### 📦 Como Rodar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

### 🖥️ Acesse o Projeto

O projeto está hospedado no Vercel e pode ser acessado através do seguinte link: [Lazy Loading com IntersectionObserver](https://lazy-loading-inky.vercel.app/)
