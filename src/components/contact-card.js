import i18next from "../i18n/index.js";
import { icons } from "./contact-icons.js";
export function ContactCard(contact) {

  const title = contact.titleKey
    ? i18next.t(contact.titleKey)
    : contact.title;

  const action = i18next.t(contact.actionKey);

  return `
  <a class="contact-card" href="${contact.href}" target="_blank">

      <div class="contact-icon">
        ${icons[contact.icon]}
      </div>

      <div class="contact-info">
        <h3>${title}</h3>
        <p>${contact.value}</p>
      </div>

      <span class="contact-action">
        ${action}
        <span class="arrow">→</span>
      </span>

  </a>
  `;
}

