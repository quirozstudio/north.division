const completed = [
  ['01', 'VIVIENDAS MONTEAGUDO', 'RESIDENTIAL'],
  ['02', 'AMPLIACIÓN GALARFOODS', 'INDUSTRIAL'],
  ['03', 'OFICINAS LANDABEN', 'COMMERCIAL'],
  ['04', 'CINES ARTEA', 'FACADE SYSTEM'],
  ['05', 'PÓRTICO ARTEA', 'STEEL STRUCTURE'],
]

const pipeline = [
  'PUENTE DE ELIZONDO', 'CÁMARA 55', 'DONOSTI — PASARELA', 'DONOSTI — ASCENSOR',
  'GUITARRAS ARTZAIA', 'ESCALERAS FRISA', 'ESCALERAS EGÜÉS', 'NAVIGATOR EJEA',
]

export function ProjectsLedger() {
  return (
    <section id="projects" className="projects">
      <header className="section-heading section-heading--projects">
        <span>ND / PROJECT RECORD</span>
        <p>STRUCTURES<br />IN THE REAL WORLD.</p>
      </header>
      <div className="projects__built">
        <div className="projects__label"><span>BUILT / DELIVERED</span><b>05</b></div>
        <div className="projects__rows">
          {completed.map(([index, name, type]) => (
            <article key={name}><span>{index}</span><h3>{name}</h3><p>{type}</p><i>↗</i></article>
          ))}
        </div>
      </div>
      <div className="projects__pipeline">
        <div className="projects__label"><span>PROJECT PIPELINE</span><b>08</b></div>
        <div className="projects__tags">{pipeline.map((project) => <span key={project}>{project}</span>)}</div>
        <small>Estado según el dossier facilitado. Sujeto a actualización documental.</small>
      </div>
    </section>
  )
}
