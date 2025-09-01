import './App.css'
import { BrowserRouter,Routes,Route } from "react-router";
import Body from './Components/Body';
import About from './Components/About';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { Link } from 'react-router';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { useState } from 'react';


function App() {
   const [lan,setLan]=useState('en')
    return (
      <>
       <BrowserRouter>
        <div style={{background:'black',color:'white', display:'flex',alignContent:'space-between'}}>
          <h3>Welcome</h3>
           <div style={{marginLeft:'500px',display:'flex'}}>
            <Link to='/about' style={{paddingRight:'20px'}}>About</Link>
            <Link to='/profile'style={{paddingRight:'20px'}}>Profile</Link>
            <Link to='/Login'>Login</Link>
            <select value={lan} onChange={(e)=>setLan(e.target.value)} >
              <option value={"en"}>English</option>
              <option value={"tel"}>Telugu</option>
              <option value={"hin"}>Hindi</option>
            </select>
           </div>
        </div>

     
      <Routes>
        <Route path='/' Component={Body} />
        <Route Component={ProtectedRoutes}>
       <Route path='/about' element={<About lan={lan} />}   />
       <Route path='/profile' Component={Profile} />
        </Route>
        
        
        <Route path='/Login' Component={Login} />
      </Routes>
      </BrowserRouter>
      </>
    )
   
}

export default App
