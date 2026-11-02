import { useEffect, useRef } from 'react'

export function BlueprintAtmosphere() {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const progress = window.scrollY / max
      layerRef.current?.style.setProperty('--blueprint-scroll', progress.toFixed(4))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={layerRef} className="blueprint-atmosphere" aria-hidden="true">
      <div className="blueprint-atmosphere__grid" />
      <svg className="blueprint-atmosphere__drawing" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <g className="blueprint-atmosphere__axes">
          <path d="M72 98H418M98 72V302M1082 708H1372M1340 596V830" />
          <path d="M72 91v14M98 91v14M124 91v14M150 91v14M176 91v14M202 91v14M228 91v14M254 91v14M280 91v14M306 91v14" />
        </g>
        <g className="blueprint-atmosphere__structure">
          <path d="M18 742L228 528l196 102 218-268 184 123 232-286 364 196" />
          <path d="M228 528v214M424 630v112M642 362v380M826 485v257M1058 199v543M1240 298v444" />
          <path d="M228 528l196 214M424 630l218 112M642 362l184 380M826 485l232 257M1058 199l182 543" />
        </g>
        <g className="blueprint-atmosphere__nodes">
          <circle cx="228" cy="528" r="5"/><circle cx="424" cy="630" r="5"/><circle cx="642" cy="362" r="5"/><circle cx="826" cy="485" r="5"/><circle cx="1058" cy="199" r="5"/><circle cx="1240" cy="298" r="5"/>
        </g>
        <g className="blueprint-atmosphere__dimensions">
          <path d="M184 790H1090M184 780v20M1090 780v20M1138 194V741M1128 194h20M1128 741h20" />
          <text x="586" y="815">9060 mm / STRUCTURAL AXIS</text>
          <text x="1162" y="470" transform="rotate(90 1162 470)">5470 mm / CLEAR HEIGHT</text>
          <text x="654" y="342">N-14 / M24</text><text x="1072" y="188">AXIS 04</text><text x="238" y="515">C-07</text>
        </g>
      </svg>
      <div className="blueprint-atmosphere__readout"><span>ND / LIVE STRUCTURAL LAYER</span><b>AXIS 04 — 1090</b></div>
    </div>
  )
}
