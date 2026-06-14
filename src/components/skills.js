import i18next from '../i18n/index.js'

export function Skills() {

  const skillGroups = [
   {
  title: i18next.t("skills.frontend"),
  items: [
    { name: "React", icon: "devicon-react-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" }
  ]
},
{
  title: i18next.t("skills.tools"),
  items: [
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Vite", icon: "devicon-vitejs-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" }
  ]
}

  ];

  return `
  <section class="skills-section fade-in">

    <div class="skills-header">
      <h2 class="section-title">✨ ${i18next.t('skills_title')}</h2>
    </div>

    ${skillGroups.map(group => `
      <div class="skills-group">

        <h3 class="skills-group-title">
          ${group.title}
        </h3>

        <div class="modern-skills-grid">

          ${group.items.map(skill => `
            <div class="skill-item-modern">

              <div class="skill-icon-box">
                <i class="${skill.icon} colored"></i>
              </div>

              <div class="skill-name">
                ${skill.name}
              </div>

            </div>
          `).join("")}

        </div>

      </div>
    `).join("")}

  </section>
  `
}


