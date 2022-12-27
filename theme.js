// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";


// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#9394a5","#202023")(props),
      }
    })
  },
})

export default theme