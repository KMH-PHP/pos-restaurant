import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Auth, Home, Orders, Tables } from './pages'
import Header from './components/shared/Header'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/tables" element={<Tables/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App