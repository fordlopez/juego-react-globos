
import { PantallaInicio } from './PantallaInicio/PantallaInicio'

import { PantallaJuego } from './PantallaJuego/PantallaJuego'
import { PantallaFinal } from './PantallaFinal/PantallaFinal'
import React from 'react'
import { GloboContex } from './GloboContex/GloboContex'


function App() {
      const {
         pantallIniciar,
          botonInisiar
    }=React.useContext(GloboContex)


  return (
    <>
       <PantallaInicio/> 

 { pantallIniciar && (<PantallaJuego/>)}


{/*  <PantallaFinal/>  */}
    </>
  )
}

export default App


