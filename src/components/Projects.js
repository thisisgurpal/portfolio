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
    description: 'Solo project creating a running app that allows visitors to get information on running events, view past years leaders, view runners profiles, view fitness and health blogs and once registered and logged in you can save your favourite runners, save your favourite blogs and also comment on running events. For this project I built the back end which included making my own API, I also designed and developed the front end. This was done using PostgreSQL, Python, TablePlus, React.',
  },
  {
    company: 'General Assembly',
    name: 'TinyHabit (Project 3)',
    skills: 'MongoDB | Mongoose | Node.js | Express | React | JavaScript | JWT | Chakra | Axios | SCSS | CSS | Cloudinary | Insomnia | Heroku | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249033/portfolio/p3_uojln5.jpg',
    live: 'https://tiny-habits-sei61.herokuapp.com/',
    github: 'https://github.com/thisisgurpal/Tiny-Habits',
    description: 'Developed a habit app that allows you to join upcoming 30 day habit challenges using React, Node JS, Express JS and MongoDB (MERN stack). You will be able to register, create a profile, join events, post your completed habits, comment on events and like events. My main responsibilities were to help build the back end, bug fixing, designing the front end profile page pages for the users, adding the completed habits feed, ensuring you are able to edit and delete where necessary and also seeding the users.',
  },
  {
    company: 'General Assembly',
    name: 'Reciplease (Project 2)',
    skills: 'React | React Router DOM | Axios | JavaScript | SCSS | CSS | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p2_xkuprf.jpg',
    live: 'https://reciplease-thisisgurpal.netlify.app/',
    github: 'https://github.com/thisisgurpal/food-api',
    description: 'Built an app using JavaScript and React that allows you to search for your desired food and see how it’s made including details about measurements and ingredients. This project was paired programming for 48 hours. I was responsible for ensuring that the back end was correctly retrieving information from an external API, designing the home page, designing the individual recipe pages and also building the filter functions to choose a recipe.',
  },
  {
    company: 'General Assembly',
    name: 'Pacman (Project 1)',
    skills: 'JavaScript | CSS | HTML | VS code',
    image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649249032/portfolio/p1_jspvfa.jpg',
    live: 'https://thisisgurpal.github.io/pacman/',
    github: 'https://github.com/thisisgurpal/pacman',
    description: 'Solo project building a childhood favourite game, Pacman. This project was over the duration of a week using JavaScript, HTML and CSS. The game has two different maps, the ability to go to the next level, and all other characteristics of the Pacman game.',
  },]

  return (
    <Flex flexDirection='column' alignItems='center' minHeight='100vh'>
        <Text textAlign='center' className='title' fontSize='30px'>Projects</Text>
        <Flex flexDirection='row' w='90%' mt='20px' justifyContent='center' flexWrap='wrap'>
          {projects.map(project => 
          <Box boxShadow='md' w='600px' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
          <Box h='350px' backgroundSize='cover' backgroundImage={project.image}>
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
              letterSpacing='wide'
              fontSize='sm'
            >
              {project.description}
            </Box>
            <Box
              mt='3'
              color='gray.400'
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
