import { Route, Router, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Blog from "../pages/blog/Blog"
import MainLayout from "../layouts/MainLayout"
import NotFound from "../pages/NotFound"

export default function AppRouter () {
    return(
    
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
      
    )
}