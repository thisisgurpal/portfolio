import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    z-index: 10;
`

// export const NavLink = styled(Link)`
//     color: black;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
//     text-align: center;

//     &.active {
//         font-weight: bold;
//     }
//     &:hover {
//         transform: scale(1.1);
//     }
// `

// export const NavLinkHome = styled(Link)`
//     color: black;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     height: 100%;
//     cursor: pointer;
//     text-align: center;

//     &.active {
//         font-weight: bold;
//     }
//     &:hover {
//         transform: scale(1.1);
//     }
// `

export const Bars = styled(FaBars)`
    display: none;
    color: black;

    @media screen and (max-width: 750px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

// export const NavMenu = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: -24px;

//     @media screen and (max-width: 750px) {
//         display: none;
//     }
// `

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen and (max-width: 750px) {
//         display: none;
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #fff;
//     margin-left: 12px;
//     margin-right: 12px;
//     padding: 10px 22px;
//     color: black;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: black;
//         color: #fff;
//     }
// `

// export const NavBtn2 = styled.nav`
// color: black;
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;

// &.active {
//     font-weight: bold;
// }
// &:hover {
//     transform: scale(1.1);
// }

// @media screen and (max-width: 750px) {
//     display: none;
// }
// `



