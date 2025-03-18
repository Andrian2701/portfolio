interface SkillItem {
  img: string;
  text: string;
}

interface SkillCategory {
  title: string;
  data: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    data: [
      { img: "/assets/skills/js.png", text: "JavaScript" },
      { img: "/assets/skills/ts.svg", text: "TypeScript" },
      { img: "/assets/skills/css.svg", text: "CSS" },
      { img: "/assets/skills/html.webp", text: "HTML" },
    ],
  },
  {
    title: "Frameworks",
    data: [
      { img: "/assets/skills/next.svg", text: "Next" },
      { img: "/assets/skills/angular.png", text: "Angular" },
    ],
  },
  {
    title: "Libraries",
    data: [
      { img: "/assets/skills/react.webp", text: "React" },
      { img: "/assets/skills/redux.svg", text: "Redux" },
      { img: "/assets/skills/tanstack.png", text: "React Query" },
      { img: "/assets/skills/zustand.jpeg", text: "Zustand" },
      { img: "/assets/skills/rx.svg", text: "RxJS" },
    ],
  },
  {
    title: "UI Libraries",
    data: [
      { img: "/assets/skills/tailwind.png", text: "Tailwind" },
      { img: "/assets/skills/mui.png", text: "Material UI" },
      { img: "/assets/skills/shadcn.png", text: "Shadcn" },
      { img: "/assets/skills/scss.png", text: "SCSS" },
    ],
  },
  {
    title: "Tools",
    data: [
      { img: "/assets/skills/vs.png", text: "VS Code" },
      { img: "/assets/skills/git.webp", text: "Git" },
      { img: "/assets/skills/github.png", text: "GitHub" },
      { img: "/assets/skills/docker.webp", text: "Docker" },
      { img: "/assets/skills/docker.webp", text: "Docker compose" },
      { img: "/assets/skills/firebase.png", text: "Firebase" },
    ],
  },
];
