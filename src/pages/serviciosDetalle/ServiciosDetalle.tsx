import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/Footer";
import Contacto from "@/components/Contacto";
import ConfianEnNosotros from "@/components/ConfianEnNosotros";

export default function ServiciosDetalle() {
  return (
    <>
      <ConfianEnNosotros />
      <Contacto />
    </>
  );
}
