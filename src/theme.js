// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
    global: props => ({
        body: {
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('gray.100', '#141214')(props),
        },
    }),
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme