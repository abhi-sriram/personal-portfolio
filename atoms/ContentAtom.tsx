import { atom } from "recoil";
import AboutMe from "../components/content/AboutMe";

export const contentAtom = atom({
  key: "contentAtom",
  default: {
    Content: <AboutMe />,
    name: "About ME!",
    mainName: "Home",
  },
});
