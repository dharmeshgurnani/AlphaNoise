// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    dark: {
      100: "#111",
      200: "#262626",
      300: "#434343",
    },
    light: {
      100: "#ececec",
      200: "#f6f6f6",
      300: "#ffffff",
      400: "#4880b9",
    }
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
      }
    },
  },
  components: {
    // for components
  },
})

export default theme