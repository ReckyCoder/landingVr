import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoVr from "@img/home/logoVr2.png";
import iconPerson from "@img/iconPerson.svg";
import iconComent from "@img/iconComment.png";
import iconHamburger from "@img/navbar/iconHamburger.png";
import iconClose from "@img/navbar/iconClose.png";

type HeaderProps = {
  mode?: "fixed" | "scrollHide";
};

export default function Header({}: HeaderProps) {
  const { pathname } = useLocation();
  const mode = pathname === "/" ? "scrollHide" : "fixed";

  const isHome = pathname === "/" ? true : false;

  const [showNavbar, setShowNavbar] = useState(mode === "scrollHide");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mode !== "scrollHide") return;

    const handleScroll = () => {
      setShowNavbar(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <div
      style={!isHome ? { position: "fixed" } : undefined}
      className={`fixed  p-10 lg:p-0 top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        !isHome ? "relative" : ""
      }
        ${
          mode === "fixed"
            ? "translate-y-0"
            : showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        }
        colorBg shadow-md h-[70px]`}
    >
      <div className="h-[100%] max-w-7xl mx-auto">
        <div className="h-[100%] flex items-center justify-between h-16 px-4 md:px-0">
          <div className="flex-shrink-0">
            <img src={logoVr} alt="VR Group" />
          </div>

          {/* Menú desktop */}
          <nav className="hidden md:flex gap-8 h-full items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center text-[#F16262] font-semibold border-b-2 border-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
                  : "h-full flex items-center text-white font-semibold hover:text-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center text-[#F16262] font-semibold border-b-2 border-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
                  : "h-full flex items-center text-white font-semibold hover:text-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center text-[#F16262] font-semibold border-b-2 border-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
                  : "h-full flex items-center text-white font-semibold hover:text-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
              }
            >
              Servicios
            </NavLink>
          </nav>

          <div className="hidden md:flex h-full items-center gap-2 text-sm">
            <NavLink
              to="/trabaja-con-nosotros"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center gap-2 text-[#F16262] border-b-2 border-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
                  : "flex items-center gap-2 text-white hover:text-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
              }
            >
              <i className="fa-regular fa-user text-lg"></i>
              Trabaja con nosotros
            </NavLink>
            <img className="w-[25px]" src={iconPerson} />
            <NavLink
              to="/hablemos"
              className={({ isActive }) =>
                isActive
                  ? "h-full flex items-center gap-2 text-[#F16262] border-b-2 border-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
                  : "flex items-center gap-2 text-white hover:text-[#F16262] font-bold text-[14px] leading-[100%] tracking-[0%]"
              }
            >
              <i className="fa-regular fa-comment-dots text-lg"></i>
              Hablemos
            </NavLink>
            <img className="w-[25px]" src={iconComent} />
          </div>

          {/* Icono hamburguesa visible en móvil */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 focus:outline-none  cursor-pointer"
            >
              <img src={iconHamburger} alt="Menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable con transición */}
      <div
        className={`fixed top-0 right-0 w-60 colorBg shadow-lg z-50 rounded-bl-md  rounded-br-md
    flex flex-col p-6 gap-6 text-white
    h-[auto] overflow-hidden
    transform transition-transform duration-300 ease-in-out origin-top
    ${menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}
  `}
      >
        <button
          className="cursor-pointer self-end"
          onClick={() => setMenuOpen(false)}
        >
          <img src={iconClose} />
        </button>

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#F16262] font-semibold border-b-2 border-[#F16262] pb-1"
              : "hover:text-[#F16262] pb-1"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/nosotros"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#F16262] font-semibold border-b-2 border-[#F16262] pb-1"
              : "hover:text-[#F16262] pb-1"
          }
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/servicios"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#F16262] font-semibold border-b-2 border-[#F16262] pb-1"
              : "hover:text-[#F16262] pb-1"
          }
        >
          Servicios
        </NavLink>

        <NavLink
          to="/trabaja-con-nosotros"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#F16262] font-semibold border-b-2 border-[#F16262] pb-1"
              : "hover:text-[#F16262] pb-1"
          }
        >
          Trabaja con nosotros
        </NavLink>

        <NavLink
          to="/hablemos"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#F16262] font-semibold border-b-2 border-[#F16262] pb-1"
              : "hover:text-[#F16262] pb-1"
          }
        >
          Hablemos
        </NavLink>
      </div>
    </div>
  );
}
