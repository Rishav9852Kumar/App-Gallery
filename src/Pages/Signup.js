import React,{useState,useContext} from "react"
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
}  from 'reactstrap';
import firebase from "firebase/app";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {UserContext} from "../context/UserContext";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import background from '../Gallery/background.jpeg';
const Signup=()=>{
    const context =useContext(UserContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSignUp = () =>{
        const auth = getAuth();
         createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
        // ...
        context.setUser({email:user.email,uid:user.uid});
         })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error"
        });
    // ..
  });
    };
    const handleSubmit = e =>{
        e.preventDefault()
        handleSignUp()
    }
    if(context.user?.uid){
        return <Navigate to="/" />
    }
    return(
      <div style={{ backgroundImage: `url(${background})` 
      ,height:"85vh"
      ,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"repeat"}}>

    
        <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-4">
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signup here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="secondary">
                  Sign Up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    )
}
export default Signup;