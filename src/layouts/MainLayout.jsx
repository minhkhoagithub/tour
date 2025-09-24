import React from 'react'
import { Outlet } from "react-router-dom"
import Navigation from "../components/Nav/Navbar.jsx"
import "./MainLayout.css"
import Footer from '../components/Footer.jsx'

export default function MainLayout () {
    return (
        <div className='container '>
            <header>
                <Navigation />
            </header>
            <main className='main-content pt-16 pb-12'>
                <Outlet />
            </main>
            <footer className=''>
                <Footer/>
            </footer>
        </div>
    )
}
