import { Switch } from "@heroui/react"
import { useState, useEffect } from "react"
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
    <Switch
      defaultSelected={theme === "dark"}
      size="lg"
      color="default"
      startContent={<MdOutlineWbSunny />}
      endContent={<MdDarkMode />}

      onChange={() => {
        setTheme(theme === "dark" ? "light" : "dark")
      }}
    >
    </Switch>
    </>
  )
};

export default ThemeSwitch