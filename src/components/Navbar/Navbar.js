import React, { useRef } from "react"
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu,
    NavLinkHome 
} from './NavbarElements'
import { motion } from "framer-motion";
import { Box, Button, Text } from "@chakra-ui/react";

const Navbar = ( props, { toggle }) => {

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

    return (
        <Nav>
              <Box paddingBottom='2'>
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
        stroke="black"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="88"
        y1="160"
        x2="88"
        y2="88"
        stroke="black"
        custom={3.5}
        variants={draw}
      />
      <motion.line
        x1="128"
        y1="140"
        x2="88"
        y2="160"
        stroke="black"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="128"
        y1="140"
        x2="128"
        y2="192"
        stroke="black"
        custom={3.5}
        variants={draw}
      />
      
      <motion.line
        x1="156"
        y1="88"
        x2="196"
        y2="108"
        stroke="black"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="156"
        y1="160"
        x2="156"
        y2="88"
        stroke="black"
        custom={3.5}
        variants={draw}
      />
      <motion.line
        x1="196"
        y1="140"
        x2="156"
        y2="160"
        stroke="black"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="196"
        y1="140"
        x2="196"
        y2="192"
        stroke="black"
        custom={3.5}
        variants={draw}
      />
    </motion.svg>
              </Box>
            <Bars onClick={toggle}/>
            <Box ml='5' className='nav-links'>
            <Text className="nav-button" variant='Link' onClick={props.scrollToProjectSection}>Projects</Text>
            <Text className="nav-button" variant='Link' onClick={props.scrollToSkillsSection}>Skills</Text>
            <Text className="nav-button" variant='Link' onClick={props.scrollToAboutSection}>About</Text>
            <Text className="nav-button" variant='Link' onClick={props.scrollToContactSection}>Contact</Text>
            </Box>
            
        </Nav>
    )
}

export default Navbar