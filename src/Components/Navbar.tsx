import styled from "styled-components"
import { useState } from "react"
import Logo from '../assets/images/logo.svg'
import Circle from '../assets/images/circlered.png'
import MenuBtn from '../assets/images/menubtn.png'

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 15px;
  font-family: sans-serif;
`

const LogoContainer = styled.div`
  width: 40px;
  height: 50px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface MenuContainerProps {
  isMobile: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${props => (props.isMobile ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 20px;
    background: rgba(0,0,0,0.9);
    padding: 20px;
    /* border-radius: 8px; */
  }
`

const MenuItem = styled.a`
  color: #928b8b;
  text-decoration: none;
  font-size: 13px;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  /* display: none; */

  @media (max-width: 768px) {
    display: block;
  }
`

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const ToggleMenu = () => {
    setIsMobile(!isMobile);
  }

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>

     
      <div className="flex gap-6 items-center">
      <MenuContainer isMobile={isMobile}>
        <MenuItem href="#home">About Us</MenuItem>
        <MenuItem href="#">Services</MenuItem>
        <MenuItem href="#">Blogs</MenuItem>
        <MenuItem href="#">Case Studies</MenuItem>
        <MenuItem href="#"><img src={Circle} className="w-[15px]" alt="" /></MenuItem>
        
      </MenuContainer>
      <MenuButton onClick={ToggleMenu}>
        <img src={MenuBtn} alt="Menu Button" className="w-[20px]" />
      </MenuButton>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
