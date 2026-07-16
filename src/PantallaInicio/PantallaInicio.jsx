import React from 'react';
import './PantallaInicio.css'
import { GloboContext } from '../GloboContex/GloboContex';
function PantallaInicio() {

  const {
    botonIniciar,
  } = React.useContext(GloboContext)

  return (
    <div className="inicio-body">
      {/* Nubes decorativas */}
      <div className="inicio-cloud inicio-cloud-1"></div>
      <div className="inicio-cloud inicio-cloud-2"></div>
      <div className="inicio-cloud inicio-cloud-3"></div>

      {/* Globos decorativos flotando */}
      <div className="inicio-balloon-float inicio-balloon-float-1">🎈</div>
      <div className="inicio-balloon-float inicio-balloon-float-2">🎈</div>
      <div className="inicio-balloon-float inicio-balloon-float-3">🎈</div>
      <div className="inicio-balloon-float inicio-balloon-float-4">🎈</div>

      <div className="inicio-container">

        {/* Título principal */}
        <div className="inicio-main-title">
          <span className="inicio-emoji">🎈</span>
          <h1>Explota los Globos</h1>
          <p>¡Explota todos los globos antes de que se acabe el tiempo!</p>
        </div>

        {/* Ilustración de globos */}
        <div className="inicio-balloon-illustration">
          🎈🎈🎈
        </div>

        {/* Tarjeta principal */}
        <div className="inicio-card">

          {/* Campo de nombre */}
          <div className="inicio-input-group">
            <label className="inicio-input-label">👤 ¿Cómo te llamas?</label>
            <input
              type="text"
              className="inicio-input-field"
              placeholder="Escribe tu nombre aquí..."
            />
          </div>

          {/* Instrucciones */}
          <div className="inicio-instructions-box">
            <h3>📖 Instrucciones</h3>
            <div className="inicio-instruction-item">
              <span className="inicio-instruction-icon">👆</span> Haz clic sobre los globos
            </div>
            <div className="inicio-instruction-item">
              <span className="inicio-instruction-icon">⭐</span> Consigue la mayor cantidad de puntos
            </div>
            <div className="inicio-instruction-item">
              <span className="inicio-instruction-icon">⚫</span> Evita los globos negros
            </div>
            <div className="inicio-instruction-item">
              <span className="inicio-instruction-icon">⏱️</span> Tienes 30 segundos
            </div>
          </div>

          {/* Tabla de puntos */}
          <h3 className="inicio-scores-title">🏆 Tabla de Puntos</h3>
          <div className="inicio-scores-grid">

            <div className="inicio-score-card inicio-score-red">
              <div className="inicio-score-balloon-emoji">🔴</div>
              <div className="inicio-score-balloon-name">Globo Rojo</div>
              <div className="inicio-score-balloon-value">+1</div>
            </div>

            <div className="inicio-score-card inicio-score-green">
              <div className="inicio-score-balloon-emoji">🟢</div>
              <div className="inicio-score-balloon-name">Globo Verde</div>
              <div className="inicio-score-balloon-value">+2</div>
            </div>

            <div className="inicio-score-card inicio-score-blue">
              <div className="inicio-score-balloon-emoji">🔵</div>
              <div className="inicio-score-balloon-name">Globo Azul</div>
              <div className="inicio-score-balloon-value">+5</div>
            </div>

            <div className="inicio-score-card inicio-score-black">
              <div className="inicio-score-balloon-emoji">⚫</div>
              <div className="inicio-score-balloon-name">Globo Negro</div>
              <div className="inicio-score-balloon-value">-3</div>
            </div>

          </div>

          {/* Botón comenzar */}
          <button className="inicio-btn-start" onClick={() => {
            botonIniciar();

          }}>
            🎮 Comenzar Juego
          </button>

        </div>
      </div>

      {/* Césped decorativo */}
      <div className="inicio-grass-footer"></div>
    </div>
  );

}

export { PantallaInicio }