"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contacto") {
        setIsContactOpen(true)
      }
    }

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (anchor && anchor.getAttribute("href") === "#contacto") {
        e.preventDefault()
        setIsContactOpen(true)
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)
    document.addEventListener("click", handleGlobalClick)
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      document.removeEventListener("click", handleGlobalClick)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const closeContactModal = () => {
    setIsContactOpen(false)
    if (window.location.hash === "#contacto") {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      )
    }
  }


  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container h-10 overflow-hidden w-[240px] flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <img
                src="/Logo_transparente.png"
                alt="OFILAB"
                className="h-16 w-auto object-contain object-left scale-[1.8] origin-left -mt-1 -mb-3"
              />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className={`hamburger-btn ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Sidebar Drawer */}
      <div className={`sidebar-drawer ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <Link href="/catalogo" className="sidebar-link" onClick={closeMenu}>
              <i className="fas fa-search-plus"></i>
              Catálogo
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                closeMenu()
                setIsContactOpen(true)
              }}
              className="sidebar-link w-full text-left bg-transparent border-none p-0 cursor-pointer"
            >
              <i className="fas fa-envelope"></i>
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón de Cuenta */}
        <div className="mt-4 flex flex-col gap-3">
          <a
            href="https://micuenta.ofimundo.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-account text-center py-3 bg-linear-to-br from-(--ofimundo-purple) to-(--ofimundo-magenta) text-white rounded-lg text-sm font-semibold hover:from-[#241a78] hover:to-[#c62842] transition"
            onClick={closeMenu}
          >
            MI CUENTA
          </a>
        </div>

        <div className="sidebar-footer">
          <p>© 2026 OFILAB. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Contact Modal Overlay */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-[#2d2944]/65 backdrop-blur-xs animate-modal-fade"
          onClick={closeContactModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-[720px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform animate-modal-scale flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#e3314f] to-[#2e2096] p-6 md:p-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-building text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Nuestros canales de comunicación
                </h3>
              </div>
              <button
                onClick={closeContactModal}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-10 w-10 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Cerrar modal"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 bg-[#f8fafc] space-y-6">
              
              {/* Row 1: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Email Box */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-all duration-200">
                  <div className="h-12 w-12 bg-[#e3314f] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#e3314f] font-bold uppercase tracking-wider mb-1">
                      Customer Success Manager
                    </p>
                    <a
                      href="mailto:mallende@ofimundo.cl"
                      className="text-sm md:text-base font-bold text-[#2d2944] hover:text-[#e3314f] transition break-all"
                    >
                      mallende@ofimundo.cl
                    </a>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-all duration-200">
                  <div className="h-12 w-12 bg-[#2e2096] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#2e2096] font-bold uppercase tracking-wider mb-1">
                      Teléfono
                    </p>
                    <div className="flex flex-col gap-0.5">
                      <a
                        href="tel:+56228104711"
                        className="text-sm md:text-base font-bold text-[#2d2944] hover:text-[#2e2096] transition"
                      >
                        2 2810 4711
                      </a>
                      <a
                        href="tel:+56977920209"
                        className="text-sm md:text-base font-bold text-[#2d2944] hover:text-[#2e2096] transition"
                      >
                        +56 9 7792 0209
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Row 2: Address */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4 hover:shadow-md transition-all duration-200">
                <div className="h-12 w-12 bg-[#2e2096] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <p className="text-[11px] text-[#2e2096] font-bold uppercase tracking-wider mb-1">
                    Dirección
                  </p>
                  <p className="text-sm md:text-base font-bold text-[#2d2944]">
                    Av. Providencia 1208, Oficina 207
                  </p>
                  <p className="text-xs text-gray-500 font-medium font-sans">
                    Providencia, Santiago, Chile
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

