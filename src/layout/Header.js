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
import {IoIosLogOut} from "react-icons/io";
import {VscAccount} from "react-icons/vsc";
import {Link} from "react-router-dom"
import {UserContext} from "../context/UserContext"


const Header = () => {
   const context = useContext(UserContext)

   const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="primary" light expand="md" className="container-fluid is-italic">
     
      
        <NavbarBrand><Link to="/" className="text-white"
        >The App Gallery </Link> </NavbarBrand>
       
        
        <NavbarToggler onClick ={toggle}/>
        <Collapse  isOpen={isOpen} navbar>
         
        <Nav className="ml-auto " navbar>
            {
                context.user?(
                    <>
                    <NavbarText className="text-white"><VscAccount size={30}/> {
                        context.user?.email? context.user.email:""
                    } </NavbarText>
                    <NavItem className="float-end">
                    <NavLink onClick={() =>{
                        context.setUser(null);
                    }}  className="text-white offset-lg-3 navbar-end "><IoIosLogOut size={30}/></NavLink>
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