export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2e2096] to-[#e3314f] py-2 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo - Costado Izquierdo */}
        <div className="flex-shrink-0 h-10 overflow-hidden w-[300px] flex items-center">
          <img
            src="/ofilab_blanco.png"
            alt="OFILAB"
            className="h-16 w-auto object-contain object-left scale-150 origin-left -my-3"
          />
        </div>

        {/* Copyright - Costado Derecho */}
        <div className="text-center sm:text-right">
          <p className="text-white/95 text-xs font-medium">
            Copyright © 2026 | OFILAB, todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}


