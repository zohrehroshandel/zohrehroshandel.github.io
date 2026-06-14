import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translations } from "./translations";

export function initI18n(callback) {
	i18next.use(LanguageDetector).init(
		{
			fallbackLng: "fa",
			resources: translations,
		},
		callback,
	);
}

export default i18next;
