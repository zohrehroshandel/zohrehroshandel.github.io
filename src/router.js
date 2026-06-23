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

const routes = {
	"/": Hero,
	"/about": About,
	"/skills": Skills,
	"/contact": Contact,
	"/projects": Projects,
};

export function router() {
	const path = window.location.pathname;
	return routes[path] || Hero;
}

function initProjectSwipers() {
	const hanbok = document.querySelector(".hanbokSwiper");

	if (hanbok && !hanbok.swiper) {
		new Swiper(hanbok, {
			modules: [Navigation, Pagination, Autoplay],
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			pagination: {
				el: hanbok.querySelector(".swiper-pagination"),
				clickable: true,
			},
		});
	}

	document.querySelectorAll(".projectSwiper").forEach((swiperEl) => {
		if (!swiperEl.swiper) {
			new Swiper(swiperEl, {
				modules: [Pagination],
				slidesPerView: 1,
				spaceBetween: 10,
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
			if (window.location.pathname === "/projects") {
				initProjectSwipers();
			}
		}, 50);
	}

	window.addEventListener("click", (e) => {
		const link = e.target.closest("[data-link]");
		if (!link) return;

		e.preventDefault();

		const href = link.getAttribute("href");

		window.history.pushState(null, "", href);

		handleRoute();
	});

	window.addEventListener("popstate", () => {
		handleRoute();
	});
}
window.addEventListener("initProjects", () => {
	initProjectSwipers();
});
