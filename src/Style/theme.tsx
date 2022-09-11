// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

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
    global: (props:any) => ({
      // styles for the `body`
      body: {
        background: mode('light.100','dark.100')(props),
      }
    }),
  },
  components: {
    // for components
  },
})

export default theme