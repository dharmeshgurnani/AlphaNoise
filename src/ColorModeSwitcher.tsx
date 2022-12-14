import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

const setThemeColor = function setThemeColor(theme_color:string) {
    document.documentElement.setAttribute('data-theme', theme_color);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme_color);
}
export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  setThemeColor(useColorModeValue("white", "#262626"));
  return (
    <IconButton
      size="md"
      fontSize="1.7rem"
      variant="ghost"
      color={useColorModeValue("light.400","")}
      margin="2"
      marginTop="0"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
