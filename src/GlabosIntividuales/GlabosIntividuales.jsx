function GlabosIntividuales({ color, puntos, id }) {




  return (

    <svg id={id} puntos={puntos} className="tablero-globo" style={{ color }} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="45" rx="38" ry="42" fill="currentColor" />
      <ellipse cx="35" cy="30" rx="12" ry="18" fill="white" opacity="0.3" />
      <polygon points="42,85 50,95 58,85" fill="currentColor" />
      <path d="M50,95 Q52,105 48,115 Q46,120 50,120" stroke="#888" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>

  )
}

export { GlabosIntividuales }