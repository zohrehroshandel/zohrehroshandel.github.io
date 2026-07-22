import i18next from "../i18n/index";
import { basicProjects, hanbokImages } from "../types/project";

function renderHanbokSection() {
  return `
    <section class="project-block glass-card">
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
                  <img src="${img}" class="project-img" alt="Hanbok project" />
                </div>
              `
            )
            .join("")}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  `;
}

export function Projects() {
  return `
    <div class="projects-page">
      <div class="projects-container">
        ${renderHanbokSection()}
        <div class="other-projects">
          ${basicProjects
            .map(
              (project) => `
                <section class="project-block glass-card">
                  <div class="project-header">
                    <h3>${i18next.t(project.titleKey)}</h3>
                    <p>${i18next.t(project.descKey)}</p>
                    ${
                      project.githubLink
                        ? `<a href="${project.githubLink}" target="_blank" rel="noreferrer" class="github-link">GitHub Repository ↗</a>`
                        : ""
                    }
                  </div>

                  <div class="swiper projectSwiper">
                    <div class="swiper-wrapper">
                      ${project.images
                        .map(
                          (img) => `
                            <div class="swiper-slide">
                              <img src="${img}" class="project-img" alt="project" />
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}




