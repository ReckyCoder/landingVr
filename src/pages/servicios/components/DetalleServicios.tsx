import type { DetalleServiciosItem } from "../Servicios";

type DetalleServiciosProps = {
  items: DetalleServiciosItem[];
  classNameContainer?: string;
  header?: React.ReactNode;
  itemsPerRowMobile?: 1 | 2;
};

export default function DetalleServicios({
  items,
  classNameContainer,
  header,
  itemsPerRowMobile = 1,
}: DetalleServiciosProps) {
  const mobileColsClass =
    itemsPerRowMobile === 1 ? "grid-cols-1" : "grid-cols-2";

  return (
    <section
      className={`servicios-detalle content-center flex flex-col gap-25 h-auto justify-center ${classNameContainer}`}
    >
      {header && header}

      <div
        className={`grid ${mobileColsClass}  md:grid-cols-4 w-full max-w-6xl mx-auto px-4 text-center`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center relative px-4 gap-5 ${
              index !== 0
                ? `md:before:absolute md:before:left-0 md:before:top-[-20px] md:before:bottom-[-20px]  ${
                    item.titulo ? "md:before:w-px md:before:bg-gray-300" : ""
                  } `
                : ""
            }`}
          >
            {item.imagen ? (
              <img className="w-[auto] h-[100px] mx-auto" src={item.imagen} />
            ) : undefined}

            {item.titulo ? (
              <>
                <p className={item.classNameTitulo}>{item.titulo}</p>
                <p className={item.classNameSubtitulo}>{item.subtitulo}</p>
              </>
            ) : undefined}
          </div>
        ))}
      </div>
    </section>
  );
}
