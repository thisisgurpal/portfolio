import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ breakpoints, config })

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>
    , document.getElementById('root'))