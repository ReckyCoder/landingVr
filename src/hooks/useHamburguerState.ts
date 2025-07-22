import { useEffect, useRef, useState } from "react";

export function useHamburguerState() {
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

    return isVisibleHamburguerState;
}