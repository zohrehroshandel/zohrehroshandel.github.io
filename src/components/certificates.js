import { certs } from "../types/certs-data.js";

export function Certificates() {
  return `
    <section class="certs-section ">
      <div class="skills-hero glass-card">
        <span class="skills-eyebrow">Credentials</span>
        <h2 class="section-title">📜 Certificates</h2>
        <p class="skills-intro">Scan or click to verify and view the certificate.</p>
      </div>

      <div class="certs-grid">
        ${certs
          .map(
            (c) => `
              <article class="cert-card glass-card">
                <a class="cert-qr-link" href="${c.link}" target="_blank" rel="noopener noreferrer" aria-label="Open certificate link: ${c.title}">
                  <div class="cert-qr-frame">
                    <img class="cert-qr" src="${c.qrImage}" alt="QR code for ${c.title}" loading="lazy" />
                  </div>
                </a>

                <div class="cert-content">
                  <div class="cert-icon">${c.icon ?? "🎓"}</div>
                  <h3>${c.title}</h3>
                  <p>${c.issuer}</p>
                  <p class="cert-meta">${c.date}</p>

                  <div class="cert-actions">
                    <a class="btn btn-primary cert-btn" href="${c.link}" target="_blank" rel="noopener noreferrer">Open verification link</a>
                    ${
                      c.fullImage
                        ? `<a class="btn btn-outline cert-btn" href="${c.fullImage}" target="_blank" rel="noopener noreferrer">View certificate image</a>`
                        : ""
                    }
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

