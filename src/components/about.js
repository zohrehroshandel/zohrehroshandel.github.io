import i18next from "../i18n/index.js";

export function About() {
  return `
    <section class="about-section fade-in">
      <div class="glass-card">
        <h2 class="section-title">✨ ${i18next.t("about_title")}</h2>
        <p class="about-description">${i18next.t("about_text")}</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-num">9</span>
            <span class="stat-label">${i18next.t("stats.months")}</span>
          </div>

          <div class="stat-item">
            <span class="stat-num">3+</span>
            <span class="stat-label">${i18next.t("stats.projects")}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

