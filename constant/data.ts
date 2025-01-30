
interface MenuIcon {
  icon: string;
  name: string;
  link: string;
}

// Menu Icons Array
export const menuIcons: MenuIcon[] = [
  { icon: "solar:home-outline", name: "Home", link: "/" },
  { icon: "iconamoon:profile-duotone", name: "About Us", link: "/about" },
  { icon: "dashicons:portfolio", name: "Portfolio", link: "/portfolio" },
  { icon: "mdi:contact-outline", name: "Contact", link: "/Contact" },
  { icon: "mdi:blog", name: "Blog", link: "/Blog" },
];

import Purple from "@/public/assets/img/colors/purple.webp";
import blueviolet from "@/public/assets/img/colors/blueviolet.webp";
import Yellowgreen from "@/public/assets/img/colors/yellowgreen.webp";
import Goldenrod from "@/public/assets/img/colors/goldenrod.webp";
import Green from "@/public/assets/img/colors/green.webp";
import Orange from "@/public/assets/img/colors/orange.webp";
import Magenta from "@/public/assets/img/colors/magenta.webp";
import Red from "@/public/assets/img/colors/red.webp";
import Yellow from "@/public/assets/img/colors/yellow.webp";
import Blue from "@/public/assets/img/colors/blue.webp";
import { StaticImageData } from "next/image";

interface colorIcons {
  color: string;
  icon: StaticImageData;
  isColor: boolean;
}

export const colors: colorIcons[] = [
  { color: "#F1B317", icon: Yellow, isColor: true },
  { color: "#6957AF", icon: Purple, isColor: false },
  { color: "#4169E1", icon: Blue, isColor: false },
  { color: "#8A2BE2", icon: blueviolet, isColor: false },
  { color: "#E96091", icon: Magenta, isColor: false },
  { color: "#9ACD32", icon: Yellowgreen, isColor: false },
  { color: "#DAA520", icon: Goldenrod, isColor: false },
  { color: "#72B626", icon: Green, isColor: false },
  { color: "#E7592A", icon: Orange, isColor: false },
  { color: "#E62E2D", icon: Red, isColor: false },
];
