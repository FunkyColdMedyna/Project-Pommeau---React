import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';
import ApplE from '../app/assets/images/ApplE.jpeg'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={ApplE} alt='apple' className='float-start' />
            </NavbarBrand>
            <Collapse navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                            <i className='fa fa-home fa-lg' /> Home
                    </NavItem>
                    <NavItem>
                    <i className='fa fa-info fa-lg' /> About
                    </NavItem>
                    <NavItem>
                       Producers
                    </NavItem>
                    <NavItem>
                        Events
                    </NavItem>
                    <NavItem>
                        Market
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;
