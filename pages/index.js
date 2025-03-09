import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
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
    if (constructionTitle) {
      const constructionIcon =
        constructionTitle.querySelector(".construction-icon");
      const textToType = "Página em construção..";

      // Remover o texto original
      constructionTitle.innerHTML = "";
      constructionTitle.appendChild(constructionIcon);

      let charIndex = 0;
      const textElement = document.createElement("span");
      constructionTitle.appendChild(textElement);

      const typeEffect = setInterval(() => {
        if (charIndex < textToType.length) {
          textElement.textContent += textToType[charIndex];
          charIndex++;
        } else {
          clearInterval(typeEffect);
        }
      }, 100);
    }
  }, []); // O array vazio garante que o efeito só é executado uma vez após a montagem do componente

  return (
    <div className="container">
      <Head>
        <title>Reis da Costa Dev - Em Construção</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <div className="logo">
          Reis da Costa Dev
          <span className="logo-icon">👑</span>
          <span className="logo-icon">🌊</span>
          <span className="logo-icon">💻</span>
        </div>
      </header>

      <div className="construction-banner">
        <div className="construction-title">
          <span className="construction-icon">🛠️</span>
          Página em construção..
        </div>
        <p>
          Estamos trabalhando no desenvolvimento do novo portfólio de Lucas Reis
          da Costa. Em breve, você poderá conhecer todos os projetos,
          habilidades e experiências profissionais neste espaço.
        </p>
      </div>

      <section className="profile">
        <img
          src="avatar.png"
          alt="Lucas Reis da Costa"
          className="profile-image"
        />
        <div className="profile-content">
          <h2>Lucas Reis da Costa</h2>
          <p>
            Engenheiro Eletricista com experiência em desenvolvimento de
            sistemas.
          </p>
          <p>...</p>
          <p>...</p>
        </div>
      </section>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="footer">
        © 2025 Reis da Costa Dev - Todos os direitos reservados
      </div>
    </div>
  );
}
