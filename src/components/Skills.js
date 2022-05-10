import React from 'react'
import { Box, Text, Image, Badge, Flex, Button } from '@chakra-ui/react'
import FadeIn from 'react-fade-in';

function Skills(props) {

    const skills = [{
        skill: 'Python',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649330491/portfolio/python_fhfadp.png'
    },
    {
        skill: 'Git',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331116/portfolio/git_ryr1es.png'
    },
    {
        skill: 'JavaScript',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649332245/portfolio/javascript_zweruo.jpg'
    },
    {
        skill: 'Django',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331116/portfolio/django_cpuvai.png'
    },
    {
        skill: 'PostgreSQL',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/postgresql_a0nlaw.png'
    },
    {
        skill: 'NPM',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/npm_wxqflb.png'
    },
    {
        skill: 'HTML',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/html_nm4cer.png'
    },
    {
        skill: 'Heroku',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649330351/portfolio/heroku_g3odyl.png'
    },
    {
        skill: 'Node.js',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/nodejs_a7p4vl.png'
    },
    {
        skill: 'MongoDB',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/mongodb_hmcals.png'
    },
    {
        skill: 'React',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/react_kqifl7.png'
    },
    {
        skill: 'Premiere Pro',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/premierepro_uq0loa.png'
    },
    {
        skill: 'Lightroom',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/lightroom_lrr107.png'
    },
    {
        skill: 'VS code',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/vscode_qwlyx3.png'
    },
    {
        skill: 'React Router DOM',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331115/portfolio/reactrouterdom_ze1iam.png'
    },
    {
        skill: 'SASS',
        image: 'https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649331114/portfolio/sass_ittw3o.png'
    },
    ]

    return (
            <Flex minHeight='calc(100vh - 80px)' flexDirection='column' alignItems='center'>
                <Text mt='40' ref={props.skillsSection} textAlign='center' className='title' fontSize={{ base: '30px', sm: '40px', md: '60px', lg: '60px', xl: '75px' }}>Skills</Text><Flex flexDirection='row' w='90%' mt='20px' justifyContent='center' flexWrap='wrap'>
            {skills.map(skill => <Flex m='2' backgroundColor='white' transition='0.4s' color='black' className='skill-box' justifyContent='center' alignItems='center' boxShadow='md' borderRadius='10px' h='200px' w='150px' flexDirection='column'>
                <Flex justifyContent='center' alignItems='center' w='100%' h='80%'>
                    <Image h='100px' src={skill.image} alt='' />
                </Flex>
                <Flex borderBottomRadius='10px' bgGradient={[
                    'linear(to-tr, blue.300, blue.400)',
                    'linear(to-t, blue.200, blue.500)',
                    'linear(to-b, blue.100, blue.300)',
                ]} justifyContent='center' alignItems='center' w='100%' h='20%'>
                    <Text fontSize='13px' textAlign='center' w='90%'>{skill.skill}</Text>
                </Flex>
            </Flex>
            )}
        </Flex>
        </Flex>
    )
}

export default Skills
