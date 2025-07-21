import { useState, useEffect } from "react";

export default function Postula() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [puestoPostulacion, setPuestoPostulacion] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  // Validar email con regex simple
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  // Validar que nombre no esté vacío y email válido
  useEffect(() => {
    setCanSubmit(
      name.trim() !== "" &&
        isValidEmail &&
        telefono.trim() !== "" &&
        puestoPostulacion.trim() !== ""
    );
  }, [name, isValidEmail]);

  return (
    <section
      id="contactosection"
      className="py-16 bg-white h-auto md:h-[736px]  content-center"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12">
        {/* Columna de información de contacto */}
        <div className="md:w-1/2 space-y-4 flex flex-col gap-10">
          <h2 className="font-normal text-[41px] leading-[50px] tracking-normal">
            Postula
          </h2>
          <p className="colorGray2 font-normal text-[16px] leading-[26.5px] tracking-normal">
            En VR Group estamos constantemente buscando gente apasionada por lo
            que hace y capaz de aportar a nuestro equipo. Si te interesa ser
            parte de nuestra agencia, revisa los puestos disponibles o envíanos
            tu CV .
          </p>

          <p className="text-blue-600">
            <a
              href="tel:+56961928852"
              className="hover:underline  font-light text-[30px] leading-[41px] tracking-normal"
            >
              (+56) 9 6192 8852
            </a>
          </p>
          <p className="text-blue-600">
            <a
              href="mailto:contacto@vrgroup.cl"
              className="hover:underline font-light text-[16px] leading-[26px] tracking-normal colorGray3"
            >
              contacto@vrgroup.cl
            </a>
          </p>
        </div>

        {/* Columna del formulario */}
        <div className="md:w-1/2 space-y-6">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (canSubmit) {
                //alert("Formulario enviado!");
              }
            }}
          >
            <div>
              <input
                type="text"
                id="contactName"
                name="name"
                placeholder="Nombre"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                id="contactEmail"
                name="email"
                placeholder="Correo Electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                id="telefono"
                name="name"
                placeholder="Telefono"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="text"
                id="postulacion"
                name="name"
                placeholder="Puesto de postulación"
                required
                value={puestoPostulacion}
                onChange={(e) => setPuestoPostulacion(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                id="contactMessage"
                name="message"
                rows={6}
                placeholder="Cuéntanos..."
                required
                className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="container-postulacion-btns flex gap-5">
              <button
                type="submit"
                className="colorRed  cursor-pointer   border border-red-500 text-white px-6 py-3 rounded-[20px] font-semibold  transition-colors disabled:opacity-50"
                disabled={!canSubmit}
              >
                <p className="font-bold text-[14px] leading-[14px] tracking-normal">
                  Cargar CV
                </p>
              </button>

              <button
                type="submit"
                className=" cursor-pointer  bg-red-600 text-white px-6 py-3 rounded-[20px] font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
                disabled={!canSubmit}
              >
                <p className="font-bold text-[14px] leading-[14px] tracking-normal">
                  Enviar postulación
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
