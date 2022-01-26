import {
  DocumentDuplicateIcon,
  CodeIcon,
  LightningBoltIcon,
  AcademicCapIcon,
  CogIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";

import { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { iconSidebarVisibilityAtom } from "../atoms/IconSidebarVisibilityAtom";
import { iconSidebarSelectedAtom } from "../atoms/IconSidebarSelectedAtom";
import { detailSidebarVisibilityAtom } from "../atoms/DetailSidebarVisibilityAtom";
import { themeAtom } from "../atoms/ThemeAtom";
import { darkTheme, lightTheme } from "../components/Themes";

function IconSidebar() {
  const [iconState, setIconState] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const iconSidebarVisibilityValue = useRecoilValue(iconSidebarVisibilityAtom);
  const [iconSelected, setIconSelected] = useRecoilState(
    iconSidebarSelectedAtom
  );

  const [detailsSidebarVisibility, setDetailsSidebarVisibility] =
    useRecoilState(detailSidebarVisibilityAtom);
  const themeValue = useRecoilValue(themeAtom);

  const stateHandler = (num: number) => {
    const stateChange = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    };

    setIconSelected(num);

    switch (num) {
      case 1:
        stateChange[1] = true;
        if (iconState[1]) {
          if (
            detailsSidebarVisibility.selected == 1 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 1, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 1, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 1, visible: false });
        }
        break;
      case 2:
        stateChange[2] = true;
        if (iconState[2]) {
          if (
            detailsSidebarVisibility.selected == 2 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 2, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 2, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 2, visible: false });
        }
        break;
      case 3:
        stateChange[3] = true;
        if (iconState[3]) {
          if (
            detailsSidebarVisibility.selected == 3 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 3, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 3, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 3, visible: false });
        }
        break;
      case 4:
        stateChange[4] = true;
        if (iconState[4]) {
          if (
            detailsSidebarVisibility.selected == 4 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 4, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 4, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 4, visible: false });
        }
        break;
      case 5:
        stateChange[5] = true;
        if (iconState[5]) {
          if (
            detailsSidebarVisibility.selected == 5 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 5, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 5, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 5, visible: false });
        }
        break;
      case 6:
        stateChange[6] = true;
        if (iconState[6]) {
          if (
            detailsSidebarVisibility.selected == 6 &&
            detailsSidebarVisibility.visible
          ) {
            setDetailsSidebarVisibility({ selected: 6, visible: false });
          } else {
            setDetailsSidebarVisibility({ selected: 6, visible: true });
          }
        } else {
          setDetailsSidebarVisibility({ selected: 6, visible: false });
        }
        break;
      default:
        break;
    }
    setIconState(stateChange);
  };

  return (
    <div
      className={`sticky top-9 z-50 ${
        themeValue.darkTheme ? darkTheme.iconSidebar : lightTheme.iconSidebar
      } flex-col w-12 border-r border-custom-text-gray ${
        iconSidebarVisibilityValue
          ? "flex sm:justify-between"
          : "hidden sm:inline-flex sm:justify-between"
      }`}
      style={{ height: "97vh" }}
    >
      <div className="flex flex-col items-center space-y-2 mt-2">
        <div
          className="flex  h-10 w-full space-x-2 items-center "
          onClick={() => stateHandler(1)}
        >
          {iconState[1] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}
          <DocumentDuplicateIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[1]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>
        <div
          className="flex  h-10 w-full space-x-2 items-center"
          onClick={() => stateHandler(2)}
        >
          {iconState[2] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}

          <CodeIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[2]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>
        <div
          className="flex  h-10 w-full space-x-2 items-center"
          onClick={() => stateHandler(3)}
        >
          {iconState[3] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}

          <AcademicCapIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[3]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>
        <div
          className="flex  h-10 w-full space-x-2 items-center"
          onClick={() => stateHandler(4)}
        >
          {iconState[4] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}

          <LightningBoltIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[4]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>
        <div
          className="flex  h-10 w-full space-x-2 items-center"
          onClick={() => stateHandler(5)}
        >
          {iconState[5] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}

          <AtSymbolIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[5]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 mt-10 sm:mt-0">
        <div
          className="flex  h-10 w-full space-x-2 items-center"
          onClick={() => stateHandler(6)}
        >
          {iconState[6] ? (
            <div className="w-px h-full bg-red-400"></div>
          ) : (
            <></>
          )}

          <CogIcon
            className={`h-8 w-8 hover:text-red-400 cursor-context-menu ${
              iconState[6]
                ? "text-red-400"
                : themeValue.darkTheme
                ? darkTheme.iconColorSidebar
                : lightTheme.iconColorSidebar
            }
            }`}
          />
        </div>

        <div className="h-4"></div>
      </div>
    </div>
  );
}

export default IconSidebar;
