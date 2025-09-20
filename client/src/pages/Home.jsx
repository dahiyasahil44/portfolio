import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import Portfolio from "../components/Portfolio"
import WorkProcess from "../components/WorkProcess"
import Contact from "../components/Contact"

export default function Home() {
    return (
        <>
        <Navbar />
        <div className="introduction-profile-background">
            <div className="content">
                <Hero />
                <Profile />
                
            </div>
        </div>
        <div className="bg-soft-white pt-30 pb-5">
            <Portfolio />
        </div>
        <WorkProcess />
        <Contact />
       <div className="bg-gray-50">
        <Footer />
        </div>
        </>
    )
}