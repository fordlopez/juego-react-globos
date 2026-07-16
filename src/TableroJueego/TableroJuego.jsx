
import React from 'react';
import { GlabosIntividuales } from '../GlabosIntividuales/GlabosIntividuales';
import { GloboContext } from '../GloboContex/GloboContex';
import './TableroJuego.css';


function TableroJuego() {

const {celdas}=React.useContext(GloboContext)

  return (
    <div className="tablero-area">
      <div className="tablero-grid">

<div className="tablero-grid">
  {celdas.map((id) => (
    <div key={id} className="tablero-celda" id={id}>
      <span className="tablero-id">{id}</span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export {TableroJuego} ;


        {/* ID 1 */}
 /*        <div className="tablero-celda" id="1">
          <span className="tablero-id">1</span>
       <GlabosIntividuales/>
        </div>
 */