import React, {  useState } from "react"

const GloboContex=React.createContext()

function GloboProvider({children}){

    const [pantallIniciar, inicioFuncion] = useState(false)
    const [pantallaJugarm,jugarFuncion]=useState(true)

const botonInisiar=()=>{
inicioFuncion(true)
jugarFuncion(false)
}


    return (

      <GloboContex.Provider value={{
        pantallIniciar,
        pantallaJugarm,
        botonInisiar

      }}>
            {children}
        </GloboContex.Provider>
    )

}

export {GloboContex,GloboProvider}
