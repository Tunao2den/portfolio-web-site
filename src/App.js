import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Resume from "./components/resume/Resume";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <main className="main">
                            <Analytics/>
                            <Home/>
                            <About/>
                            <Projects/>
                            <Contact/>
                        </main>
                    }> </Route>

                    <Route path="/resume" element={
                        <Resume/>
                    }></Route>
                </Routes>
                <Footer/>
                <ScrollUp/>
            </BrowserRouter>


        </div>
    );
}

export default App;
