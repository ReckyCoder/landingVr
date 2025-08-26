import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import "./styles.css";

type Postulacion = {
  nombre: string;
  email: string;
  telefono: string;
  puesto: string;
  profesion: string;
  experiencia: string;
  pretensiones: string;
  fecha: string;
  cv: string | null;
};

export default function TablaPostulaciones() {
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Postulacion | null; direction: "asc" | "desc" }>({ key: null, direction: "asc" });

  // 👇 paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://test5.vrdigitaltech.cl/api/listar_postulaciones.php")
      .then((res) => res.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setPostulaciones(data);
        } catch (err) {
          console.error("Error parsing JSON:", err);
        }
      })
      .catch((err) => console.error("Error cargando postulaciones:", err));
  }, []);

  // ordenar según columna
  const sortedPostulaciones = [...postulaciones].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valA: any = a[sortConfig.key];
    let valB: any = b[sortConfig.key];

    if (!isNaN(valA) && !isNaN(valB)) {
      valA = Number(valA);
      valB = Number(valB);
    } else {
      valA = String(valA).toLowerCase();
      valB = String(valB).toLowerCase();
    }

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key: keyof Postulacion) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const SortIcon = ({ column }: { column: keyof Postulacion }) => {
    if (sortConfig.key !== column) return null;
    return sortConfig.direction === "asc" ? (
      <ArrowUp size={14} className="inline ml-1" />
    ) : (
      <ArrowDown size={14} className="inline ml-1" />
    );
  };

  // 👇 cálculo paginación
  const totalPages = Math.ceil(sortedPostulaciones.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedPostulaciones.slice(startIndex, startIndex + itemsPerPage);

  // 👇 cambiar items por página
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // reset a la página 1 al cambiar
  };

  return (
    <div className="postulaciones-container">
      <h2>Lista de Postulaciones</h2>

      {/* Selector de cantidad por página */}
      <div className="page-size-selector">
        <label>
          Mostrar:&nbsp;
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            {[5, 10, 25, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          &nbsp;registros por página
        </label>
      </div>

      <table className="postulaciones-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("nombre")}>
              Nombre <SortIcon column="nombre" />
            </th>
            <th onClick={() => handleSort("email")}>
              Email <SortIcon column="email" />
            </th>
            <th onClick={() => handleSort("telefono")}>
              Teléfono <SortIcon column="telefono" />
            </th>
            <th onClick={() => handleSort("puesto")}>
              Puesto <SortIcon column="puesto" />
            </th>
            <th onClick={() => handleSort("profesion")}>
              Profesión <SortIcon column="profesion" />
            </th>
            <th onClick={() => handleSort("experiencia")}>
              Años exp. <SortIcon column="experiencia" />
            </th>
            <th onClick={() => handleSort("pretensiones")}>
              Renta <SortIcon column="pretensiones" />
            </th>
            <th onClick={() => handleSort("fecha")}>
              Fecha <SortIcon column="fecha" />
            </th>
            <th>CV</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan={9} className="postulaciones-empty">
                No hay postulaciones aún
              </td>
            </tr>
          ) : (
            currentItems.map((p, i) => (
              <tr key={i}>
                <td>{p.nombre}</td>
                <td>{p.email}</td>
                <td>{p.telefono}</td>
                <td>{p.puesto}</td>
                <td>{p.profesion}</td>
                <td>{p.experiencia}</td>
                <td>{p.pretensiones}</td>
                <td>{p.fecha}</td>
                <td className="text-center">
                  {p.cv ? (
                    <a
                      href={p.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-descargar"
                    >
                      Ver
                    </a>
                  ) : (
                    "Sin CV"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Paginador */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
