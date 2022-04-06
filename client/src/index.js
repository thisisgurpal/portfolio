import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

  const theme = extendTheme({ breakpoints })

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
    , document.getElementById('root'))