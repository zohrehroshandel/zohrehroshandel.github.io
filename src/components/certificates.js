import i18next from "../i18n/index.js";
import { certs } from "../types/certs-data.js";

export function Certificates() {
  return `
    <section class="certs-section">
      <div class="skills-hero glass-card">
        <span class="skills-eyebrow">${i18next.t("certs.section_eyebrow")}</span>
        <h2 class="section-title">${i18next.t("certs.section_title")}</h2>
        <p class="skills-intro">${i18next.t("certs.section_intro")}</p>
      </div>

      <div class="certs-grid">
        ${certs.map(c => `
          <article class="cert-card glass-card">
            <a class="cert-qr-link" href="${c.link}" target="_blank" rel="noopener noreferrer">
              <div class="cert-qr-frame">
                <img class="cert-qr" src="${c.qrImage}" alt="QR" loading="lazy" />
              </div>
            </a>
            <div class="cert-content">
              <h3>${i18next.t(`certs.items.${c.id}.title`)}</h3>
              <p>${i18next.t(`certs.items.${c.id}.issuer`)}</p>
              <div class="cert-actions">
                <a class="btn btn-primary cert-btn" href="${c.link}" target="_blank">${i18next.t("certs.verify_link")}</a>
                ${c.fullImage ? `<a class="btn btn-outline cert-btn" href="${c.fullImage}" target="_blank">${i18next.t("certs.view_image")}</a>` : ""}
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}


