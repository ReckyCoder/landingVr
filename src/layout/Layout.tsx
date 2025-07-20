import ServiciosYConsultoria from "@/pages/home/components/ServiciosYConsultoria";
import Soluciones from "@/pages/home/components/Soluciones";
import Header from "@components/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}
