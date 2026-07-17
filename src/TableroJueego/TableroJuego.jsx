
import React from 'react';
import { GlabosIntividuales } from '../GlabosIntividuales/GlabosIntividuales';
import { GloboContext } from '../GloboContex/GloboContex';
import './TableroJuego.css';


function TableroJuego() {

  const { celdas, GlobosPantalla, botonExplotar } = React.useContext(GloboContext);

  return (
    <div className="tablero-area">

      <div className="tablero-grid">

        {celdas.map((id) => {

          const globo = GlobosPantalla.find(
            (globo) => globo.id === id
          );

          return (
            <div
              key={id}
              className="tablero-celda"
              id={id} onClick={() => botonExplotar(id)}
            >

              <span className="tablero-id">
                {id}
              </span>

              {globo && (
                <GlabosIntividuales
                  color={globo.color}
                  puntos={globo.puntos}
                  id={globo.id}
                />
              )}

            </div>
          );

        })}

      </div>

    </div>
  );
}


export { TableroJuego };


{/* ID 1 */ }
/*        <div className="tablero-celda" id="1">
         <span className="tablero-id">1</span>
      <GlabosIntividuales/>
       </div>
*/