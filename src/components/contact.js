import i18next from "../i18n/index.js";

export function Contact() {
  return `
    <section class="contact-section fade-in">
      <div class="glass-card">

        <h2 class="section-title">📬 ${i18next.t("contact_title")}</h2>
        <p class="contact-desc">${i18next.t("contact_text")}</p>

        <div class="contact-grid">

          <a class="contact-card" href="mailto:ziziroshani@gmail.com">
            <div class="contact-icon">📧</div>
            <h3>Email</h3>
            <p>ziziroshani@gmail.com</p>
            <span class="contact-action">${i18next.t("send_email")}</span>
          </a>

          <a 
            class="contact-card" 
            href="https://www.linkedin.com/in/zohreh-roshandel-b99a37304"
            target="_blank"
          >
            <div class="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Zohreh Roshandel</p>
            <span class="contact-action">${i18next.t("view_linkedin")}</span>
          </a>

          <a 
            class="contact-card" 
            href="https://github.com/zohrehroshandel"
            target="_blank"
          >
            <div class="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>github.com/zohrehroshandel</p>
            <span class="contact-action">${i18next.t("view_github")}</span>
          </a>

          <a class="contact-card" href="tel:09190992648">
            <div class="contact-icon">📱</div>
            <h3>${i18next.t("phone")}</h3>
            <p>09190992648</p>
            <span class="contact-action">${i18next.t("call_me")}</span>
          </a>

        </div>

      </div>
    </section>
  `;
}


