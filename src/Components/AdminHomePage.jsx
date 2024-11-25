import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBus from './AddBus'
import AdminDashBoard from './AdminDashBoard'
import AdminNavbar from './AdminNavbar'
import BookBus from './BookBus'
import EditBus from './EditBus'
import ViewBus from './ViewBus'

export default function AdminHomePage() {
  return (
    <div>
        <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashBoard/>}/>
        <Route path='/viewbus' element={<ViewBus/>}/>
        <Route path='/addbus' element={<AddBus/>}/>
        <Route path='/editbus/:id' element={<EditBus/>}/>
        <Route path='/bookbus/:id' element={<BookBus/>}/>
      </Routes>

    </div>
  )
}