// Route.js

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserDetails from '../page/UserDetails'
import UserList from '../page/UserList'

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </Router>
  )
}

export default RouteConfig
