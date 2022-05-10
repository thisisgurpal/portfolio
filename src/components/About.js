import { Text, Flex, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import FadeIn from 'react-fade-in/lib/FadeIn';

function About(props) {

  const [itemsV2, setItemsV2] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 10000) setItemsV2(1);
    else setItemsV2(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 10000) setItemsV2(1);
      else setItemsV2(3);
    });
  }, []);

  const [items, setItems] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 10000) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 10000) setItems(1);
      else setItems(3);
    });
  }, []);

  return (
        <Flex flexDirection='column' alignItems='center' minHeight='calc(100vh - 80px)'>
          <Text mt='40' ref={props.aboutSection} textAlign='center' className='title' fontSize={{ base: '30px', sm: '40px', md: '60px', lg: '60px', xl: '75px' }}>About Me</Text>
        <Text w='80%' mt='5' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }}>I’m a Junior Full Stack Developer with a background in mathematics, analytics and art and design. I studied Financial Mathematics at university and soon after graduating I started a new role in data analytics. Working closely with other developers in this role and understanding the link between development and design intrigued me, I soon after completed the full time Software Engineering Immersive bootcamp at General Assembly. I’m passionate about continuing to enhance my software engineering skills to learn and grow as a developer in a dynamic environment.</Text>
        <Text w='80%' mt='5' mb='5' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }}>In my free time I like to make art. Sometimes I like to take an object and create new ways in how you view it...</Text><div className="App">
      <CarouselWrapper items={itemsV2} mode="gallery">
        <div className="imagev2 image1v2"></div>
        <div className="imagev2 image2v2"></div>
        <div className="imagev2 image3v2"></div>
        <div className="imagev2 image4v2"></div>
        <div className="imagev2 image5v2"></div>
        <div className="imagev2 image6v2"></div>
        <div className="imagev2 image7v2"></div>
        <div className="imagev2 image8v2"></div>
      </CarouselWrapper>
    </div><Text w='80%' mt='5' mb='5' fontSize={{ base: '14px', sm: '16px', md: '18px', xl: '20px' }}>and sometimes I paint or draw objects...</Text><div className="App">
        <CarouselWrapper items={items} mode="gallery">
          <div className="image image1"></div>
          <div className="image image2"></div>
          <div className="image image3"></div>
          <div className="image image4"></div>
          <div className="image image5"></div>
        </CarouselWrapper>
      </div></Flex>
  )
}

export default About