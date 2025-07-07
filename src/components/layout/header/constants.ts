interface NavItemInterface {
  name: string;
  path: string;
}

export const navItems: NavItemInterface[] = [
  {
    name: 'About me',
    path: 'about',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
];
