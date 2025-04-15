import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Auth, Home, Orders, Tables, Menu } from './pages'
import Header from './components/shared/Header'


function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  return (
    <>
   
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/tables" element={<Tables/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    
    </>
  )
}

const App = () => {
  return(
    <Router>
    <Layout />
  </Router>
  )
  
  
}

export default App