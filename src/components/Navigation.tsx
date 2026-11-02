import { BrandMark } from './BrandMark'

export function Navigation({ visible }: { visible: boolean }) {
  const replayIntro = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('intro', '1')
    window.location.assign(url)
  }

  return (
    <header className={`navigation ${visible ? 'is-visible' : ''}`}>
      <a href="#top" className="navigation__brand"><BrandMark compact /></a>
      <nav aria-label="Principal">
        <a href="#capabilities">CAPABILITIES</a><a href="#standard">STANDARD</a><a href="#projects">PROJECTS</a><a href="#finale">CONTACT</a>
        <button type="button" onClick={replayIntro}>REPLAY INTRO</button>
      </nav>
    </header>
  )
}
