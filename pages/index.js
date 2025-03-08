<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reis da Costa Dev - Em Construção</title>
    <style>
      :root {
        --tiffany: #0abab5;
        --turquoise: #40e0d0;
        --light-turquoise: #e0f7fa;
        --dark-turquoise: #008b8b;
        --background: #fafafa;
        --text: #333333;
        --secondary-text: #666666;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:
          "Inter",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          "Open Sans",
          "Helvetica Neue",
          sans-serif;
      }

      body {
        background-color: var(--background);
        color: var(--text);
        line-height: 1.6;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
      }

      .container {
        max-width: 800px;
        width: 100%;
      }

      header {
        margin-bottom: 3rem;
        padding-top: 2rem;
      }

      .logo {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .logo-icon {
        color: var(--tiffany);
        font-size: 2rem;
      }

      .construction-banner {
        background-color: var(--light-turquoise);
        border-radius: 8px;
        padding: 2rem;
        margin-bottom: 3rem;
        border-left: 5px solid var(--tiffany);
      }

      .construction-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .construction-icon {
        color: var(--tiffany);
      }

      .profile {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
        margin-top: 2rem;
      }

      .profile-image {
        width: 160px;
        height: 160px;
        border-radius: 8px;
        object-fit: cover;
        border: 3px solid var(--tiffany);
      }

      .profile-content h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: var(--dark-turquoise);
      }

      .profile-content p {
        margin-bottom: 1rem;
        color: var(--secondary-text);
      }

      .progress-bar {
        height: 8px;
        background-color: var(--light-turquoise);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 3rem;
      }

      .progress-fill {
        height: 100%;
        width: 0%;
        background-color: var(--tiffany);
        border-radius: 4px;
        animation: progressAnimation 2s ease-in-out forwards;
      }

      @keyframes progressAnimation {
        from {
          width: 0%;
        }
        to {
          width: 30%;
        }
      }

      .footer {
        margin-top: 3rem;
        text-align: center;
        color: var(--secondary-text);
        font-size: 0.9rem;
      }

      @media (max-width: 768px) {
        .profile {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .profile-image {
          margin-bottom: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <div class="logo">
          Reis da Costa Dev
          <span class="logo-icon">👑</span>
          <span class="logo-icon">🌊</span>
          <span class="logo-icon">💻</span>
        </div>
      </header>

      <div class="construction-banner">
        <div class="construction-title">
          <span class="construction-icon">🛠️</span>
          Página em construção..
        </div>
        <p>
          Estamos trabalhando no desenvolvimento do novo portfólio de Lucas Reis
          da Costa. Em breve, você poderá conhecer todos os projetos,
          habilidades e experiências profissionais neste espaço.
        </p>
      </div>

      <section class="profile">
        <img
          src="/api/placeholder/400/400"
          alt="Lucas Reis da Costa"
          class="profile-image"
        />
        <div class="profile-content">
          <h2>Lucas Reis da Costa</h2>
          <p>
            Engenheiro Eletricista (UFRN) com experiência em sistemas embarcados
            com Arduino, C++ e Python. Atualmente se especializando em
            tecnologias web.
          </p>
          <p>...</p>
          <p>...</p>
        </div>
      </section>

      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>

      <div class="footer">
        © 2025 Reis da Costa Dev - Todos os direitos reservados
      </div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        // Animação dos ícones
        const logoIcons = document.querySelectorAll(".logo-icon");

        logoIcons.forEach((icon, index) => {
          setTimeout(() => {
            icon.style.transform = "scale(1.2)";
            setTimeout(() => {
              icon.style.transform = "scale(1)";
            }, 300);
          }, index * 300);
        });

        // Texto de construção com efeito de digitação
        const constructionTitle = document.querySelector(".construction-title");
        const text = constructionTitle.innerText;
        constructionTitle.innerHTML =
          '<span class="construction-icon">🛠️</span>';

        let charIndex = 0;
        const textElement = document.createElement("span");
        constructionTitle.appendChild(textElement);

        const typeEffect = setInterval(() => {
          if (charIndex < "Página em construção..".length) {
            textElement.textContent += "Página em construção.."[charIndex];
            charIndex++;
          } else {
            clearInterval(typeEffect);
          }
        }, 100);
      });
    </script>
  </body>
</html>
