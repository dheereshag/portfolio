import { IconType } from "react-icons";

export type Role = {
  company: string;
  title: string;
  logo: string;
  start: string;
  end: string;
};

export type Social = {
  href: string;
  icon: IconType;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  logo: string;
};
