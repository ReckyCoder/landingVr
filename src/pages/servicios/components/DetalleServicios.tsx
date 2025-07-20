export default function DetalleServicios() {
  return (
    <section className="servicios-detalle px-4 py-10 mb-10">
      <h1 className="max-w-[700px] mx-auto !text-[32px] leading-[48px] font-normal text-center">
        VR Group es una solución integral para servicios profesionales de marca,
        diseño y desarrollo.
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto h-[100px] mt-20 text-center relative gap-x-6">
        {/* Elemento 1 */}
        <div className="flex flex-col justify-center border-r border-gray-300 md:border-none">
          <p className="font-semibold text-[48px] leading-[48px] colorRed !font-fontbold">
            132
          </p>
          <p className="text-sm text-gray-500">Proyectos completados</p>
        </div>

        {/* Elemento 2 */}
        <div className="flex flex-col justify-center relative">
          {/* Línea divisoria solo visible en md+ */}
          <div className="hidden md:block absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />
          <p className="font-semibold text-[48px] leading-[48px] colorRed !font-fontbold">
            97
          </p>
          <p className="text-sm text-gray-500">Clientes felices</p>
        </div>

        <div className="col-span-2 block md:hidden border-b border-gray-300 mt-5 mb-5 " />

        {/* Elemento 3 */}

        <div className="flex flex-col justify-center relative md:border-none border-r border-gray-300">
          {/* Línea vertical solo visible en pantallas grandes */}
          <div className="hidden md:block absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />

          <p className="font-semibold text-[48px] leading-[48px] colorRed !font-fontbold">
            32
          </p>
          <p className="text-sm text-gray-500">Awards Win</p>
        </div>

        {/* Elemento 4 */}
        <div className="flex flex-col justify-center relative">
          <div className="hidden md:block absolute top-[-40px] bottom-[-40px] left-0 w-px bg-gray-300" />
          <p className="font-semibold text-[48px] leading-[48px] colorRed !font-fontbold">
            50
          </p>
          <p className="text-sm text-gray-500">Awesome Team</p>
        </div>
      </div>
    </section>
  );
}
