import Hamburguer from "@/utils/Hamburguer";
import logoVr from "@img/logo-vr-group.png";
import { useEffect, useRef, useState, type RefObject } from "react";
import texto from "@json/home.json";
import {
  NavLink,
  useLocation,
} from "@node_modules/react-router/dist/development";

type HeaderProps = {
  tipoHeader?: number;
};
export default function Header() {
  const localization = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const [isActivateHamburgerState, setHamburguer] = useState(false);
  const [isVisibleHamburguerState, setisVisibleHamburguer] = useState(false);

  useEffect(() => {
    const handleResize = () => setisVisibleHamburguer(window.innerWidth < 768);
    const handleScroll = () => setIsSticky(window.scrollY > 120);

    handleResize();

    // Llamada inicial
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeHamburguer = (
    isActive: boolean,
    headerRef: RefObject<HTMLElement> | null,
    setIsHeader: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHamburguer(isActive);

    if (headerRef?.current.tagName === "HEADER") {
      setIsHeader(true);
    }
  };

  const styleHeader =
    " w-full grid grid-cols-3 items-center justify-between colorBg h-[70px] transition-all duration-500 z-3 border border-b-[#474747]";
  const isHome =
    localization.pathname === "/home" && isSticky
      ? "fixed top-0"
      : localization.pathname === "/home" && !isSticky
      ? "fixed -top-80"
      : localization.pathname !== "/home" && !isSticky
      ? "relative"
      : localization.pathname !== "/home" && isSticky
      ? "fixed top-0"
      : "";

  return (
    <header ref={headerRef} className={isHome + styleHeader}>
      <div className="flex justify-center">
        <img className="w-[130px]" src={logoVr} alt="logo vr" />
      </div>
      <nav className="invisible md:visible flex list-none gap-4 text-white justify-center h-full justify-center">
        <li className="h-full">
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-(--color-primary-red) border-b-(--color-primary-red) border-b-2"
                  : ""
              }  items-center flex h-full hover:text-(--color-primary-red)`
            }
          >
            {texto.inicio}
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            to={"/nosotros"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-(--color-primary-red) border-b-(--color-primary-red) border-b-2"
                  : ""
              }  items-center flex h-full hover:text-(--color-primary-red)`
            }
          >
            {texto.nosotros}
          </NavLink>
        </li>
        <li className="h-full">
          <NavLink
            to={"/servicios"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-(--color-primary-red) border-b-(--color-primary-red) border-b-2"
                  : ""
              }  items-center flex h-full hover:text-(--color-primary-red)`
            }
          >
            {texto.servicios}
          </NavLink>
        </li>
      </nav>
      <div
        className={
          isVisibleHamburguerState
            ? "flex justify-end"
            : "flex justify-center h-full"
        }
      >
        <Hamburguer
          isActivateHamburgerState={isActivateHamburgerState}
          isVisibleHamburguerState={isVisibleHamburguerState}
          changeHamburguer={changeHamburguer}
          headerRef={headerRef}
        />
      </div>
    </header>
  );
}
