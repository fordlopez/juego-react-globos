
import React from 'react'
import { GloboContext } from '../GloboContex/GloboContex'
import './PantallaFinal.css'


function PantallaFinal(){

  const {botonReiniciar} =React.useContext(GloboContext)
    return(

  <div className="resultados-body">
      {/* Nubes decorativas */}
      <div className="resultados-cloud resultados-cloud-1"></div>
      <div className="resultados-cloud resultados-cloud-2"></div>

      {/* Globos decorativos flotando */}
      <div className="resultados-balloon-float resultados-balloon-float-1">🎈</div>
      <div className="resultados-balloon-float resultados-balloon-float-2">🎈</div>

      <div className="resultados-container">
        
        {/* Tarjeta de resultados */}
        <div className="resultados-card">
          
          {/* Encabezado celebración */}
          <div className="resultados-header-emoji">🎉</div>
          <h2 className="resultados-title">¡Juego Terminado!</h2>
          <div className="resultados-divider"></div>

          {/* Estadísticas */}
          <div className="resultados-stats">
            
            <div className="resultados-row resultados-row-default">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>🧒</span> Jugador
              </div>
              <div className="resultados-row-value">María</div>
            </div>

            <div className="resultados-row resultados-row-score">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>🏆</span> Puntaje Final
              </div>
              <div className="resultados-row-value">24</div>
            </div>

            <div className="resultados-row resultados-row-blue">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>🎈</span> Globos Explotados
              </div>
              <div className="resultados-row-value">12</div>
            </div>

            <div className="resultados-row resultados-row-green">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>😊</span> Globos Positivos
              </div>
              <div className="resultados-row-value">10</div>
            </div>

            <div className="resultados-row resultados-row-red">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>😰</span> Globos Negros
              </div>
              <div className="resultados-row-value">2</div>
            </div>

          </div>

          {/* Mensaje de felicitación */}
          <div className="resultados-congrats-box">
            <div className="resultados-congrats-emoji">🌟</div>
            <div className="resultados-congrats-title">¡Muy bien!</div>
            <div className="resultados-congrats-subtitle">¡Sigue practicando para ser un maestro!</div>
          </div>

          {/* Botón volver a jugar */}
          <button className="resultados-btn-restart" onClick={botonReiniciar}>
            🔄 Volver a Jugar
          </button>

        </div>
      </div>

      {/* Césped decorativo */}
      <div className="resultados-grass-footer"></div>
    </div>
    )
}

export{PantallaFinal}