import Image from "next/image";

import { ViewListIcon } from "@heroicons/react/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import { iconSidebarVisibilityAtom } from "../atoms/IconSidebarVisibilityAtom";
import { contentAtom } from "../atoms/ContentAtom";
import { darkTheme, lightTheme } from "../components/Themes";
import { themeAtom } from "../atoms/ThemeAtom";

function Header() {
  const [iconSidebarVisibility, setIconSidebarVisibility] = useRecoilState(
    iconSidebarVisibilityAtom
  );

  const contentData = useRecoilValue(contentAtom);
  const themeValue = useRecoilValue(themeAtom);

  const openIconSidebarHandler = () => {
    setIconSidebarVisibility(!iconSidebarVisibility);
  };

  return (
    <header
      className={`md:grid md:grid-cols-3 ${
        themeValue.darkTheme ? darkTheme.header : lightTheme.header
      } px-1 border-b border-custom-text-gray sticky top-0 z-50 h-9`}
    >
      {/* Left  */}
      <div className="hidden md:inline-flex space-x-3 text-xs items-center ">
        <img
          src="https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png"
          className="h-4 "
        />
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          File
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Edit
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Selection
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          View
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Go
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Run
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Terminal
        </h1>
        <h1 className="hover:bg-gray-700 hover:text-white p-1 cursor-context-menu">
          Help
        </h1>
      </div>

      {/* Middle */}
      <div className="flex items-center sm:justify-center py-2 space-x-4">
        <ViewListIcon
          className="h-5 w-5 sm:hidden"
          onClick={openIconSidebarHandler}
        />
        <h1 className="text-center text-sm py-1 md:py-0">
          {contentData.mainName} - My Studio Code
        </h1>
      </div>

      {/* Right */}

      <div className="hidden md:inline-flex justify-end space-x-2 items-center">
        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400"></div>
        <div className="w-3 h-3 bg-green-600 rounded-full hover:bg-green-400"></div>
      </div>
    </header>
  );
}

export default Header;
