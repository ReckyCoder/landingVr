import { useState, useEffect, useRef } from "react";

export default function Postula() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [puestoPostulacion, setPuestoPostulacion] = useState("");
  const [profesion, setProfesion] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [renta, setRenta] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [cvNombre, setCvNombre] = useState<string>(""); 
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Validar email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  // Validar todos los campos obligatorios
  useEffect(() => {
    setCanSubmit(
      name.trim() !== "" &&
        isValidEmail &&
        telefono.trim() !== "" &&
        puestoPostulacion.trim() !== "" &&
        profesion.trim() !== "" &&
        experiencia.trim() !== "" &&
        renta.trim() !== "" &&
        cvFile !== null
    );
  }, [name, isValidEmail, telefono, puestoPostulacion, profesion, experiencia, renta, cvFile]);

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;

    const formData = new FormData();
    formData.append("nombre", name);
    formData.append("email", email);
    formData.append("telefono", telefono);
    formData.append("puesto", puestoPostulacion);
    formData.append("profesion", profesion);
    formData.append("experiencia", experiencia);
    formData.append("renta", renta);

    if (cvFile) {
      formData.append("cv", cvFile);
    }

    try {
      const response = await fetch("https://test5.vrdigitaltech.cl//api/upload.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      setMensaje(result);
    } catch (error) {
      console.error(error);
      setMensaje("Error al enviar la postulación.");
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
      setCvNombre(e.target.files[0].name);
    }
  };

  return (
    <section id="contactosection" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12">
        {/* Columna de información */}
        <div className="md:w-1/2 space-y-4 flex flex-col gap-10">
          <h2 className="font-normal text-[41px] leading-[50px]">Postula</h2>
          <p className="colorGray2 text-[16px] leading-[26.5px]">
            En VR Group estamos constantemente buscando gente apasionada...
          </p>
        </div>

        {/* Columna del formulario */}
        <div className="md:w-1/2 space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-3 rounded-md"/>
            <input type="email" placeholder="Correo Electrónico" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded-md"/>
            <input type="text" placeholder="Teléfono" required value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full border p-3 rounded-md"/>
            
            <select required value={puestoPostulacion} onChange={(e) => setPuestoPostulacion(e.target.value)} className="w-full border p-3 rounded-md">
              <option value="">Seleccione un puesto</option>
              <option value="Desarrollador Full Stack Semi Senior">Desarrollador Full Stack Semi Senior</option>
              <option value="Diseñador UX-UI">Diseñador UX-UI</option>
              <option value="Diseñador UX-UI">Desarrollador APPIAN</option>
              <option value="Diseñador UX-UI">Analista de Riesgo</option>
              <option value="Diseñador UX-UI">Director de Proyecto</option>
            </select>

            <input type="text" placeholder="Profesión" required value={profesion} onChange={(e) => setProfesion(e.target.value)} className="w-full border p-3 rounded-md"/>
            <input type="text" placeholder="Años de experiencia" required value={experiencia} onChange={(e) => setExperiencia(e.target.value)} className="w-full border p-3 rounded-md"/>
            <input type="text" placeholder="Pretensiones de renta" required value={renta} onChange={(e) => setRenta(e.target.value)} className="w-full border p-3 rounded-md"/>

            <div className="container-postulacion-btns flex gap-5">
              {/* Subida de CV */}
              <div className="flex gap-5 items-center">
                <button
                  type="button"
                  onClick={handleFileClick}
                  className="bg-red-600 text-white px-6 py-3 rounded-[20px] disabled:opacity-50 transition duration-200 cursor-pointer hover:shadow-lg hover:bg-red-700">
                  Cargar CV
                </button>

                {cvNombre && <span className="text-sm text-gray-700">{cvNombre}</span>}
                <input type="file" name="cv" accept=".pdf,.doc,.docx" required ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }}/>
              </div>

              <button type="submit" disabled={!canSubmit} 
              className="bg-red-600 text-white px-6 py-3 rounded-[20px] disabled:opacity-50 transition duration-200 cursor-pointer hover:shadow-lg hover:bg-red-700">
                Enviar postulación
              </button>
            </div>
          </form>

          {mensaje && <div className="mt-4 font-semibold text-gray-700">{mensaje}</div>}
        </div>
      </div>
    </section>
  );
}
