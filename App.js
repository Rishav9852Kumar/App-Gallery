import './App.css';
import React from 'react';

import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/myapps" element={<Navigate replace to ="/learn"/>}/>
        <Route path="/learn" element={<Learn/>}>
          <Route path="cources" element={<Cources/>}>
            <Route path=":courseid" element={<CourceId/>}/>
          </Route>
          <Route path="bundle" element={<Bundle/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}
function Home(){
  return(
    <h1>Home Route</h1>
  );
}
function Bundle(){
  return(
    <div>
    <h2>This is the bundle</h2>
    <h4>Bundle carts</h4>
    </div>
    
  );
}
function Dashboard(){
  const location =useLocation()
  return(
    <div>
    <h1>cost is {location.state}</h1>
    </div>
    
  );
}
function CourceId(){
 const navigate =useNavigate()
  const {courseid} = useParams();
  return(
    <div>
    <h1>URL Params is : {courseid}</h1>
    <button 
    onClick={()=>{navigate("/dashboard",{state:courseid});
  }}
    className="btn btn-warning">Price</button>
    <Link to ="/dashboard" state={"Dajango"}>Test link </Link>
    </div>
    
  );
}
function Cources(){
  const courseList =["React","Angular","Vue","Nodejs"];
  const randomCourseName =courseList[Math.floor(Math.random()*courseList.length)]
  return(
    <div>
    <h2>This is the Course list </h2>
    <h4>History / maths/ science</h4>
    
    <p>More test</p>
    <NavLink style={({isActive}) =>{
      return{
        backgroundColor: isActive?"pink":"yellow"
    }
    } } to={`/learn/cources/${randomCourseName}`}>{randomCourseName}</NavLink>
    <NavLink className="btn btn-light"  to={`test`}>Test</NavLink>

    <Outlet/>
    </div>
  );
}
function Learn(){
  return(
    <div>
      <h1>Learn</h1>
   
    <Link className="btn btn-success m-2" to ="/learn/cources">cources </Link>
    <Link className="btn btn-primary" to ="/learn/bundle">bundle</Link>
   <Outlet/>
    </div> 
  );
}

export default App;
