import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavbarToggler,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Apple9 from '../app/assets/images/apple9.png';

const Header = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Apple9} alt='apple' className='float-start' width='70rem' />
                <h1 className='mt-1'>Project Pommeau</h1>
            </NavbarBrand>
            <NavbarToggler onClick = {() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar >
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className ='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className = 'nav-link' to='producers'>
                            <i className='fa fa-lg fa-id-badge'/> Producers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='events'>
                            <i className= 'fa fa-lg fa-calendar' /> Events
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='market'>
                            <i className= 'fa fa-lg fa-shopping-bag' />
                            Market
                        </NavLink>
                    </NavItem>
                    {/* Login - needs form/modal */}
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;
