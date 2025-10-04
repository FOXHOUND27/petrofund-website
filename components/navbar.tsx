"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaSubMenuOpen, setMediaSubMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setMediaSubMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pel-operators", label: "Pel Operators" },
    { href: "/training", label: "Training" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/alumni", label: "Alumni" },
  ];

  const mediaSubMenuItems = [
    { href: "/media/news", label: "News" },
    { href: "/media/articles", label: "Articles" },
    { href: "/media/gallery", label: "Gallery" },
  ];

  return (
    <>
      <nav className="flex justify-center items-center sticky top-4 z-50 px-2 md:px-4">
        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-xl rounded-full px-4 md:px-8 w-[95%] flex justify-between items-center relative"
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-[100px] h-[80px] md:w-[150px] md:h-[100px] flex items-center justify-center">
                <span className="text-primary font-bold text-xl md:text-2xl">
                  PETROFUND
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <ul className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 py-4 text-[15px] xl:text-[16px] font-medium text-primary absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors duration-300 relative whitespace-nowrap"
                >
                  {link.label}
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}

            {/* Media Dropdown */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              className="relative"
            >
              <button
                className="hover:text-accent transition-colors duration-300 flex items-center gap-1 focus:outline-none"
                onClick={() => setMediaSubMenuOpen((open) => !open)}
                onBlur={() => setTimeout(() => setMediaSubMenuOpen(false), 150)}
                aria-haspopup="true"
                aria-expanded={mediaSubMenuOpen}
              >
                Media
                <motion.svg
                  animate={{ rotate: mediaSubMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {mediaSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white shadow-lg rounded-lg py-2 flex flex-col gap-1 min-w-[180px]"
                  >
                    {mediaSubMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <Link
                href="/contact"
                className="hover:text-accent transition-colors duration-300 relative whitespace-nowrap"
              >
                Contact Us
                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          </ul>

          {/* Donate Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden lg:block"
          >
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Login
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-primary p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-primary p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium text-primary hover:bg-secondary hover:text-accent rounded-lg transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}

                  {/* Media Submenu - Mobile */}
                  <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: navLinks.length * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <button
                      onClick={() => setMediaSubMenuOpen(!mediaSubMenuOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-primary hover:bg-secondary hover:text-accent rounded-lg transition-colors duration-200"
                    >
                      Media
                      <motion.svg
                        animate={{ rotate: mediaSubMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {mediaSubMenuOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4"
                        >
                          {mediaSubMenuItems.map((item, idx) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.2 }}
                            >
                              <Link
                                href={item.href}
                                className="block px-4 py-3 text-base text-primary hover:bg-secondary hover:text-accent rounded-lg transition-colors duration-200"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (navLinks.length + 1) * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-base font-medium text-primary hover:bg-secondary hover:text-accent rounded-lg transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>

                {/* Donate Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-8"
                >
                  <Link href="/donate">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-base"
                    >
                      Donate
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
