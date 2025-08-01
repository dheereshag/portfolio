import { IconType } from "react-icons";

export interface Role {
  readonly company: string;
  readonly title: string;
  readonly logo: string;
  readonly start: string;
  readonly end: string;
}

export interface Social {
  readonly href: string;
  readonly icon: IconType;
  readonly label: string;
}

export interface ProjectLink {
  readonly href: string;
  readonly label: string;
}

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly link: ProjectLink;
  readonly logo: string;
}