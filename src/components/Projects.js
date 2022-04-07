import React from 'react'
import { Box, Text, Image, Badge, Flex, Button } from '@chakra-ui/react'
import FadeIn from 'react-fade-in';

function Projects() {

  const projects = [{
    company: 'General Assembly',
    name: 'RunnersUniverse (Project 4)',
    skills: 'Python | Django | Django REST Framework | PostgreSQL | React | TablePlus | Axios | SCSS | CSS | Chakra | Cloudinary | React Router DOM | JWT | Insomnia | Heroku | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249033/portfolio/p4_kulxmi.jpg',
    live: 'https://runnersuniverse.herokuapp.com/',
    github: 'https://github.com/thisisgurpal/run_results_app',
  },
  {
    company: 'General Assembly',
    name: 'TinyHabit (Project 3)',
    skills: 'MongoDB | Mongoose | Node.js | Express | React | JavaScript | JWT | Chakra | Axios | SCSS | CSS | Cloudinary | Insomnia | Heroku | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249033/portfolio/p3_uojln5.jpg',
    live: 'https://tiny-habits-sei61.herokuapp.com/',
    github: 'https://github.com/thisisgurpal/Tiny-Habits',
  },
  {
    company: 'General Assembly',
    name: 'Reciplease (Project 2)',
    skills: 'React | React Router DOM | Axios | JavaScript | SCSS | CSS | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p2_xkuprf.jpg',
    live: 'https://reciplease-thisisgurpal.netlify.app/',
    github: 'https://github.com/thisisgurpal/food-api',
  },
  {
    company: 'General Assembly',
    name: 'Pacman (Project 1)',
    skills: 'JavaScript | CSS | HTML | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p1_jspvfa.jpg',
    live: 'https://thisisgurpal.github.io/pacman/',
    github: 'https://github.com/thisisgurpal/pacman',
  },]

  return (
    <Flex flexDirection='column' alignItems='center' minHeight='100vh'>
        <Text textAlign='center' className='title' fontSize='30px'>Projects</Text>
        <Flex flexDirection='row' w='90%' mt='20px' justifyContent='center' flexWrap='wrap'>
          {projects.map(project => 
          <Box boxShadow='md' w='300px' h='450px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='175px' backgroundSize='cover' backgroundImage={project.image}>
          </Box>
          <Box p='6'>
            <Box display='flex'>
              <Badge borderRadius='full' px='2'>
                {project.company}
              </Badge>
            </Box>
            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {project.name}
            </Box>
            <Box
              mt='3'
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
            >
              {project.skills}
            </Box>
            <Flex justifyContent='center' mt='5'>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button mr='2' variant='outline'>
                  Live
                </Button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button ml='2' variant='outline'>
                  <Image mr='2' w='20px' h='20px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649251897/portfolio/githublogo1_lbprky.jpg' alt='' />
                  GitHub
                </Button>
              </a>
            </Flex>
          </Box>
        </Box>
            )}
        </Flex>
    </Flex>
  )
}

export default Projects
