import React from 'react'
import { Box, Text, Image, Badge, Flex, Button } from '@chakra-ui/react'

function Projects() {

  return (
    <Flex flexDirection='column' alignItems='center' minHeight='100vh'>
      <Text textAlign='center' className='title' fontSize='30px'>Projects</Text>
      <Flex flexDirection='row' w='90%' mt='20px' justifyContent='center' flexWrap='wrap'>
        {/*Project 1*/}
        <Box w='300px' h='450px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='175px' backgroundSize='cover' backgroundImage='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249033/portfolio/p4_kulxmi.jpg'>
          </Box>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2'>
                General Assembly
              </Badge>
            </Box>
            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              RunnersUniverse (Project 4)
            </Box>
            <Box
              mt='3'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
            >
              Python | Django | Django REST Framework | PostgreSQL | React | TablePlus | Axios | SCSS | CSS | Chakra | Cloudinary | React Router DOM | JWT | Insomnia | Heroku | VS code
            </Box>
            <Flex justifyContent='center' mt='5'>
            <a href="https://runnersuniverse.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Button mr='2' variant='outline'>
                  Live
                </Button>
              </a>
              <a href="https://github.com/thisisgurpal/run_results_app" target="_blank" rel="noopener noreferrer">
                <Button ml='2' variant='outline'>
                  <Image mr='2' w='20px' h='20px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
                  GitHub
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
        {/*Project 2*/}
        <Box w='300px' h='450px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='175px' backgroundSize='cover' backgroundImage='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249033/portfolio/p3_uojln5.jpg'>
          </Box>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2'>
                General Assembly
              </Badge>
            </Box>
            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              TinyHabit (Project 3)
            </Box>
            <Box
              mt='3'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
            >
              MongoDB | Mongoose | Node.js | Express | React | JavaScript | JWT | Chakra | Axios | SCSS | CSS | Cloudinary | Insomnia | Heroku | VS code
            </Box>
            <Flex justifyContent='center' mt='5'>
            <a href="https://tiny-habits-sei61.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Button mr='2' variant='outline'>
                  Live
                </Button>
              </a>
              <a href="https://github.com/thisisgurpal/Tiny-Habits" target="_blank" rel="noopener noreferrer">
                <Button ml='2' variant='outline'>
                  <Image mr='2' w='20px' h='20px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
                  GitHub
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
        {/*Project 3*/}
        <Box w='300px' h='450px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='175px' backgroundSize='cover' backgroundImage='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p2_xkuprf.jpg'>
          </Box>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2'>
                General Assembly
              </Badge>
            </Box>
            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              Reciplease (Project 2)
            </Box>
            <Box
              mt='3'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
            >
              React | React Router DOM | Axios | JavaScript | SCSS | CSS | VS code
            </Box>
            <Flex justifyContent='center' mt='5'>
            <a href="https://reciplease-thisisgurpal.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button mr='2' variant='outline'>
                  Live
                </Button>
              </a>
              <a href="https://github.com/thisisgurpal/food-api" target="_blank" rel="noopener noreferrer">
                <Button ml='2' variant='outline'>
                  <Image mr='2' w='20px' h='20px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
                  GitHub
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
        {/*Project 4*/}
        <Box w='300px' h='450px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='175px' backgroundSize='cover' backgroundImage='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p1_jspvfa.jpg'>
          </Box>
          <Box p='6'>
            <Box display='flex'>
              <Badge borderRadius='full' px='2'>
                General Assembly
              </Badge>
            </Box>
            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              Pacman (Project 1)
            </Box>
            <Box
              mt='3'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
            >
              JavaScript | CSS | HTML | VS code
            </Box>
            <Flex justifyContent='center' mt='5'>
            <a href="https://thisisgurpal.github.io/pacman/" target="_blank" rel="noopener noreferrer">
                <Button mr='2' variant='outline'>
                  Live
                </Button>
              </a>
              <a href="https://github.com/thisisgurpal/pacman" target="_blank" rel="noopener noreferrer">
                <Button ml='2' variant='outline'>
                  <Image mr='2' w='20px' h='20px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
                  GitHub
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Projects
