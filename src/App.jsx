export default function DentalLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              Clínica Odontológica en Cúcuta
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Recupera tu sonrisa con atención profesional y moderna
            </h1>

            <p className="mt-6 text-lg text-cyan-50 leading-relaxed">
              Especialistas en diseño de sonrisa, ortodoncia, implantes y limpieza dental.
              Agenda tu valoración y recibe atención personalizada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573001234567"
                className="bg-white text-sky-700 px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Agendar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-white px-6 py-4 rounded-2xl font-semibold hover:bg-white hover:text-sky-700 transition"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold">+500</h3>
                <p className="text-sm text-cyan-100">Pacientes felices</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-sm text-cyan-100">Años de experiencia</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-cyan-100">Atención WhatsApp</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="Odontóloga atendiendo paciente"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Tecnología moderna y atención humana para ayudarte a mejorar tu salud oral y tu confianza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diseño de Sonrisa",
                desc: "Transforma tu sonrisa con procedimientos estéticos personalizados.",
              },
              {
                title: "Ortodoncia",
                desc: "Brackets y alineadores para corregir tu sonrisa cómodamente.",
              },
              {
                title: "Implantes Dentales",
                desc: "Recupera funcionalidad y estética con implantes seguros.",
              },
              {
                title: "Limpieza Dental",
                desc: "Prevención y cuidado profesional para una boca saludable.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700 text-2xl mb-5">
                  🦷
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop"
              alt="Paciente feliz"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-sky-600 font-semibold uppercase tracking-wide">
              ¿Por qué elegirnos?
            </span>

            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Atención cercana, tecnología moderna y resultados reales
            </h2>

            <div className="mt-8 space-y-6">
              {[
                "Valoración personalizada para cada paciente.",
                "Equipos modernos y procedimientos seguros.",
                "Facilidades de pago y atención rápida.",
                "Seguimiento continuo después de cada tratamiento.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-sky-100 text-sky-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Lo que dicen nuestros pacientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Laura Gómez",
                comment:
                  "Excelente atención y resultados increíbles en mi diseño de sonrisa.",
              },
              {
                name: "Carlos Méndez",
                comment:
                  "Muy profesionales. El proceso fue rápido y me explicaron todo claramente.",
              },
              {
                name: "Andrea Torres",
                comment:
                  "Me sentí segura desde la primera cita. Recomiendo totalmente la clínica.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  “{review.comment}”
                </p>
                <h4 className="font-bold">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-600 to-cyan-500 rounded-[40px] p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold leading-tight">
            Agenda tu valoración hoy mismo
          </h2>

          <p className="mt-5 text-lg text-cyan-100 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a mejorar tu sonrisa y tu confianza.
          </p>

          <a
            href="https://wa.me/573001234567"
            className="inline-block mt-8 bg-white text-sky-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Dental Smile</h3>
            <p className="mt-3 text-gray-400 max-w-md">
              Especialistas en salud oral y estética dental en Cúcuta.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contacto</h4>
            <p>📍 Cúcuta, Colombia</p>
            <p>📞 +57 300 123 4567</p>
            <p>✉️ contacto@dentalsmile.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
