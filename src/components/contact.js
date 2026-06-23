import i18next from "../i18n/index.js";
import { contacts } from "../types/contact-data";
import { ContactCard } from "./contact-card.js";

export function Contact() {
  return `
  <section class="contact-section fade-in">

    <div class="glass-card">

      <h2 class="section-title">
        📬 ${i18next.t("contact_title")}
      </h2>

      <p class="contact-desc">
        ${i18next.t("contact_text")}
      </p>

      <div class="contact-grid">

        ${contacts.map(ContactCard).join("")}

      </div>

    </div>

  </section>
  `;
}


