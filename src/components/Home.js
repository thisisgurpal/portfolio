import React, { useEffect, useRef } from 'react'
import { Text, Flex, Box, Image, Button } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';

function Home() {

  // const projectSection = useRef(null)

  // const scrollToProjectSection = () =>
  //   window.scrollTo({
  //     top: projectSection.current.offsetTop,
  //     behavior: "smooth"
  //   })

  return (

    <Flex className='hero' w='100%' h='760px'>
      <Flex w='100%' justifyContent='space-evenly' alignItems='center' mt='50' mb='50'>
        <FadeIn>
          <Text fontSize={{ base: '30px', sm: '40px', md: '80px' }} textAlign='left' className='myname'>Hi, I'm Gurpal</Text>
          <Text textAlign='left' fontSize={{ base: '10px', sm: '15px', md: '40px' }} mt='5'>Junior Software Engineer</Text>
          <Flex mt='5' justifyContent='center'>
            <Button transition='0.4s' className='mywork-button' boxShadow='lg' mr='5' variant='outline' color='blue.400' borderColor='blue.400'>My Work</Button>
            <Button transition='0.4s' color='white' bgGradient='linear(blue.500 0%, blue.400 25%, blue.300 70%)' className='contact-button'>Contact Me</Button>
          </Flex>
        </FadeIn>
        <Flex>
          <FadeIn>
            <Box boxShadow='2xl' className='intro-image'></Box>
          </FadeIn>
        </Flex>
      </Flex>
    </Flex>
  );
}


export default Home