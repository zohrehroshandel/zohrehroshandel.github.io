import i18next from "../i18n/index.js";
import { skillGroups } from "../types/skil-data.js";

export function Skills() {
  return `
    <section class="skills-section fade-in">
      <div class="skills-hero glass-card">
        <span class="skills-eyebrow">Technical Stack</span>
        <h2 class="section-title">✨ ${i18next.t("skills_title")}</h2>
        <p class="skills-intro">
          A practical frontend skill set focused on building responsive, modern, scalable and user-friendly web applications.
        </p>
      </div>

      <div class="skills-modern-grid">
        ${skillGroups
          .map(
            (group) => `
              <article class="skill-detail-card">
                <div class="skill-card-top">
                  <div class="skill-main-icon">
                    <i class="${group.icon} colored"></i>
                  </div>
                  <div>
                    <h3>${group.title}</h3>
                    <span>${group.items.length} topics</span>
                  </div>
                </div>

                <div class="skill-tags">
                  ${group.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}





