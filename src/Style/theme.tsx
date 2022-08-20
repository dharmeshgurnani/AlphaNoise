// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    dark: {
      100: "#16161a",
      200: "#29293e",
      300: "#7f5af0",
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