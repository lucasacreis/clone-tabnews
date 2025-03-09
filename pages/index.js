import { useEffect } from "react";
import Head from "next/head";
import { initAnimations } from "../utils/animations";

export default function Home() {
  useEffect(() => {
    // Inicializa as animações após o componente ser montado
    initAnimations();
  }, []);

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
          src="/avatar.png"
          alt="Lucas Reis da Costa"
          className="profile-image"
        />

        <div className="profile-content">
          <h2>Lucas Reis da Costa</h2>
          <p>
            Engenheiro e Filósofo em busca de soluções através da criatividade.
          </p>
          <p>
            Com mais de 5 anos de experiência no mercado de tecnologia, tenho
            contribuído para projetos que impactam positivamente a experiência
            dos usuários e trazem resultados significativos para as empresas.
          </p>
          <p>
            Formado em Engenharia Eétrica em processo de especialização em
            Desenvolvimento Web e apaixonado por novas tecnologias.
          </p>
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
