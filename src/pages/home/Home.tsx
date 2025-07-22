import ServiciosYConsultoria from "./components/ServiciosYConsultoria";
import Soluciones from "./components/Soluciones";
import UltimosProyectos from "./components/UltimosProyectos";
import Testimonios from "./components/Testimonios";
import Contacto from "@/components/Formularios/Contacto";
import Siguenos from "@/components/Others/Siguenos";

import data from "@json/home.json";

import logoVr from "@img/home/logo-vr-group.png";
import gradient from "@img/home/gradient.png";
import bgHome from "@img/home/bg-home.png";
import conocenos from "@img/home/conócenos.png";

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col">
        <div className="absolute flex flex-col items-center w-full z-2">
          <div className="absolute right-0 pr-10 top-15"></div>
          <img
            className="w-[81px] md:w-[155px] transition-all duration-500"
            src={gradient}
            alt=""
          />
          <img
            className="top-30 w-[160px] md:w-[308px] md:top-60 absolute transition-all duration-500"
            src={logoVr}
            alt=""
          />
          <div className="max-w-[560px] text-white">
            <p className="mt-10 text-center leading-7">{data.bienvenida}</p>
          </div>
          <img
            className="mt-20 motion-safe:animate-bounce"
            src={conocenos}
            alt=""
          />
        </div>
        <img className="object-cover h-[900px] w-full" src={bgHome} alt="" />
        <Siguenos/>
        <div className="bg-linear-to-b from-black/80 to-black/80 absolute h-full w-full"></div>
      </section>

      <ServiciosYConsultoria />
      <Soluciones />
      <UltimosProyectos />
      <Testimonios />
      <Contacto />
    </>
  );
}
