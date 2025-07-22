import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Iconresponse from "@img/servicios/responsive.png";
import Icondarts from "@img/servicios/darts.png";
import iconComputer from "@img/servicios/computer-graphic.png";
import iconAiRobot from "@img/servicios/ai-robot.png";
import iconAirPlane from "@img/servicios/air-plane.png";

import CardTransformacionDigital from "./transformacionDigital/CardTransformacionDigital";

interface ContenidoReverso {
  subtitulo1: string;
  subtitulo2: string;
  subtitulo3: string;
}

export type AcercaDelEmpleo = {
  contenidoAcercaDe: string,
  queBuscamos: {
    caracteristica: string
  }[],
  requisitos: {
    requisito: string
  }[],
  habilidadesValoradas: {
    habilidad: string
  }[]
}

export type TransformacionDigitalItem = {
  id: number;
  imagenPortada: string;
  tituloPortada: string;
  contenidoPortada: string;

  headerReverso?: string;
  imagenReverso?: string;
  tituloReverso: string;
  contenidoReverso?: ContenidoReverso;

  isCircle: boolean;

  tipoCard: "card-red" | "card-gray";
  verDetalle: boolean;
  acercaDelEmpleo?: AcercaDelEmpleo
};

type TabsServiciosProps = {
  className?: string;
};

export default function TabsServicios({ className }: TabsServiciosProps) {
  
  const navigate = useNavigate();

  const [tipoContenido, setTipoContenido] = useState(1);

  const [arrayTransformacionDigital, setArrayTransformacionDigital] = useState<
    TransformacionDigitalItem[]
  >([]);

  useEffect(() => {
    let arrayTransformacionDigital: TransformacionDigitalItem[] = [
      {
        id: 1,
        imagenPortada: Iconresponse,
        tituloPortada: "Experiencia digital y desarrollo de proyectos",
        contenidoPortada:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        headerReverso: "Experiencia de usuario",
        imagenReverso: Icondarts,
        tituloReverso: "Actividades",
        contenidoReverso: {
          subtitulo1: "USER RESEARCH",
          subtitulo2: "CONSULTORÍAS UX",
          subtitulo3: "DISEÑO UX",
        },
        isCircle: true,
        tipoCard: "card-red",
        verDetalle: false,
      },
      {
        id: 2,
        imagenPortada: iconComputer,
        tituloPortada: "Diseño digital",
        contenidoPortada:
          "Proponemos diseños que reflejan tu identidad e imagen de marca de manera atractiva y moderna de cara a los usuarios.",

        headerReverso: "Experiencia de usuario",
        imagenReverso: Icondarts,
        tituloReverso: "Actividades",
        contenidoReverso: {
          subtitulo1: "USER RESEARCH",
          subtitulo2: "CONSULTORÍAS UX",
          subtitulo3: "DISEÑO UX",
        },
        isCircle: true,
        tipoCard: "card-red",
        verDetalle: false,
      },
      {
        id: 3,
        imagenPortada: iconAiRobot,
        tituloPortada: "Desarrollo web",
        contenidoPortada:
          "Creamos soluciones tecnológicas escalables y de alto rendimiento que te ayudarán a innovar y acelerar la transformación digital de tu compañía.",

        headerReverso: "Experiencia de usuario",
        imagenReverso: Icondarts,
        tituloReverso: "Actividades",
        contenidoReverso: {
          subtitulo1: "USER RESEARCH",
          subtitulo2: "CONSULTORÍAS UX",
          subtitulo3: "DISEÑO UX",
        },
        isCircle: true,
        tipoCard: "card-red",
        verDetalle: false,
      },
      {
        id: 4,
        imagenPortada: iconAirPlane,
        tituloPortada: "Analistas de Riesgo TI",
        contenidoPortada:
          "Buscamos analistas de Riesgo TI para cliente del rubro bancario​.",

        headerReverso: "Experiencia de usuario",
        imagenReverso: Icondarts,
        tituloReverso: "Actividades",
        contenidoReverso: {
          subtitulo1: "USER RESEARCH",
          subtitulo2: "CONSULTORÍAS UX",
          subtitulo3: "DISEÑO UX",
        },
        isCircle: true,
        tipoCard: "card-red",
        verDetalle: false,
      },
      {
        id: 5,
        imagenPortada: iconAirPlane,
        tituloPortada: "Director de proyecto",
        contenidoPortada:
          "Realizamos proyectos de consultoría de analítica y performance digital​.",

        headerReverso: "Experiencia de usuario",
        imagenReverso: Icondarts,
        tituloReverso: "Actividades",
        contenidoReverso: {
          subtitulo1: "USER RESEARCH",
          subtitulo2: "CONSULTORÍAS UX",
          subtitulo3: "DISEÑO UX",
        },
        isCircle: true,
        tipoCard: "card-red",
        verDetalle: false,
      },
    ];
    setArrayTransformacionDigital(arrayTransformacionDigital);
  }, []);


  const redirectDetalleServicios = (id: number) => {
    navigate(`/servicios/${id}`);
  };

  return (
    <section className={`tab-servicios px-4 mb-20 ${className}`}>
      {/* Tabs */}
      <div className="w-full max-w-4xl mx-auto mt-10 border-b border-gray-300">
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              onClick={() => setTipoContenido(1)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
                tipoContenido === 1
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-red-500 cursor-pointer"
              }`}
            >
              Transformación Digital y Tecnología
            </button>
          </li>
          <li>
            <button
              onClick={() => setTipoContenido(2)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
                tipoContenido === 2
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-red-500 cursor-pointer"
              }`}
            >
              Gestión, Operaciones, Riesgo y Cumplimiento
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-8 transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in">
        {tipoContenido === 1 && (
          <div className="animate-fade-in max-w-6xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {arrayTransformacionDigital.map((item, index) => (
              <CardTransformacionDigital eventoOnClick={() => redirectDetalleServicios(item.id)} key={index} item={item} />
            ))}
          </div>
        )}

        {tipoContenido === 2 && (
          <div className="animate-fade-in">
            {/* Reemplaza esto con el contenido real del segundo tab */}
            <p className="text-center text-gray-700 text-lg">
              Contenido de Gestión, Operaciones, Riesgo y Cumplimiento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
