import React, { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Projects from './components//Projects'
import About from './components/About'
import { Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Button, useColorMode } from '@chakra-ui/react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const projectSection = useRef(null)
  const contactSection = useRef(null)
  const skillsSection = useRef(null)
  const aboutSection = useRef(null)

  const scrollToProjectSection = () =>
  window.scrollTo({
    top: projectSection.current.offsetTop,
    behavior: "smooth"
  })

  const scrollToContactSection = () =>
  window.scrollTo({
    top: contactSection.current.offsetTop,
    behavior: "smooth"
  })

  const scrollToSkillsSection = () =>
  window.scrollTo({
    top: skillsSection.current.offsetTop,
    behavior: "smooth"
  })

  const scrollToAboutSection = () =>
  window.scrollTo({
    top: aboutSection.current.offsetTop,
    behavior: "smooth"
  })


  return (
      <Flex minHeight='100vh' direction='column' alignItems='center' justifyContent='space-between'>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar 
      toggle={toggle}
      scrollToProjectSection={scrollToProjectSection}
      scrollToContactSection={scrollToContactSection}
      scrollToSkillsSection={scrollToSkillsSection}
      scrollToAboutSection={scrollToAboutSection}
      />
        <Home/>
      <Projects projectSection={projectSection}/>      
      <Skills skillsSection={skillsSection}/>
      <About aboutSection={aboutSection}/>
      <Contact contactSection={contactSection}/>
      <Footer/>
      </Flex>
  )
}

export default App
