import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { FaLinkedinIn } from "react-icons/fa";

interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    name: "About me",
    path: "about",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Skills",
    path: "skills",
  },
];

interface SocialsLink {
  path: string;
  label: string;
  icon: IconType;
}

export const socialsLinks: SocialsLink[] = [
  {
    path: "https://www.linkedin.com/in/andrian-smetaniuk-303239277",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    path: "https://github.com/Andrian2701",
    label: "GitHub",
    icon: FiGithub,
  },
  {
    path: "https://t.me/andrian_2701",
    label: "Telegram",
    icon: FaTelegramPlane,
  },
];
