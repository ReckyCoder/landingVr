import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Servicios from "./pages/servicios/Servicios";
import Nosotros from "./pages/nosotros/Nosotros";
import ServiciosDetalle from "./pages/serviciosDetalle/ServiciosDetalle";
import Hablemos from "./pages/hablemos/Hablemos";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/home" element={<Home/>} index/>
                    <Route path="/nosotros" element={<Nosotros/>} />
                    <Route path="/servicios" element={<Servicios/>}/>
                    <Route path="/servicios/:id" element={<ServiciosDetalle />} />
                    <Route path="/hablemos" element={<Hablemos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
