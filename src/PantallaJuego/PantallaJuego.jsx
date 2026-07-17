
import { GloboContext } from '../GloboContex/GloboContex';
import { TableroJuego } from '../TableroJueego/TableroJuego';

import './PantallaJuego.css'

import React from 'react';

function PantallaJuego() {

  const {
    tiempo,
    puntos,nombre,GloboSX,
    
  } = React.useContext(GloboContext)

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
              <div className="juego-player-name-value">{nombre}</div>
            </div>
          </div>

          {/* Puntaje */}
          <div className="juego-stat-box juego-stat-score">
            <div className="juego-stat-label">⭐ PUNTOS</div>
            <div className="juego-stat-value">{puntos}</div>
          </div>

          {/* Tiempo */}
          <div className="juego-stat-box juego-stat-time">
            <div className="juego-stat-label">⏱️ TIEMPO</div>
            <h1 className="juego-stat-value">{tiempo}</h1>
          </div>

          {/* Globos explotados */}
          <div className="juego-stat-box juego-stat-popped">
            <div className="juego-stat-label">🎈 EXPLOTADOS</div>
            <div className="juego-stat-value">{GloboSX}</div>
          </div>

        </div>

        {/* Área de juego */}
        <div className="juego-area">
<TableroJuego/>
          {/* Texto indicador del área */}
          <div className="juego-area-placeholder">
       
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

export { PantallaJuego }