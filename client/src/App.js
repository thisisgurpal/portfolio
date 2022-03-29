import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Projects from './components//Projects'
import { Flex } from '@chakra-ui/react'

const App = () => {

  return (
    <BrowserRouter>
      <Flex minHeight='100vh' direction='column' justifyContent='space-between'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  )
}

export default App
