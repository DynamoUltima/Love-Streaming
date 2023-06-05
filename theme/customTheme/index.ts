import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";
import spaces from "./spaces";

const customTheme = extendTheme({
  fonts,
  colors,
  spaces,
});

export default customTheme;
