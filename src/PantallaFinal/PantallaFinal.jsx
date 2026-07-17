
import React from 'react'
import { GloboContext } from '../GloboContex/GloboContex'
import './PantallaFinal.css'


function PantallaFinal(){

  const {botonReiniciar,puntos,nombre,GloboSX,positivosGB,negativosGB} =React.useContext(GloboContext)
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
              <div className="resultados-row-value">{nombre}</div>
            </div>

            <div className="resultados-row resultados-row-score">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>🏆</span> Puntaje Final
              </div>
              <div className="resultados-row-value">{puntos}</div>
            </div>

            <div className="resultados-row resultados-row-blue">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>🎈</span> Globos Explotados
              </div>
              <div className="resultados-row-value">{GloboSX}</div>
            </div>

            <div className="resultados-row resultados-row-green">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>😊</span> Globos Positivos
              </div>
              <div className="resultados-row-value">{positivosGB}</div>
            </div>

            <div className="resultados-row resultados-row-red">
              <div className="resultados-row-label">
                <span style={{ fontSize: '22px' }}>😰</span> Globos Negros
              </div>
              <div className="resultados-row-value">{negativosGB}</div>
            </div>

          </div>

          {/* Mensaje de felicitación */}
      

        {/* Menos de 0 puntos - Mal rendimiento */}
        {  puntos <=0&&(
        <div className="resultados-mensaje-mal">
          <div className="emoji">😅</div>
          <h3>¡Cuidado con los globos negros!</h3>
          <p>Los globos negros restan puntos. ¡Inténtalo de nuevo!</p>
        </div>)}
        

        {/* 0 a 10 puntos - Rendimiento medio */}
        {puntos >0 &&puntos<=10 &&(
        <div className="resultados-mensaje-medio">
          <div className="emoji">👍</div>
          <h3>¡Buen intento!</h3>
          <p>¡Sigue practicando para mejorar tu puntuación!</p>
        </div>)}
        

        {/* 11 a 25 puntos - Buen rendimiento */}
        {puntos >10 && puntos <=25 &&(
        <div className="resultados-mensaje-bueno">
          <div className="emoji">🌟</div>
          <h3>¡Muy bien!</h3>
          <p>¡Buen trabajo! Estás mejorando mucho.</p>
        </div>)}
 
        {/* Más de 25 puntos - Excelente */}
        {     puntos>25&&(
        <div className="resultados-mensaje-excelente">
          <div className="emoji">🏆</div>
          <h3>¡Eres un maestro explotando globos!</h3>
          <p>¡Puntuación increíble! Nadie te puede vencer.</p>
        </div>
        )}

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