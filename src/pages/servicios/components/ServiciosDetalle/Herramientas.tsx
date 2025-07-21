import type { HerramientaDigitalItem } from "@/pages/serviciosDetalle/ServiciosDetalle";

type HerramientasProps = {
  items: HerramientaDigitalItem[];
  className?: string;
};

export default function Herramientas({ items, className }: HerramientasProps) {
  return (
    <section
      className={`colorBgGray px-4 py-8  min-h-[358px] flex items-center justify-center ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-30 gap-y-8 ">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={item.icono}
              alt={`Icono ${index}`}
              className="w-40 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
