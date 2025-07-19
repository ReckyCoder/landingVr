import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TabsServicios from "./components/TabsServicios";
import TecnologiasServicios from "./components/TecnologiasServicios";
import DetalleServicios from "./components/DetalleServicios";

export default function Servicios() {
  return (
    <>
      <section>
        <div className="carousel bg-[#171E26] text-white max-h-[574px] min-h-[574px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>

          <div className="absolute bottom-6 left-6 flex space-x-3">
            <button className="w-4 h-4 border-white border rotate-45 transform hover:bg-white/20"></button>
            <button className="w-4 h-4 border-white border rotate-45 transform hover:bg-white/20"></button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full max-w-7xl px-6"
          >
            <SwiperSlide>
              <div className="flex items-center justify-between">
                {/* Texto */}
                <div className="max-w-xl mx-auto">
                  <h2 className="text-6xl font-bold mb-6">appian</h2>
                  <h3 className="text-2xl font-semibold mb-4">
                    Lorem ipsum dolor amet...
                  </h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <TabsServicios />

      <TecnologiasServicios />
      <DetalleServicios />
    </>
  );
}
