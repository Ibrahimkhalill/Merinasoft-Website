import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav style={{ background: "linear-gradient(#ca0fca, #00000)", height:"100px", fontSize:"20px"}}>
		<Bars />
		<NavMenu>
		<NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/about'>
			About
		</NavLink>
		<NavLink to='/coachingApp'>
            CoachingApp
		</NavLink>
		<NavLink to='/hms'>
            Hms
		</NavLink>
		<NavLink to='/androidApp'>
            Android App Solution
		</NavLink>		
		<NavLink to='/gallery'>
            Gallery
		</NavLink>
		<NavLink to='/contact'>
            Contact
		</NavLink>
		<NavLink to='/career'>
            Career
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
