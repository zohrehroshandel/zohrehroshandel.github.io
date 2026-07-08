import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { About } from "./components/about.js";
import { Contact } from "./components/contact.js";
import { Hero } from "./components/hero.js";
import { Projects } from "./components/projects.js";
import { Skills } from "./components/skills.js";
import { Certificates } from "./components/certificates.js";

const routes = {
  "/": Hero,
  "/about": About,
  "/skills": Skills,
  "/certificates": Certificates,
  "/contact": Contact,
  "/projects": Projects,
};

export function router() {
	const hash = window.location.hash.slice(1) || "/";
	return routes[hash] || Hero;
}

function initProjectSwipers() {
	const swiperConfig = {
		modules: [Navigation, Pagination, Autoplay],
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},
	};

	const hanbok = document.querySelector(".hanbokSwiper");
	if (hanbok && !hanbok.swiper) {
		new Swiper(hanbok, swiperConfig);
	}
	document.querySelectorAll(".projectSwiper").forEach((swiperEl) => {
		if (!swiperEl.swiper) {
			new Swiper(swiperEl, {
				...swiperConfig,
				pagination: {
					el: swiperEl.querySelector(".swiper-pagination"),
					clickable: true,
				},
			});
		}
	});
}

export function initRouter(render) {
	function handleRoute() {
		render();

		setTimeout(() => {
			const hash = window.location.hash.slice(1) || "/";
			if (hash === "/projects") {
				initProjectSwipers();
			}
		}, 50);
	}

	window.addEventListener("click", (e) => {
		const link = e.target.closest("[data-link]");
		if (!link) return;

		e.preventDefault();

		const href = link.getAttribute("href");

		window.location.hash = href;
	});

	window.addEventListener("hashchange", handleRoute);
	window.addEventListener("DOMContentLoaded", handleRoute);
}

window.addEventListener("initProjects", () => {
	initProjectSwipers();
});


