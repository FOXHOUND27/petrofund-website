"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
  const [mediaSubMenuOpen, setMediaSubMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMenuOpen(false);
    setAboutSubMenuOpen(false);
    setMediaSubMenuOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when mouse is near the top (within 100px)
      if (e.clientY < 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

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
    { href: "/media/gallery", label: "Gallery" },
  ];

  const aboutSubMenuItems = [
    { href: "/about/message-from-ceo", label: "Message from CEO" },
    { href: "/about/company-profile", label: "Company Profile" },
    { href: "/about/our-management-team", label: "Our Management Team" },
    { href: "/about/board-of-trustees-page", label: "Board of Trustees" },
  ];

  return (
    <>
      <nav className="flex justify-center items-center sticky top-4 z-50 px-2 md:px-2">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : -150, // Added conditional animation based on visibility
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Faster transition for better UX
          className="bg-white shadow-xl rounded-full px-4 md:px-8 w-[95%] flex justify-between items-center relative"
        >
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-[100px] h-[80px] md:w-[150px] md:h-[100px] flex items-center justify-center">
                <Image
                  src="/Logo/PetroLogo.png"
                  width={300}
                  height={60}
                  alt="Petrofund Logo"
                />
              </div>
            </motion.div>
          </Link>

          <ul className="hidden lg:flex justify-center items-center gap-4 xl:gap-8 py-4 text-[15px] xl:text-[16px] font-medium absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => {
              if (link.label === "About") return null;

              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative group font-semibold"
                >
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 relative whitespace-nowrap ${
                      pathname === link.href
                        ? "text-[#F47C20]"
                        : "text-[#4F3996] hover:text-[#F47C20]"
                    }`}
                  >
                    {link.label}
                    <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F47C20] group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              );
            })}

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1, duration: 0.4 }}
              className="relative font-semibold group"
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/about"
                  className={`font-semibold transition-colors duration-300 relative whitespace-nowrap ${
                    pathname === "/about"
                      ? "text-[#F47C20]"
                      : "text-[#4F3996] hover:text-[#F47C20]"
                  }`}
                >
                  About
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F47C20] group-hover:w-full transition-all duration-300" />
                </Link>
                <button
                  className={`transition-colors duration-300 focus:outline-none ${
                    pathname.startsWith("/about")
                      ? "text-[#F47C20]"
                      : "text-[#4F3996] hover:text-[#F47C20]"
                  }`}
                  onClick={() => setAboutSubMenuOpen((open) => !open)}
                  onBlur={() =>
                    setTimeout(() => setAboutSubMenuOpen(false), 150)
                  }
                  aria-haspopup="true"
                  aria-expanded={aboutSubMenuOpen}
                >
                  <motion.svg
                    animate={{ rotate: aboutSubMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
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
              </div>

              <AnimatePresence>
                {aboutSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-11 bg-white shadow-lg rounded-lg py-2 flex flex-col gap-1 min-w-[200px]"
                  >
                    {aboutSubMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-3 rounded transition-colors duration-200 ${
                          pathname === item.href
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
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
              transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              className="relative font-semibold group"
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/media"
                  className={`font-semibold transition-colors duration-300 relative whitespace-nowrap ${
                    pathname === "/media"
                      ? "text-[#F47C20]"
                      : "text-[#4F3996] hover:text-[#F47C20]"
                  }`}
                >
                  Media
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F47C20] group-hover:w-full transition-all duration-300" />
                </Link>
                <button
                  className={`transition-colors duration-300 focus:outline-none ${
                    pathname.startsWith("/media")
                      ? "text-[#F47C20]"
                      : "text-[#4F3996] hover:text-[#F47C20]"
                  }`}
                  onClick={() => setMediaSubMenuOpen((open) => !open)}
                  onBlur={() =>
                    setTimeout(() => setMediaSubMenuOpen(false), 150)
                  }
                  aria-haspopup="true"
                  aria-expanded={mediaSubMenuOpen}
                >
                  <motion.svg
                    animate={{ rotate: mediaSubMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
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
              </div>

              <AnimatePresence>
                {mediaSubMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-11 bg-white shadow-lg rounded-lg py-2 flex flex-col gap-1 min-w-[180px]"
                  >
                    {mediaSubMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-3 rounded transition-colors duration-200 ${
                          pathname === item.href
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
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
                className={`font-semibold transition-colors duration-300 relative whitespace-nowrap ${
                  pathname === "/contact"
                    ? "text-[#F47C20]"
                    : "text-[#4F3996] hover:text-[#F47C20]"
                }`}
              >
                Contact Us
                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F47C20] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden lg:block"
          >
            <a
              href="https://innovation.muhoko.org/student/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 xl:px-10 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-[15px]"
              >
                Login
              </motion.button>
            </a>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#4F3996] p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#4F3996] p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </motion.button>
                </div>

                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    if (link.label === "About") return null;

                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                            pathname === link.href
                              ? "bg-[#F47C20] text-white"
                              : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}

                  <motion.li
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 1 * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Link
                        href="/about"
                        className={`flex-1 px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                          pathname === "/about"
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
                      >
                        About
                      </Link>
                      <button
                        onClick={() => setAboutSubMenuOpen(!aboutSubMenuOpen)}
                        className={`px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                          pathname.startsWith("/about")
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
                      >
                        <motion.svg
                          animate={{ rotate: aboutSubMenuOpen ? 180 : 0 }}
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
                    </div>

                    <AnimatePresence>
                      {aboutSubMenuOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4 mt-2"
                        >
                          {aboutSubMenuItems.map((item, idx) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.2 }}
                            >
                              <Link
                                href={item.href}
                                className={`block px-4 py-3 text-base rounded-lg transition-colors duration-200 ${
                                  pathname === item.href
                                    ? "bg-[#F47C20] text-white"
                                    : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                                }`}
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
                      delay: navLinks.length * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Link
                        href="/media"
                        className={`flex-1 px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                          pathname === "/media"
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
                      >
                        Media
                      </Link>
                      <button
                        onClick={() => setMediaSubMenuOpen(!mediaSubMenuOpen)}
                        className={`px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                          pathname.startsWith("/media")
                            ? "bg-[#F47C20] text-white"
                            : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                        }`}
                      >
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
                    </div>

                    <AnimatePresence>
                      {mediaSubMenuOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4 mt-2"
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
                                className={`block px-4 py-3 text-base rounded-lg transition-colors duration-200 ${
                                  pathname === item.href
                                    ? "bg-[#F47C20] text-white"
                                    : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                                }`}
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
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        pathname === "/contact"
                          ? "bg-[#F47C20] text-white"
                          : "text-[#4F3996] hover:bg-[#F47C20] hover:text-white"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-8"
                >
                  <a
                    href="https://innovation.muhoko.org/student/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-colors duration-300 font-medium shadow-md text-base"
                    >
                      Login
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
