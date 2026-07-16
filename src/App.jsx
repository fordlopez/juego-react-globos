
import { PantallaInicio } from './PantallaInicio/PantallaInicio'

import { PantallaJuego } from './PantallaJuego/PantallaJuego'
import { PantallaFinal } from './PantallaFinal/PantallaFinal'
import React from 'react'
import { GloboContext } from './GloboContex/GloboContex'



function App() {
  const {
    pantallaIniciar,
    pantallaJugar,
    pantallaFinal
  } = React.useContext(GloboContext)


  return (
    <>

      {pantallaIniciar && (<PantallaInicio />)}
      {pantallaJugar && (<PantallaJuego />)}
      {pantallaFinal && (<PantallaFinal />)}

    </>
  )
}

export default App

