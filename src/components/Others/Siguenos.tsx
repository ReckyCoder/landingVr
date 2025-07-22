import { useSiguenos } from "./hooks/useSiguenos";
import data from "@json/home.json";
import linkedin from "@img/home/linkedin.png";

export default function Siguenos() {

    const isVisibleHamburguer = useSiguenos();

    return (
        <div
            className={
            isVisibleHamburguer
                ? "hidden"
                : "absolute z-2 bottom-20 start-5 flex flex-col items-center gap-10"
            }
        >
            <a
            href="https://www.linkedin.com/company/vr-group-chile/"
            target="_blank"
            >
            <img className="w-[25px] h-[25px]" src={linkedin} alt="" />
            </a>
            <p className="text-white -rotate-90">{data.siguenos}</p>
        </div>
    )
}
