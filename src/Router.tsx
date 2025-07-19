import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Servicios from "./pages/servicios/Servicios";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>} index/>
                    <Route path="/servicios" element={<Servicios/>} index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
