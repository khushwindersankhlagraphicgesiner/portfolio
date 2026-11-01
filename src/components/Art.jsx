// Original generated design compositions, so no external images are needed.
export default function Art({ p }) {
  if (p.image) return <img src={p.image} alt={`${p.title} – concept project`} loading="lazy" />
  const [a, b, c] = p.colors
  const shapes = {
    circles: <><circle cx="130" cy="150" r="90" fill={a}/><circle cx="260" cy="210" r="60" fill={c}/><circle cx="200" cy="90" r="30" fill="none" stroke={c} strokeWidth="3"/></>,
    bars: <>{[0,1,2,3,4].map(i=><rect key={i} x={50+i*62} y={260-(i+1)*38} width="44" height={(i+1)*38} fill={i%2?c:a}/>)}</>,
    arch: <><path d="M80 290V150a120 120 0 0 1 240 0v140z" fill={a}/><circle cx="200" cy="140" r="46" fill={c}/></>,
    burst: <><polygon points="200,30 230,110 315,100 255,165 300,240 215,215 200,290 170,215 90,245 140,170 70,110 150,110" fill={a}/><rect x="40" y="250" width="320" height="26" fill={c}/></>,
    pill: <><rect x="150" y="50" width="100" height="210" rx="50" fill={a}/><rect x="170" y="30" width="60" height="40" rx="10" fill={c}/><circle cx="90" cy="230" r="34" fill={c} opacity=".6"/></>,
    cup: <><path d="M110 110h150l-16 150a20 20 0 0 1-20 18h-78a20 20 0 0 1-20-18z" fill={a}/><path d="M258 135h22a26 26 0 0 1 0 52h-30" fill="none" stroke={a} strokeWidth="10"/><rect x="95" y="90" width="180" height="20" fill={c}/></>,
    slides: <>{[0,1,2].map(i=><rect key={i} x={60+i*70} y={70+i*14} width="150" height="190" rx="14" fill={i===2?a:c} opacity={i===2?1:.35+i*.2}/>)}</>,
    ui: <><rect x="50" y="50" width="300" height="200" rx="12" fill={c} opacity=".12"/><rect x="70" y="80" width="150" height="16" fill={c}/><rect x="70" y="108" width="110" height="10" fill={c} opacity=".5"/><rect x="70" y="140" width="90" height="30" rx="15" fill={a}/><rect x="240" y="80" width="90" height="140" rx="8" fill={a} opacity=".8"/></>
  }
  return (
    <svg viewBox="0 0 400 320" role="img" aria-label={`${p.title} – concept composition`} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="320" fill={b}/>{shapes[p.art]}
    </svg>
  )
}
