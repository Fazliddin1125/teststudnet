import { Route, Routes } from "react-router-dom"
import "./App.css"
import Detail from "./pages/detail"
import Home from "./pages/home"
import Footer from "./UI/footer/footer"
import Navbar from "./UI/navbar/navbar"
import Login from "./pages/login"
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
    <div className="">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:slug" element={<Detail/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App