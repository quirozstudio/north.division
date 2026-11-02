export function CertificationPlate() {
  return (
    <section id="standard" className="standard">
      <div className="standard__context">
        <span>TECHNICAL STANDARD / 0099-CPR-A81-0308</span>
        <h2>BUILT TO<br />A HIGHER<br />STANDARD.</h2>
        <p>Control de producción en fábrica para componentes de estructuras de acero.</p>
      </div>
      <div className="standard__plate">
        <div className="standard__plate-head"><span>ND / PRODUCTION CONTROL</span><span>ES · 31006</span></div>
        <strong>EN 1090-2</strong>
        <div className="standard__class"><span>EXECUTION CLASS</span><b>EXC4</b></div>
        <dl>
          <div><dt>PRODUCT</dt><dd>STEEL STRUCTURAL COMPONENTS</dd></div>
          <div><dt>METHOD</dt><dd>DECLARATION METHOD 2</dd></div>
          <div><dt>ISSUER</dt><dd>AENOR / NOTIFIED BODY 0099</dd></div>
          <div><dt>DOCUMENT</dt><dd>MODIFIED 29.10.2024</dd></div>
        </dl>
        <p className="standard__notice">Referencia documental aportada. Consultar vigencia actual de la certificación.</p>
        <i className="standard__bolt standard__bolt--one"/><i className="standard__bolt standard__bolt--two"/><i className="standard__bolt standard__bolt--three"/><i className="standard__bolt standard__bolt--four"/>
      </div>
    </section>
  )
}
