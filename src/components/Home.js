import React, { useEffect } from 'react'
import { Text, Flex, Box, Image } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';
import ImageSlider from './helper/ImageSlider';
import { SlideData } from './helper/SlideData';
import { Carousel } from 'react-responsive-carousel';

function Home() {

  return (
    <Flex flexDirection='column' minHeight='100vh'>
      <Box mt='50' mb='50'>
        <FadeIn>
          <Text textAlign='center' fontSize='70px' className='myname'>Hi! I'm Gurpal Gohler</Text>
          <Text textAlign='center' fontSize='30px' mt='5'>Junior Full-Stack Developer</Text>
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