export interface INavItem {
  id: number;
  name: string;
  link: string;
}

export interface IProject {
  id: number;
  title: string;
  duration: string;
  role: string;
  description: string;
  technologies: string[];
  img: string;
  link: string;
}

export interface IReferral {
  id: number;
  name: string;
  position: string;
  content: string;
  linkedin: string;
}
