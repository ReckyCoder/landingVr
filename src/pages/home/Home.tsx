import logoVr from "@img/logo-vr-group.png";
import gradient from "@img/gradient.png";
import bgHome from "@img/bg-home.png";
import conocenos from "@img/conócenos.png";
import linkedin from "@img/linkedin.png";
import texto from "@json/home.json";
import { useEffect, useState } from "react";
import ServiciosYConsultoria from "./components/ServiciosYConsultoria";
import Soluciones from "./components/Soluciones";
import UltimosProyectos from "./components/UltimosProyectos";
import Testimonios from "./components/Testimonios";
import Contacto from "@/components/Contacto";

export default function Home() {
  const [isVisibleHamburguerState, setisVisibleHamburguer] = useState(false);

  useEffect(() => {
    const handleResize = () => setisVisibleHamburguer(window.innerWidth < 768);

    // Ejecutar inmediatamente al montar
    handleResize();

    // Escuchar eventos de resize
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <p className="mt-10 text-center leading-7">{texto.bienvenida}</p>
          </div>
          <img
            className="mt-20 motion-safe:animate-bounce"
            src={conocenos}
            alt=""
          />
        </div>
        <img className="object-cover h-[900px] w-full" src={bgHome} alt="" />
        <div
          className={
            isVisibleHamburguerState
              ? "hidden"
              : "absolute z-2 bottom-20 left-20 flex flex-col items-center gap-10"
          }
        >
          <a
            href="https://www.linkedin.com/company/vr-group-chile/"
            target="_blank"
          >
            <img className="w-[25px] h-[25px]" src={linkedin} alt="" />
          </a>
          <p className="text-white -rotate-90">{texto.siguenos}</p>
        </div>
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
