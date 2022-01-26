import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { iconSidebarSelectedAtom } from "../atoms/IconSidebarSelectedAtom";
import { detailSidebarVisibilityAtom } from "../atoms/DetailSidebarVisibilityAtom";
import { contentAtom } from "../atoms/ContentAtom";
import { darkTheme, lightTheme } from "../components/Themes";
import { themeAtom } from "../atoms/ThemeAtom";
import {
  DocumentDuplicateIcon,
  CodeIcon,
  LightningBoltIcon,
  AcademicCapIcon,
  CogIcon,
  AtSymbolIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import AboutMe from "./content/AboutMe";
import Languages from "./content/Languages";
import Frameworks from "./content/Frameworks";
import Database from "./content/Database";
import Primary from "./content/Primary";
import Secondary from "./content/Secondary";
import Graduation from "./content/Graduation";
import Flutter from "./content/Flutter";
import NextJS from "./content/NextJS";
import LinkedIn from "./content/LinkedIn";
import Github from "./content/Github";
import Instagram from "./content/Instagram";
import Theme from "./content/Theme";

function DetailsSidebar() {
  const iconSidebarSelectedValue = useRecoilValue(iconSidebarSelectedAtom);
  const detailSidebarVisibilityValue = useRecoilValue(
    detailSidebarVisibilityAtom
  );
  const themeValue = useRecoilValue(themeAtom);
  const [contentData, setContentData] = useRecoilState(contentAtom);
  const [sidebarData, setSidebarData] = useState<string[]>();
  const [IconWidget, setIconWidget] = useState(<DocumentDuplicateIcon />);

  useEffect(() => {
    switch (iconSidebarSelectedValue) {
      case 1:
        setSidebarData(["About ME!"]);
        setIconWidget(
          <DocumentDuplicateIcon className="h-4 w-4 text-red-400" />
        );
        break;
      case 2:
        setSidebarData(["Languages", "Frameworks", "Database"]);
        setIconWidget(<CodeIcon className="h-4 w-4 text-red-400" />);
        break;
      case 3:
        setSidebarData(["Primary", "Secondary", "Graduation"]);
        setIconWidget(<AcademicCapIcon className="h-4 w-4 text-red-400" />);

        break;
      case 4:
        setSidebarData(["Flutter", "Next JS"]);
        setIconWidget(<LightningBoltIcon className="h-4 w-4 text-red-400" />);

        break;
      case 5:
        setSidebarData(["Linkedin", "Github", "Instagram"]);
        setIconWidget(<AtSymbolIcon className="h-4 w-4 text-red-400" />);

        break;
      case 6:
        setSidebarData(["Theme"]);
        setIconWidget(<CogIcon className="h-4 w-4 text-red-400" />);

        break;

      default:
        break;
    }
  }, [iconSidebarSelectedValue]);

  const contentHandler = (page: string) => {
    // ,
    switch (page) {
      // case "See Me":
      //   setContentData({
      //     Content: <SeeMe />,
      //     name: "See Me",
      //     mainName: "Home",
      //   });
      //   break;
      case "About ME!":
        setContentData({
          Content: <AboutMe />,
          name: "About ME!",
          mainName: "Home",
        });
        break;
      case "Languages":
        setContentData({
          Content: <Languages />,
          name: "Languages",
          mainName: "Technical",
        });
        break;
      case "Frameworks":
        setContentData({
          Content: <Frameworks />,
          name: "Frameworks",
          mainName: "Technical",
        });
        break;
      case "Database":
        setContentData({
          Content: <Database />,
          name: "Database",
          mainName: "Technical",
        });
        break;
      case "Primary":
        setContentData({
          Content: <Primary />,
          name: "Primary",
          mainName: "Education",
        });
        break;
      case "Secondary":
        setContentData({
          Content: <Secondary />,
          name: "Secondary",
          mainName: "Education",
        });
        break;
      case "Graduation":
        setContentData({
          Content: <Graduation />,
          name: "Graduation",
          mainName: "Education",
        });
        break;

      // "Flutter", "Next JS"
      case "Flutter":
        setContentData({
          Content: <Flutter />,
          name: "Flutter",
          mainName: "Projects",
        });
        break;
      case "Next JS":
        setContentData({
          Content: <NextJS />,
          name: "Next JS",
          mainName: "Projects",
        });
        break;
      case "Linkedin":
        setContentData({
          Content: <LinkedIn />,
          name: "Linkedin",
          mainName: "Social",
        });
        break;
      case "Github":
        setContentData({
          Content: <Github />,
          name: "Github",
          mainName: "Social",
        });
        break;
      case "Instagram":
        setContentData({
          Content: <Instagram />,
          name: "Instagram",
          mainName: "Social",
        });
        break;
      case "Theme":
        setContentData({
          Content: <Theme />,
          name: "Theme",
          mainName: "Settings",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`${
        detailSidebarVisibilityValue.visible ? "hidden " : "inline-flex"
      }  ${
        themeValue.darkTheme
          ? darkTheme.detailSidebar
          : lightTheme.detailSidebar
      } flex-col w-48 border-r border-custom-text-gray sticky top-9 z-50`}
      style={{ height: "97vh" }}
    >
      <div className=" p-3 flex justify-between items-center">
        <h1
          className={`text-xs ${
            themeValue.darkTheme ? darkTheme.textColor : lightTheme.textColor
          }`}
        >
          EXPLORER
        </h1>
        <DotsHorizontalIcon
          className={`h-4 w-4 ${
            themeValue.darkTheme
              ? darkTheme.iconColorSidebar
              : lightTheme.iconColorSidebar
          }`}
        />
      </div>
      <div className=" space-y-1">
        {sidebarData?.length! > 0 ? (
          sidebarData?.map((data) => (
            <div
              key={data}
              className="space-x-2 flex md:cursor-context-menu cursor-pointer px-3 py-1 hover:bg-custom-gray"
              onClick={() => contentHandler(data)}
            >
              {IconWidget}
              <p
                className={`${
                  themeValue.darkTheme
                    ? darkTheme.detailsText
                    : lightTheme.detailsText
                } text-xs`}
              >
                {data}
              </p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DetailsSidebar;
