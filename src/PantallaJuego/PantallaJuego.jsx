
 import './PantallaJuego.css'
function PantallaJuego(){


    return (
   <div className="juego-body">
      {/* Nubes decorativas */}
      <div className="juego-cloud juego-cloud-1"></div>
      <div className="juego-cloud juego-cloud-2"></div>

      {/* Globos decorativos flotando */}
      <div className="juego-balloon-float juego-balloon-float-1">🎈</div>
      <div className="juego-balloon-float juego-balloon-float-2">🎈</div>

      <div className="juego-container">
        
        {/* Encabezado superior (HUD) */}
        <div className="juego-header">
          
          {/* Avatar + Nombre */}
          <div className="juego-player-info">
            <div className="juego-player-avatar">🧒</div>
            <div>
              <div className="juego-player-name-label">Jugador</div>
              <div className="juego-player-name-value">María</div>
            </div>
          </div>

          {/* Puntaje */}
          <div className="juego-stat-box juego-stat-score">
            <div className="juego-stat-label">⭐ PUNTOS</div>
            <div className="juego-stat-value">24</div>
          </div>

          {/* Tiempo */}
          <div className="juego-stat-box juego-stat-time">
            <div className="juego-stat-label">⏱️ TIEMPO</div>
            <div className="juego-stat-value">18s</div>
          </div>

          {/* Globos explotados */}
          <div className="juego-stat-box juego-stat-popped">
            <div className="juego-stat-label">🎈 EXPLOTADOS</div>
            <div className="juego-stat-value">7</div>
          </div>

        </div>

        {/* Área de juego */}
        <div className="juego-area">
          
          {/* Texto indicador del área */}
          <div className="juego-area-placeholder">
            <div className="juego-big-emoji">🎈</div>
            <div className="juego-placeholder-title">Área de Juego</div>
            <div className="juego-placeholder-subtitle">Los globos aparecerán aquí</div>
          </div>

          {/* Globos decorativos en bordes */}
          <div className="juego-balloon juego-balloon-1">🎈</div>
          <div className="juego-balloon juego-balloon-2">🎈</div>
          <div className="juego-balloon juego-balloon-3">🎈</div>
          <div className="juego-balloon juego-balloon-4">🎈</div>
          <div className="juego-balloon juego-balloon-5">🎈</div>
          <div className="juego-balloon juego-balloon-6">🎈</div>

        </div>

      </div>

      {/* Césped decorativo */}
      <div className="juego-grass-footer"></div>
    </div>
  );
    
}

export {PantallaJuego}