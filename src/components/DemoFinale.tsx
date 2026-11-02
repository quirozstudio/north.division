import { BrandMark } from './BrandMark'

export function DemoFinale() {
  return (
    <section id="finale" className="finale">
      <div className="finale__backdrop" style={{ backgroundImage: `linear-gradient(90deg,rgba(1,3,4,.96),rgba(2,5,6,.66)),url(${import.meta.env.BASE_URL}assets/industrial-structure.webp)` }} aria-hidden="true" />
      <div className="finale__beam" aria-hidden="true" />
      <div className="finale__meta"><span>ND / ENGINEERING GROUP</span><span>PAMPLONA · NAVARRA</span></div>
      <h2>FROM CALCULATION<br /><span>TO CONSTRUCTION.</span></h2>
      <p>DISEÑO <i/> CÁLCULO <i/> FABRICACIÓN <i/> MONTAJE</p>
      <a href="#top">VOLVER AL INICIO <b>↑</b></a>
      <BrandMark compact />
    </section>
  )
}
