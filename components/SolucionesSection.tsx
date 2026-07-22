import Link from "next/link"

const benefits = [
  {
    icon: "fas fa-piggy-bank",
    title: "Reducción de Costos",
    description: "Optimiza tus gastos de impresión reduciendo costos de consumibles y energía hasta en un 30%."
  },
  {
    icon: "fas fa-sync-alt",
    title: "Continuidad Operativa",
    description: "Monitoreo proactivo de suministros y servicio técnico express para que tus operaciones nunca se detengan."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Seguridad de Documentos",
    description: "Políticas de liberación segura de impresión y control de acceso para proteger tu información confidencial."
  }
]

export function SolucionesSection() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-100 rounded-full text-sm font-semibold text-ofimundo-purple">
              <span className="w-2 h-2 rounded-full bg-ofimundo-magenta animate-pulse"></span>
              Especialistas en MPS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              Servicios de Impresión <br />
              <span className="text-gradient">Gestionados (MPS)</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              En <strong className="text-slate-800">OFILAB</strong> diseñamos e implementamos soluciones integrales de impresión a la medida de tu organización. Nos encargamos de todo para que tú te enfoques en tu negocio.
            </p>
            <div className="pt-2">
              <Link
                href="/catalogo"
                className="btn-account inline-block text-center bg-linear-to-br from-(--ofimundo-purple) to-(--ofimundo-magenta) text-white font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition"
              >
                Explorar Catálogo MPS →
              </Link>
            </div>
          </div>

          {/* Right Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit Cards */}
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`p-6 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition card-hover ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-ofimundo-purple text-xl mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

