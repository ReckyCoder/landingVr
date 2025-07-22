import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
