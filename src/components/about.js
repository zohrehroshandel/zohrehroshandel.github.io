import i18next from "../i18n/index.js";

export function About() {
  return `
    <section class="about-section fade-in">
      <details class="about-accordion glass-card" open>
        <summary class="about-summary">
          <div>
            <span class="about-eyebrow">${i18next.t("about_badge")}</span>
            <h2 class="section-title">✨ ${i18next.t("about_title")}</h2>
          </div>
          <span class="about-toggle" aria-hidden="true"></span>
        </summary>

        <div class="about-content">
          <p class="about-description">${i18next.t("about_text")}</p>

          <div class="about-modern-grid">
            <article class="about-detail-card">
              <h3>${i18next.t("about_cards.current_title")}</h3>
              <p>${i18next.t("about_cards.current_text")}</p>
            </article>

            <article class="about-detail-card">
              <h3>${i18next.t("about_cards.future_title")}</h3>
              <p>${i18next.t("about_cards.future_text")}</p>
            </article>

            <article class="about-detail-card">
              <h3>${i18next.t("about_cards.education_title")}</h3>
              <p>${i18next.t("about_cards.education_text")}</p>
            </article>
          </div>

          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-num">${i18next.t("stats.learning_duration_num")}</span>
              <span class="stat-label">${i18next.t("stats.learning_duration_text")}</span>
            </div>

            <div class="stat-item">
              <span class="stat-num">${i18next.t("stats.projects_portfolio_num")}</span>
              <span class="stat-label">${i18next.t("stats.projects_portfolio_text")}</span>
            </div>
          </div>
        </div>
      </details>
    </section>
  `;
}



