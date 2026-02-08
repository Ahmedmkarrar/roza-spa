"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Pages that have a dark hero image background
  const hasDarkHero = ["/", "/services", "/about", "/gallery", "/contact"].includes(pathname);
  const isTransparent = hasDarkHero && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <h1
            className={`font-display text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-dark"
            }`}
          >
            Roza<span className="text-primary">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? isTransparent
                    ? "text-white font-medium"
                    : "text-primary font-medium"
                  : isTransparent
                    ? "text-white/70 hover:text-white"
                    : "text-text-light hover:text-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://rozamassage.glossgenius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm px-7 py-3 rounded-full transition-all duration-300 font-semibold ${
              isTransparent
                ? "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white hover:text-primary-dark"
                : "bg-gradient-pink text-white shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)] hover:-translate-y-0.5"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden relative z-[60] p-2 transition-colors ${
            open ? "text-dark" : isTransparent ? "text-white" : "text-dark"
          }`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`text-3xl font-display transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-300 hover:text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-pink text-white text-sm px-10 py-4 rounded-full mt-4 font-semibold shadow-[0_4px_15px_rgba(196,120,139,0.3)]"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
