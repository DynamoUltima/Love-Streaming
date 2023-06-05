import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors = {
  mattblack: '#202020',
  grayblack: '#242424',
  blacklist: '#1d1d1d'
};

/** override chakra colors here */
const overriddenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overriddenChakraColors,
  ...extendedColors,
};

export default colors;
