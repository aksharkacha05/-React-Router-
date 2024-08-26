import React from 'react'
import Header from './componats/header/header'
import Footer from './componats/footer/footer'
import { Outlet } from 'react-router-dom'

function Router() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Router
