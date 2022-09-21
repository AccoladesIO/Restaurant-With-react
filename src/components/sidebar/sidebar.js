import React from 'react'
import { SideMenu, SideLink, SideBtn, SideBtnLink, CancelBtn } from './sidebarStyles';
const Sidebar = (props) => {
    if(!props.open) return null;
  return (
        <div>
            <SideMenu>
                <CancelBtn onClick={props.onClose}> &times; </CancelBtn>
    <SideLink to="/" onClick={props.onClose} activeStyle>
      Home
    </SideLink>
    <SideLink to="/about" onClick={props.onClose} activeStyle>
      About
    </SideLink>
    <SideLink to="/pricing" onClick={props.onClose} activeStyle>
      Pricing
    </SideLink>
    <SideLink to="/contact" onClick={props.onClose} activeStyle>
      Contact
    </SideLink>
    <SideBtn>
        <SideBtnLink to="/signin">Sign In</SideBtnLink>
    </SideBtn>
  </SideMenu>
        </div>
  )
}

export default Sidebar