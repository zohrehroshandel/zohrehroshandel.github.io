import i18next from "../i18n/index.js";

export function Header() {

    const hash = window.location.hash.replace("#", "") || "/";

    return `
    <header class="header">
      <nav class="nav">
        <a href="/" data-link class="nav-link ${hash === "/" ? "active" : ""}">
          ${i18next.t("nav.home")}
        </a>

        <a href="/about" data-link class="nav-link ${hash === "/about" ? "active" : ""}">
          ${i18next.t("nav.about")}
        </a>

        <a href="/skills" data-link class="nav-link ${hash === "/skills" ? "active" : ""}">
          ${i18next.t("nav.skills")}
        </a>
        <a href="/contact" data-link class="nav-link ${hash === "/contact" ? "active" : ""}">
          ${i18next.t("nav.contact")}
        </a>
        <a href="/projects" data-link class="nav-link ${hash === "/projects" ? "active" : ""}">
          ${i18next.t("nav.projects")}
        </a>
      </nav>

      <div class="header-actions">
        <button class="btn lang-btn" id="langBtn">
          ${i18next.t("toggle_lang")}
        </button>

        <button class="btn theme-btn" id="themeBtn" aria-label="Toggle Theme">
          🌓
        </button>
      </div>
    </header>
  `;
}

