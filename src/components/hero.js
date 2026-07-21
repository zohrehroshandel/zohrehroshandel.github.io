import resumeFile from "../assets/files/resume.pdf";
import profileImage from "../assets/images/my-photo.png";
import i18next from "../i18n/index.js";

export function Hero() {
	const isFa = i18next.language.includes("fa");
	const downloadName = isFa ? "رزومه زهره روشندل.pdf" : "Zohreh_Roshandel_Resume.pdf";

	return `
    <section class="hero-container fade-in">
      <div class="hero-content">
        <div class="hero-image-wrapper">
          <img 
            src="${profileImage}" 
            alt="${i18next.t("name")}" 
            class="profile-img"
          >
          <div class="image-glow"></div>

          <div class="floating-icon icon-1">
            <i class="devicon-react-original colored"></i>
          </div>

          <div class="floating-icon icon-2">
            <i class="devicon-javascript-plain colored"></i>
          </div>

          <div class="floating-icon icon-3">
            <i class="devicon-typescript-plain colored"></i>
          </div>

          <div class="floating-icon icon-4">
            <i class="devicon-nextjs-original-wordmark"></i>
          </div>

          <div class="floating-icon icon-5">
            <i class="devicon-tailwindcss-plain colored"></i>
          </div>
        </div>

        <div class="hero-text-container">
          <h1 class="hero-name">${i18next.t("name")} <span class="sparkle">✨</span></h1>
          <h2 class="hero-role">${i18next.t("role")}</h2>

          <p class="hero-description">
            ${
							isFa
								? "توسعه‌دهنده فرانت‌اندم با علاقه به ساخت تجربه‌های کاربری زیبا و مدرن."
								: "Frontend developer with a passion for building beautiful and modern user experiences."
						}
          </p>
          <a href="${resumeFile}" download="${downloadName}" class="btn btn-primary">
            ${isFa ? "دانلود رزومه" : "Download Resume"}
          </a>
        </div>
      </div>
    </section>
  `;
}


