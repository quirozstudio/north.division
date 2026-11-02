import { TechnicalOverlay } from './TechnicalOverlay'

const capabilities = [
  {
    number: '01',
    verb: 'DESIGN',
    title: 'DESIGN & ENGINEERING',
    copy: 'Diseño, cálculo y modelado 3D de estructuras metálicas con una lectura completa del proceso constructivo.',
    data: ['3D MODEL', 'STEEL DETAILING', 'CONNECTIONS'],
  },
  {
    number: '02',
    verb: 'CALCULATE',
    title: 'STRUCTURAL ANALYSIS',
    copy: 'Análisis de cargas, resistencia y estabilidad para convertir cada decisión técnica en una estructura segura y fabricable.',
    data: ['LOAD PATH', 'STABILITY', 'VERIFICATION'],
  },
  {
    number: '03',
    verb: 'BUILD',
    title: 'FABRICATION & ASSEMBLY',
    copy: 'Fabricación, soldadura, ensamblaje y montaje coordinados desde taller hasta la puesta en obra.',
    data: ['FABRICATION', 'WELDING', 'ON-SITE ASSEMBLY'],
  },
]

export function CapabilitiesSequence() {
  return (
    <section id="capabilities" className="capabilities">
      <TechnicalOverlay />
      <header className="section-heading">
        <span>ND / CAPABILITIES</span>
        <p>DEL CÁLCULO<br />A LA MATERIA.</p>
      </header>
      <div className="capabilities__list">
        {capabilities.map((item) => (
          <article className="capability" key={item.number}>
            <div className="capability__number"><span>{item.number}</span><i /></div>
            <div className="capability__verb">{item.verb}</div>
            <div className="capability__copy">
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <div>{item.data.map((datum) => <span key={datum}>{datum}</span>)}</div>
            </div>
            <div className="capability__diagram" aria-hidden="true">
              <i /><i /><i /><b />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
