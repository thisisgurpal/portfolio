import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute } from './SidebarElements'
import { Flex, Image } from '@chakra-ui/react'

const Sidebar = ({ isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                    <Flex w='100%' justifyContent='center'>
                    <a href="https://www.linkedin.com/in/gurpal-gohler/" target="_blank" rel="noopener noreferrer">
                    <Image mr='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649246055/portfolio/linkedIn_lv7pro.jpg' alt=''/>
                        </a>
                        <a href="https://github.com/thisisgurpal" target="_blank" rel="noopener noreferrer">
                    <Image ml='2' mt='10' w='50px' h='50px' src='https://res.cloudinary.com/dmbkzjwzq/image/upload/v1649252219/portfolio/githublogo2_ihkglw.jpg' alt=''/>
                        </a>
                    </Flex>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar