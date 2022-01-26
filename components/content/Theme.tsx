import { useRecoilState } from "recoil";
import { darkTheme, lightTheme } from "../../components/Themes";
import { themeAtom } from "../../atoms/ThemeAtom";
import { useState } from "react";

function Theme() {
  const [themeValue, setThemeValue] = useRecoilState(themeAtom);
  const [dark, setDark] = useState(true);

  const changeTheme = () => {
    const v = !dark;
    setDark(v);
    setThemeValue({ darkTheme: v });
  };

  return (
    <div className={`p-2 sm:p-5  space-y-2`}>
      <h1 className="text-red-400 font-semibold font-serif text-3xl">
        System Theme
      </h1>
      <div className="flex items-center space-x-3">
        <p>Dark Theme</p>
        <input
          type="checkbox"
          className="transform scale-125"
          // onClick={changeTheme}
          checked={dark}
          onChange={changeTheme}
        />
      </div>
    </div>
  );
}

export default Theme;
