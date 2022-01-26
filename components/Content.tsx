import { contentAtom } from "../atoms/ContentAtom";
import { useRecoilValue } from "recoil";
import { XIcon } from "@heroicons/react/outline";
import { darkTheme, lightTheme } from "../components/Themes";
import { themeAtom } from "../atoms/ThemeAtom";
import { detailSidebarVisibilityAtom } from "../atoms/DetailSidebarVisibilityAtom";

function Content() {
  const contentData = useRecoilValue(contentAtom);
  const themeValue = useRecoilValue(themeAtom);
  const detailsSidebarVisibility = useRecoilValue(detailSidebarVisibilityAtom);

  return (
    <div
      className={` ${
        themeValue.darkTheme ? darkTheme.header : lightTheme.header
      }}  w-full flex flex-col`}
    >
      <div
        className={`h-9 w-full  ${
          themeValue.darkTheme
            ? darkTheme.detailSidebar
            : lightTheme.detailSidebar
        }  sticky top-9 z-50 border-b  border-custom-text-gray`}
      >
        <div
          className={` ${
            themeValue.darkTheme ? darkTheme.header : lightTheme.header
          } w-44 h-full flex items-center justify-between px-2 border-r border-custom-text-gray text-sm`}
        >
          <h1 className="text-green-500">{contentData.name}</h1>
          <XIcon
            className={`h-4 w-4 text-custom-black hover:${
              themeValue.darkTheme ? "text-white" : "text-gray-300"
            }`}
          />
        </div>
      </div>
      <div
        className={`sticky top-16 z-50  text-xs ${
          themeValue.darkTheme ? darkTheme.header : lightTheme.header
        }`}
      >
        <h1 className="text-gray-500 px-2 py-1 ">
          <span className="hover:text-white hover:cursor-context-menu">
            {contentData.mainName}
          </span>{" "}
          <span className="text-red-400">&gt;</span>{" "}
          <span className="hover:text-white hover:cursor-context-menu">
            {contentData.name}
          </span>
        </h1>
      </div>
      <div className="flex">
        <div className="  flex flex-col px-2 ">
          {Array.from(Array(100).keys()).map((val) => (
            <p key={val} className="text-gray-600">
              {val + 1}
            </p>
          ))}
        </div>
        <div
          className={`${
            themeValue.darkTheme ? darkTheme.textColor : lightTheme.textColor
          } ${
            !detailsSidebarVisibility.visible ? "hidden sm:inline-flex" : ""
          } w-full`}
        >
          {contentData.Content}
        </div>
        {!detailsSidebarVisibility.visible ? (
          <div
            className={`${
              themeValue.darkTheme ? darkTheme.textColor : lightTheme.textColor
            } ${!detailsSidebarVisibility.visible ? " sm:hidden" : ""}`}
          >
            Close Explorer
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Content;
