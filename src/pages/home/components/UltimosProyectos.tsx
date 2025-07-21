import texto from "@json/home.json";
import rectangle from "@img/rectangle.png";
import project1 from "@img/project1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function UltimosProyectos() {
  const dataProyectos = [
    {
      proyecto: {
        titulo: texto.casosVR,
        subTitulo: texto.puertoDeIdeas,
        descripcion: texto.proyectoExperiencia,
      },
      img: project1,
      contenido: {
        titulo: texto.loremShort,
        subTitulo: texto.lorem,
        link: texto.verDetalle,
      },
    },
    {
      proyecto: {
        titulo: texto.casosVR,
        subTitulo: texto.puertoDeIdeas,
        descripcion: texto.proyectoExperiencia,
      },
      img: project1,
      contenido: {
        titulo: texto.loremShort,
        subTitulo: texto.lorem,
        link: texto.verDetalle,
      },
    },
    {
      proyecto: {
        titulo: texto.casosVR,
        subTitulo: texto.puertoDeIdeas,
        descripcion: texto.proyectoExperiencia,
      },
      img: project1,
      contenido: {
        titulo: texto.loremShort,
        subTitulo: texto.lorem,
        link: texto.verDetalle,
      },
    },
  ];

  return (
    <section className="flex flex-col items-center relative mb-20 2xl:mb-0 px-[5%]">
      <h2 className="font-bold text-[32px] my-20 text-center">
        {texto.nuestros} <span className="colorRed">{texto.últimos}</span>{" "}
        {texto.proyectos}
      </h2>

      <div className="w-full swiper-projects">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {dataProyectos.map((data) => (
            <SwiperSlide>
              <div className="max-w-[600px] mx-auto 2xl:max-w-full grid grid-cols-2 justify-center 2xl:justify-between 2xl:grid-cols-3 items-center z-1">
                <div className="max-w-[300px] mx-auto">
                  <p className="colorRed font-bold">{data.proyecto.titulo}</p>
                  <p className="text-[30px] font-black colorRed uppercase">
                    {data.proyecto.subTitulo}
                  </p>
                  <p className="text-[18px] font-bold">
                    {data.proyecto.descripcion}
                  </p>
                </div>
                <div className="flex justify-center items-center relative col-span-2 2xl:col-span-1">
                  <img
                    className="w-20 2xl:w-[418px] h-[818px] 2xl:h-[721px] absolute right-0 -z-1 2xl:visible 2xl:relative"
                    src={rectangle}
                    alt=""
                  />
                  <img
                    className="w-[623px] 2xl:absolute"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="max-w-[300px] mx-auto flex flex-col gap-y-6">
                  <p className="font-bold">{data.contenido.titulo}</p>
                  <p className="font-bold text-[14px] text-[#939393]">
                    {data.contenido.subTitulo}
                  </p>
                  <a
                    href="#"
                    className="font-bold text-[14px] bg-primary-red text-white rounded-[20px] py-2 px-5 w-fit cursor-pointer"
                  >
                    {data.contenido.link}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
