import React,{useState,useContext} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap"

import {Link} from "react-router-dom"
import {UserContext} from "../context/UserContext"


const Header = () => {
   const context = useContext(UserContext)

   const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="info" light expand="md" className="container-fluid">
     
      
        <NavbarBrand><Link to="/" className="text-white"
        >The App Gallery</Link> </NavbarBrand>
       
        
        <NavbarToggler onClick ={toggle}/>
        <Collapse  isOpen={isOpen} navbar>
        
        <Nav className="ml-auto " navbar>
            {
                context.user?(
                    <>
                    <NavbarText className="text-white">{
                        context.user?.email? context.user.email:""
                    }</NavbarText>
                    <NavItem className="float-end">
                    <NavLink onClick={() =>{
                        context.setUser(null);
                    }}  className="text-white offset-lg-3 navbar-end ">LogOut</NavLink>
                    </NavItem>
                    </>
                ) : (
                <>
                    <NavItem >
                    <NavLink tag={Link} to="/signup" className="text-white ">
                        Signup 
                    </NavLink>
                    </NavItem>
                    <NavItem >
                    <NavLink tag={Link} to="/signin" className="text-white">
                        Signin </NavLink>
                    </NavItem>
                </>
                )
            }
      
       
        </Nav>

        </Collapse>
        </Navbar>
    );
}
export default Header;