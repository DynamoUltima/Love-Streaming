import { extendTheme } from "@chakra-ui/react";

import breakpoints from "./customTheme/breakpoints";
import colors from "./customTheme/colors";
import fontSizes from "./customTheme/font-sizes";
import fonts from "./customTheme/fonts";
import shadows from "./customTheme/shadows";
import sizes from "./customTheme/sizes";
import spaces from "./customTheme/spaces";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "body",
        fontSize: "md",
        color: "black.700",
        fontFamily: '"CeraPro", sans-serif',
      },
    }),
  },
  fonts,
  sizes,
  spaces,
  colors,
  shadows,
  fontSizes,
  breakpoints,
});

export default theme;
