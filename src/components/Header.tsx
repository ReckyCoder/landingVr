import Hamburguer from "@/utils/Hamburguer";
import logoVr from "@img/logo-vr-group.png";
import { useEffect, useRef, useState, type RefObject } from "react";
import texto from "@json/home.json";

type HeaderProps = {
  tipoHeader?: number;
};

export default function Header({ tipoHeader }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const [isActivateHamburgerState, setHamburguer] = useState(false);
  const [isVisibleHamburguerState, setisVisibleHamburguer] = useState(true);

  useEffect(() => {
    const handleResize = () => setisVisibleHamburguer(window.innerWidth < 768);
    const handleScroll = () => setIsSticky(window.scrollY > 120);

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
    console.log(headerRef?.current.tagName === "HEADER");

    if (headerRef?.current.tagName === "HEADER") {
      setIsHeader(true);
    }
  };

  const styleHeader =
    "w-full grid grid-cols-3 items-center justify-between colorBg h-[70px] transition-all duration-500 z-3 fixed";

  return (
    <header
      ref={headerRef}
      className={isSticky ? styleHeader + " top-0" : styleHeader + " -top-80"}
    >
      <div className="flex justify-center">
        <img className="w-[130px]" src={logoVr} alt="" />
      </div>
      <nav className="invisible md:visible flex list-none gap-4 text-white justify-center">
        <li>{texto.inicio}</li>
        <li>{texto.nosotros}</li>
        <li>{texto.servicios}</li>
      </nav>
      <div
        className={
          isVisibleHamburguerState ? "flex justify-end" : "flex justify-center"
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
