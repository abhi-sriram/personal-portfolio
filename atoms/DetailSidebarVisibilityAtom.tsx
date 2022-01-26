import { atom } from "recoil";

export const detailSidebarVisibilityAtom = atom({
  key: "detailSidebarVisibilityAtom",
  default: {
    selected: 1,
    visible: true,
  },
});
