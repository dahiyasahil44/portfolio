import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Profile from "../components/Profile"

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
        <Footer />
        </>
    )
}