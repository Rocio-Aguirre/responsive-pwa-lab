import React from "react";
import Home from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';

const AppRouter = () => {
    return (
        // <BrowserRouter>
        //     <NavbarComponent/>
        //         <Routes>
        //             <Route exact path='/' element={<Home/>}/>
        //             {/* <Route path='*' component={Error} /> */}
        //         </Routes>
        //     </BrowserRouter>
        <Home/>
    )
}
export default AppRouter