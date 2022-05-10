import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Contact(props) {

  return (
    <Flex minHeight='calc(100vh - 80px)' mt='40' w='100%' direction='column' alignItems='center' h='750px'>
      <Text ref={props.contactSection} textAlign='center' className='title' fontSize={{ base: '30px', sm: '40px', md: '60px', lg: '60px', xl: '75px' }}>Contact</Text>
      <Flex justifyContent='center'>
      <a href="https://www.linkedin.com/in/gurpal-gohler/" target="_blank" rel="noopener noreferrer">
      <Image mr='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649246500/portfolio/linkedin2_u1nqr0.jpg' alt='' />
    </a>
    <a href="https://github.com/thisisgurpal" target="_blank" rel="noopener noreferrer">
      <Image ml='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
    </a>
      </Flex>
    
  </Flex>)
}

export default Contact