import i18next from "../i18n/index.js";

export function Hero() {
  return `
    <section class="hero-container fade-in">
      <div class="hero-content">
        <div class="hero-image-wrapper">
          <img src="/img/my-photo.png" alt="${i18next.t("name")}" class="profile-img">
          <div class="image-glow"></div>

          <div class="floating-icon icon-1">
            <i class="devicon-react-original colored"></i>
          </div>

          <div class="floating-icon icon-2">
            <i class="devicon-javascript-plain colored"></i>
          </div>

          <div class="floating-icon icon-3">
            <i class="devicon-typescript-plain colored"></i>
          </div>

          <div class="floating-icon icon-4">
            <i class="devicon-nextjs-original-wordmark"></i>
          </div>

          <div class="floating-icon icon-5">
            <i class="devicon-tailwindcss-plain colored"></i>
          </div>
        </div>

        <div class="hero-text-container">
          <h1 class="hero-name">${i18next.t("name")} <span class="sparkle">✨</span></h1>
          <h2 class="hero-role">${i18next.t("role")}</h2>

          <p class="hero-description">
            ${
              i18next.language.includes("fa")
                ? "توسعه‌دهنده فرانت‌اندم با علاقه به ساخت تجربه‌های کاربری زیبا و مدرن."
                : "Frontend developer with a passion for building beautiful and modern user experiences."
            }
          </p>
        </div>
      </div>
    </section>
  `;
}

