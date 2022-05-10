import React, { useEffect, useRef, useState } from 'react'
import { Text, Flex, Box, Image, Button } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';

function Home({ scrollToProjectSection, scrollToContactSection }) {

  return (

    <Flex className='hero' w='100%' justifyContent='center' h='calc(100vh - 80px)'>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} w='100%' justifyContent={{ base: 'flex-start', lg: 'space-evenly' }} alignItems='center' mt='50' mb='50'>
        <FadeIn>
          <Text fontSize={{ base: '30px', sm: '40px', md: '60px', lg: '60px', xl: '75px' }} textAlign={{ base: 'center', lg: 'center' }} className='myname'>Hi, I'm Gurpal</Text>
          <Text className='job-title' textAlign={{ base: 'center', lg: 'center' }} fontSize={{ base: '15px', sm: '20px', md: '25px', xl: '40px' }} mt='5'>Junior Software Engineer</Text>
          <Flex mt='5' justifyContent='center'>
            <Button transition='0.4s' className='mywork-button' boxShadow='lg' mr='5' variant='outline' color='blue.400' borderColor='blue.400' onClick={scrollToProjectSection}>My Work</Button>
            <Button transition='0.4s' boxShadow='lg' color='white' bgGradient='linear(blue.500 0%, blue.400 25%, blue.300 70%)' className='contact-button' onClick={scrollToContactSection}>Contact Me</Button>
          </Flex>
        </FadeIn>
        <Flex>
          <FadeIn>
            <Box w={{ base: '250px', sm: '400px', md: '600px', xl: '750px' }} h={{ base: '150', sm: '240', md: '360px', xl: '450px' }} mt={{ base: '30', lg: '0' }} boxShadow='2xl' className='intro-image'></Box>
          </FadeIn>
        </Flex>
      </Flex>
    </Flex>
  );
}


export default Home