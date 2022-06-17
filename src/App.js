import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


//Components 

import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';


import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Github from './Pages/GithubProfile';
import News from './Pages/News';
import Newpage1 from './Pages/Newpage1';
// react-router

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

//toast stuff

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//firebase stuff
import { initializeApp } from 'firebase/app';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdrG4_6xUyc6-rwXXmmpXdzRgSxdZJtM",
  authDomain: "my-git-app-67060.firebaseapp.com",
  projectId: "my-git-app-67060",
  storageBucket: "my-git-app-67060.appspot.com",
  messagingSenderId: "943524615594",
  appId: "1:943524615594:web:69dcfbcdb130efa50087d3",
  measurementId: "G-DZW36JHR7S"
};

const app = initializeApp(firebaseConfig);


const  App = () => {

  const  [user,setUser]=useState(null);
 
  return (
 
        <Router >
     <ToastContainer/>
     <UserContext.Provider value={{user,setUser}}>
       <Header/>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/github" element={<Github/>}/>
       <Route exact  path="/signin" element={<Signin/>}/>
       <Route exact path="/signup" element={<Signup/>}/>
       <Route exact path="/news" element={<News/>}/>
       <Route exact path="/newpage1" element={<Newpage1/>}/>
       <Route exact path="*" element={<PageNotFound/>}/>
     </Routes>
     <Footer/> 
     </UserContext.Provider>
   </Router>
   
   

  );
}

export default App;
