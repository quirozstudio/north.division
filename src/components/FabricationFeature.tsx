export function FabricationFeature() {
  const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

  return (
    <section id="fabrication" className="fabrication" aria-labelledby="fabrication-title">
      <header className="fabrication__header">
        <span>ND / FIELD OPERATIONS</span>
        <p>03 — FABRICATION</p>
      </header>
      <div className="fabrication__statement">
        <h2 id="fabrication-title">WHERE ENGINEERING<br /><span>MEETS STEEL.</span></h2>
        <p>Precisión de taller, control en obra y ejecución sobre estructuras reales.</p>
      </div>
      <div className="fabrication__frames">
        <figure className="fabrication__frame fabrication__frame--primary">
          <img src={asset('fabrication-weld.jpeg')} alt="Soldador trabajando sobre una unión de una estructura metálica" loading="lazy" decoding="async" />
          <figcaption><span>01 / JOINT EXECUTION</span><b>WELDING PROCESS</b></figcaption>
        </figure>
        <figure className="fabrication__frame fabrication__frame--secondary">
          <img src={asset('fabrication-height.jpeg')} alt="Operario soldando una estructura metálica en altura" loading="lazy" decoding="async" />
          <figcaption><span>02 / ON-SITE WORK</span><b>ASSEMBLY AT HEIGHT</b></figcaption>
        </figure>
      </div>
      <div className="fabrication__footer" aria-hidden="true"><span>STEEL / HEAT / PRECISION</span><i /><b>ND — 03</b></div>
    </section>
  )
}
