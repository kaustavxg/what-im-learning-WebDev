import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {

  return <div>
    
    <BrowserRouter>
      
      <Routes>
          <Route path="" element={<Layout/>} />
            <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/> 
            <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/> 
            <Route path='/allen' element={<Landing/>}/>  
            <Route path='*' element={<ErrorPage/>}/>
      </Routes>
        
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{height: "100vh"}}>
      <Link to="/allen">Allen</Link> 
        | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link> 
      | 
      <Link to="neet/online-coaching-class-12">Class 12 </Link>
      <div style={{height: "90vh"}}>
      <Outlet/>
    </div>
    Footer | Contact Us
  </div>
}

function Landing(){
  return <div>
    <h1>Welcome to Allen</h1>
  </div>
}

function Class11Program(){
  return <div>
    <h1>NEET Program for Class 11th</h1>
  </div>
}

function Class12Program(){

  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div>
    <h1>NEET Program for Class 12th</h1>
    <button onClick={redirectUser}>Go back to the landing page! how after 10 seconds???</button>
  </div>
}

function ErrorPage(){
  return <div>
    Sorry, page not found!
  </div>
}

export default App
