import React, { useEffect } from 'react'
import { Text, Flex, Box, Image } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';
import ImageSlider from './helper/ImageSlider';
import { SlideData } from './helper/SlideData';
import { Carousel } from 'react-responsive-carousel';

function Home() {

  return (
    <Flex mt='100px' flexDirection='column' alignItems='center' minHeight='100vh'>
      <Box mt='50' mb='50' w='90%'>
        <FadeIn>
          <Text fontSize={{ base: '40px', sm: '50px', md: '60px' }} textAlign='center' className='myname'>Hi! I'm Gurpal Gohler</Text>
          <Text textAlign='center' fontSize={{ base: '20px', sm: '25px', md: '30px' }} mt='5'>Junior Software Engineer</Text>
          <Flex w='100%' justifyContent='center'>
            <a href="https://www.linkedin.com/in/gurpal-gohler/" target="_blank" rel="noopener noreferrer">
              <Image mr='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649246500/portfolio/linkedin2_u1nqr0.jpg' alt='' />
            </a>
            <a href="https://github.com/thisisgurpal" target="_blank" rel="noopener noreferrer">
              <Image ml='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
            </a>
          </Flex>
        </FadeIn>
      </Box>
    </Flex>
  );
}


export default Home