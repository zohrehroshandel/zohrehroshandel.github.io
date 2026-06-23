const path = "/project-images";

export const basicProjects = [
  {
    titleKey: "projects.htmlcss_title",
    descKey: "projects.htmlcss_desc",
    images: [`${path}/html-css.png`],
  },
  {
    titleKey: "projects.flowershop_title",
    descKey: "projects.flowershop_desc",
    images: [
      `${path}/flowershop1.png`,
      `${path}/flowershop2.png`,
      `${path}/flowershop3.png`,
      `${path}/flowershop4.png`
    ],
  },
  {
    titleKey: "projects.quiz_title",
    descKey: "projects.quiz_desc",
    images: [
      `${path}/quiz-app1.png`,
      `${path}/quiz-app2.png`,
      `${path}/quiz-app3.png`,
      `${path}/quiz-app4.png`
    ],
  },
  {
    titleKey: "projects.starbucks_title",
    descKey: "projects.starbucks_desc",
    images: [
      `${path}/starbox.png`,
      `${path}/starbox1.png`
    ],
  }
];

export const hanbokImages =
  Array.from({ length: 16 }, (_, i) => `${path}/hanbok${i + 1}.png`);


