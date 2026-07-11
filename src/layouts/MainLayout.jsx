import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useSmoothScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/*
        On the Home page, the Navbar sits above the LoadingScreen overlay
        (z-50 vs z-200) so it is initially hidden behind the overlay.
        We give it a small entrance delay so it gracefully appears.
      */}
      <motion.div
        initial={isHome ? { opacity: 0, y: -8 } : false}
        animate={isHome ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
      </motion.div>

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
