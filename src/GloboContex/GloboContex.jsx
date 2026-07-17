import { createContext, useState, useEffect, useRef } from "react";

const GloboContext = createContext();

// ids únicos por tipo de globo
const GlobosOriginales = [
    { tipoId: 1, color: '#FF5D5D', puntos: 1 },
    { tipoId: 2, color: '#6BCB77', puntos: 2 },
    { tipoId: 3, color: '#4D96FF', puntos: 5 },
    { tipoId: 4, color: '#333333', puntos: -3 },
];

function GloboProvider({ children }) {

    //////////renderizar pantalla
    const [pantallaIniciar, setPantallaIniciar] = useState(true);
    const [pantallaJugar, setPantallaJugar] = useState(false);
    const [pantallaFinal, setPantallaFinal] = useState(false);

    /////// boton para iniciar el juego
    const botonIniciar = () => {
        setGlobosPantalla([]); // limpiar globos de partidas anteriores
        setPantallaIniciar(false);
        setPantallaJugar(true);
    };

    //////////boton para reiniciar el juego
    const botonReiniciar = () => {
        setPantallaFinal(false);
        setPantallaIniciar(true);
        setTiempo(10);
    };

    ////////////cronometro del juego
    const [tiempo, setTiempo] = useState(30);

    //////////////globos en pantalla (cada uno con id único de instancia + posición)
    const [GlobosPantalla, setGlobosPantalla] = useState([]);

    // contador para generar ids únicos de instancia (no se reinicia entre renders)
    const contadorId = useRef(0);

    const nuevoGlobo = () => {
        const posicionRandom = Math.floor(Math.random() * 18); // celdas van de 1 a 18
        const tipoRandom = GlobosOriginales[Math.floor(Math.random() * GlobosOriginales.length)];

        contadorId.current += 1;

        const globo = {
            id: posicionRandom,      // id único de esta instancia en pantalla
            posicion: posicionRandom,    // en qué celda va
            color: tipoRandom.color,
            puntos: tipoRandom.puntos,
        };

        setGlobosPantalla((prev) => [...prev, globo]);
    };

    ///////crear globo automáticamente cada cierto tiempo
    useEffect(() => {
        if (pantallaIniciar) return;

        const generarGlobos = setInterval(() => {
            nuevoGlobo();
        }, 1000);

        const intervalo = setInterval(() => {
            setTiempo((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalo);
                    clearInterval(generarGlobos);
                    setPantallaJugar(false);
                    setPantallaFinal(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalo);
            clearInterval(generarGlobos);
        };
    }, [pantallaIniciar]);

    //////////////la info
    let celdas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    /////////////////botonExplotar (usa el id único de instancia)
    const botonExplotar = (id) => {
        setGlobosPantalla((prev) => prev.filter((globo) => globo.id !== id));
    };

    return (
        <GloboContext.Provider
            value={{
                GlobosPantalla,
                GlobosOriginales,
                tiempo,
                celdas,
                botonReiniciar,
                pantallaIniciar,
                pantallaJugar,
                pantallaFinal,
                botonIniciar,
                botonExplotar,
                nuevoGlobo,
            }}
        >
            {children}
        </GloboContext.Provider>
    );
}

export { GloboContext, GloboProvider };