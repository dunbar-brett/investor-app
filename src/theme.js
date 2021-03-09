// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  styles: {
      global: {
          body: {
              bg: "slategray"
          }
      }
  }
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme