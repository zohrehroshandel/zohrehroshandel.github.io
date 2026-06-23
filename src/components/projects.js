import i18next from "i18next";
import { basicProjects, hanbokImages } from "../types/project.js";

export function Projects() {
	return `
    <section class="projects-page fade-in">
    <h2 class="section-title">
  ${i18next.t("projects.title")}
</h2>

      <!-- Hanbok Section -->
      <div class="project-block glass-card">
        <div class="project-header">
       <h3>${i18next.t("projects.hanbok_title")}</h3>
<p>${i18next.t("projects.hanbok_desc")}</p>

        </div>
        <div class="swiper hanbokSwiper">
          <div class="swiper-wrapper">
            ${hanbokImages
							.map(
								(img) => `
              <div class="swiper-slide">
                <img src="${img}" alt="Hanbok project">
              </div>
            `,
							)
							.join("")}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- Other Projects -->
      ${basicProjects
				.map(
					(project) => `
        <div class="project-block glass-card">
          <div class="project-header">
         <h3>${i18next.t(project.titleKey)}</h3>
<p>${i18next.t(project.descKey)}</p>

          </div>
          <div class="swiper projectSwiper">
            <div class="swiper-wrapper">
              ${project.images
								.map(
									(img) => `
                <div class="swiper-slide">
              <img src="${img}" alt="project image">

                </div>
              `,
								)
								.join("")}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      `,
				)
				.join("")}
    </section>
  `;
}
