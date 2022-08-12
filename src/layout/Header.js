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
        >The App Gallery </Link>
        <a href="https://github.com/Rishav9852Kumar/App-Gallery" target="blank"><div className="pl-4" ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg></div></a>
         </NavbarBrand>
       
      
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
                    <NavLink 
                    data-toggle="tooltip"
                    data-placement="right"
                    title="To Log out "
                    onClick={() =>{
                        
                        context.setUser(null);
                    }}  className="text-white offset-lg-3 navbar-end "><IoIosLogOut size={30}/></NavLink>
                    </NavItem>
                    </>
                ) : (
                <>
                    <NavItem >
                    <NavLink tag={Link} to="/signup" className="text-white ml-auto"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="To sign up as new user">
                        Signup 
                    </NavLink>
                    </NavItem>
                    <NavItem >
                    <NavLink tag={Link} to="/signin" className="text-white ml-auto"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Login to existing account">
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