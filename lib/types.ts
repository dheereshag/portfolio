import { IconType } from "react-icons";

export interface Role {
  readonly company: string;
  readonly title: string;
  readonly logo: string;
  readonly start: string;
  readonly end: string;
  readonly website: string;
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

export interface Content {
  readonly HERO: {
    readonly TITLE: string;
    readonly DESCRIPTION: string;
  };
  readonly PROJECTS: {
    readonly TITLE: string;
    readonly DESCRIPTION: string;
  };
  readonly ABOUT: {
    readonly TITLE: string;
    readonly DESCRIPTIONS: readonly string[];
  };
}
