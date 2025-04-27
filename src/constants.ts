import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconStackoverflow from "@/assets/icons/IconStackoverflow.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/mal90",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maliksalim/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/1305026/malik",
    linkTitle: `${SITE.title} on Stack Overflow`,
    icon: IconStackoverflow,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/madkmalik/",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconInstagram,
  }
] as const;

export const SHARE_LINKS = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
