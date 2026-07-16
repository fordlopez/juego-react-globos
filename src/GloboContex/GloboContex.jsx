import { createContext, useState, useEffect } from "react";

const GloboContext = createContext();

const GlobosOriginales=[{id:1,color:'#FF5D5D',puntos:1},{id:1,color:'#6BCB77',puntos:2},
    {id:1,color:'#4D96FF',puntos:5},{id:1,color:'#333333',puntos:-3}]

function GloboProvider({ children }) {



//////////renderisar pantalla
    const [pantallaIniciar, setPantallaIniciar] = useState(true);
    const [pantallaJugar, setPantallaJugar] = useState(false);
    const [pantallaFinal, setPantallaFinal] = useState(false);


/////// boton para iniciar el juego 
    const botonIniciar = () => {
        setPantallaIniciar(false);
        setPantallaJugar(true);
    };


    //////////bonton para  reiniciar el juego
    const botonReiniciar = () => {
        setPantallaFinal(false);
        setPantallaIniciar(true);
        setTiempo(10)
    }

 ////////////cronometro del juego  el tienpo 
    const [tiempo, setTiempo] = useState(10);
const [posicionGlobo, setPosicionGlobo] = useState(null);
const [globoActual, setGloboActual] = useState(null);


 ///////crear Globo   

    useEffect(() => {
        if (pantallaIniciar) return;
    const numeroAliatorio=setInterval(() => {
    let uno=Math.floor(Math.random() * 18)
setPosicionGlobo(uno);

console.log(posicionGlobo)

   setGloboActual (Math.floor(Math.random() * 4))
console.log(globoActual)
}, 3000);

////////////////////////

        const intervalo = setInterval(() => {
            setTiempo((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalo,);
                   
                    setPantallaJugar(false);
                    setPantallaFinal(true);
                      clearInterval(numeroAliatorio)      
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, [pantallaIniciar]);


//////////////globos randon
const [GlobosPantalla,setGalbosPantalla] = useState([
    {id:14,color:'#FF5D5D',puntos:1}
    ,{id:8,color:'#6BCB77',puntos:2},
    {id:5,color:'#4D96FF',puntos:5},
    {id:6,color:'#333333',puntos:-3},
    {id:12,color:'#FF5D5D',puntos:1}
    ,{id:19,color:'#6BCB77',puntos:2},
]);

  const nuevoGlobo = (GlobosOriginales) => {

   /*  const ultimoId = estudiantes.length > 0 ? Math.max(...GlobosPantalla.map((globo) => globo.id)) : 0
 */
    const nuevoGlabo = {
      ...GlobosOriginales[GloboRamdon],
      id: pocicionRamdom,
    }

    setGalbosPantalla((prev) => [...prev, nuevoGlabo])

  }

    //////////////la info 
    let celdas =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    return (
        <GloboContext.Provider
            value={{
                GlobosOriginales,
                tiempo,
                celdas,
                botonReiniciar,
                pantallaIniciar,
                pantallaJugar,
                pantallaFinal,
                botonIniciar,
                 clearInterval
            }}
        >
            {children}
        </GloboContext.Provider>
    );
}

export { GloboContext, GloboProvider };