import React, { useEffect } from 'react'
import { Text, Flex, Box } from '@chakra-ui/react';

function Art() {

  const colors = ["https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649149164/portfolio/waves_l0bkzh.jpg", 
  "https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649149161/portfolio/karate_kkxb2l.jpg", 
  "https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649149162/portfolio/Basketball_draw.jpeg_w3dzrn.jpg",
];
const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Flex flexDirection='column' minHeight='100vh' className="slideshow">
    <Text textAlign='center' fontSize='30px'>Artwork</Text>
    <Flex
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {colors.map((backgroundColor, index) => (
        <img
          className="slide"
          key={index}
          src={ backgroundColor }
          alt=''
        />
      ))}
    </Flex>

    <div className="slideshowDots">
      {colors.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
        ></div>
      ))}
    </div>
    </Flex>
    )
}

export default Art