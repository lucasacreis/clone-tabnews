// Verifica se o código está sendo executado no navegador
if (typeof window !== "undefined") {
  // Executa o código apenas após o carregamento completo do DOM
  window.addEventListener("DOMContentLoaded", function () {
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
  });
}
