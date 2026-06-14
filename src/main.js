import { Header } from "./components/header.js";
import i18next, { initI18n } from "./i18n/index.js";
import { initRouter, router } from "./router.js";
import "./styles/style.css";
import { loadTheme, toggleTheme } from "./utils/theme.js";


function render() {
	const lang = i18next.language?.includes("fa") ? "fa" : "en";

	document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
	document.documentElement.lang = lang;

	const ActivePage = router();

	document.querySelector("#app").innerHTML = `
    ${Header()}
    <main id="main-content">
      ${ActivePage()}
    </main>
  `;

	document.getElementById("langBtn")?.addEventListener("click", changeLanguage);
	document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);

	loadTheme();
}

function changeLanguage() {
	const nextLang = i18next.language?.includes("fa") ? "en" : "fa";
	i18next.changeLanguage(nextLang, render);
}

initRouter(render);
initI18n(render);
