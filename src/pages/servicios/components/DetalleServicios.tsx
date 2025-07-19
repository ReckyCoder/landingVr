export default function DetalleServicios() {
  return (
    <section className="servicios-detalle px-4 py-10">
      <h1 className=" max-w-[700px] mx-auto !text-[32px] leading-[48px] font-normal text-center mb-10">
        VR Group es una solución integral para servicios profesionales de marca,
        diseño y desarrollo.
      </h1>

      <div className="flex justify-between items-center text-center max-w-6xl mx-auto h-[180px]">
        <div className="flex-1 flex flex-col justify-center">
          <p className="font-semibold text-[48px] leading-[48px] text-center colorRed">
            132
          </p>
          <p className="text-sm text-gray-500">Proyectos completados</p>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />
          <p className="font-semibold text-[48px] leading-[48px] text-center colorRed">
            97
          </p>
          <p className="text-sm text-gray-500">Clientes felices</p>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />
          <p className="font-semibold text-[48px] leading-[48px] text-center colorRed">
            32
          </p>
          <p className="text-sm text-gray-500">Awards Win</p>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />
          <p className="font-semibold text-[48px] leading-[48px] text-center colorRed">
            50
          </p>
          <p className="text-sm text-gray-500">Awesome Team</p>
        </div>
      </div>
    </section>
  );
}
