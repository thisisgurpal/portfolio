import React, { useRef } from "react"
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu,
    NavLinkHome 
} from './NavbarElements'
import { motion } from "framer-motion";
import { Box, Button, Text, useColorMode, Flex, Switch } from "@chakra-ui/react";

const Navbar = ({ toggle, scrollToProjectSection, scrollToSkillsSection, scrollToAboutSection, scrollToContactSection }) => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Nav>
              <Flex paddingBottom='2'>
              <motion.svg
      width="80"
      height="80"
      viewBox="0 0 250 250"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="88"
        y1="88"
        x2="128"
        y2="108"
        stroke="#4498E7"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="88"
        y1="160"
        x2="88"
        y2="88"
        stroke="#4498E7"
        custom={3.5}
        variants={draw}
      />
      <motion.line
        x1="128"
        y1="140"
        x2="88"
        y2="160"
        stroke="#4498E7"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="128"
        y1="140"
        x2="128"
        y2="192"
        stroke="#4498E7"
        custom={3.5}
        variants={draw}
      />
      
      <motion.line
        x1="156"
        y1="88"
        x2="196"
        y2="108"
        stroke="#4498E7"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="156"
        y1="160"
        x2="156"
        y2="88"
        stroke="#4498E7"
        custom={3.5}
        variants={draw}
      />
      <motion.line
        x1="196"
        y1="140"
        x2="156"
        y2="160"
        stroke="#4498E7"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="196"
        y1="140"
        x2="196"
        y2="192"
        stroke="#4498E7"
        custom={3.5}
        variants={draw}
      />
    </motion.svg>
            <Bars onClick={toggle}/>
            <Box ml='5' className='nav-links'>
            <Text transition='0.4s' className="nav-button" variant='Link' onClick={scrollToProjectSection}>Projects</Text>
            <Text transition='0.4s' className="nav-button" variant='Link' onClick={scrollToSkillsSection}>Skills</Text>
            <Text transition='0.4s' className="nav-button" variant='Link' onClick={scrollToAboutSection}>About</Text>
            <Text transition='0.4s' className="nav-button" variant='Link' onClick={scrollToContactSection}>Contact</Text>
            </Box>
            <Flex alignItems='center'>
            <Flex direction='row' alignItems='center' justifyContent='center' className='switch'>
            <Switch transition='0.4s' size='lg' onChange={toggleColorMode}></Switch>
            <Text ml='2'>{colorMode === 'light' ? 'Dark' : 'Light'}</Text>
            </Flex>
            </Flex>
            </Flex>
            
        </Nav>
    )
}

export default Navbar