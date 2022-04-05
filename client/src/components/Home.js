import React, { useEffect } from 'react'
import { Text, Flex, Box } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';
import ImageSlider from './helper/ImageSlider';
import { SlideData } from './helper/SlideData';
import { Carousel } from 'react-responsive-carousel';

function Home() {

  return (
    <Flex flexDirection='column' minHeight='100vh'>
      <Box mt='50' mb='50'>
    <FadeIn>
<Text textAlign='center' fontSize='50px'>Hi! I'm Gurpal Gohler</Text>
    <Text textAlign='center' fontSize='30px' mt='10'>Junior Full-Stack Developer</Text>
</FadeIn>
    </Box>
    </Flex>
  );
}


export default Home