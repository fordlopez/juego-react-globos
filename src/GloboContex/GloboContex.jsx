import { createContext, useState, useEffect, useRef } from "react";

const GloboContext = createContext();

// id únicos por tipo de globo
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
        if (nombre.length > 0) {
            setPantallaIniciar(false);
            setPantallaJugar(true);
        }

    };

    //////////boton para reiniciar el juego
    const botonReiniciar = () => {
        setGlobosPantalla([{ id: 9, color: '#FF5D5D', puntos: 1 },
        { id: 7, color: '#6BCB77', puntos: 2 },
        { id: 1, color: '#4D96FF', puntos: 5 },
        { id: 16, color: '#333333', puntos: -3 },]);
        setPuntos(0)
        setPantallaFinal(false);
        setPantallaIniciar(true);
        setTiempo(30);
        setGloboSX(0)
        sitnegativosGB(0)
        setpositivos(0)


    };

    ////////////cronometro del juego
    const [tiempo, setTiempo] = useState(30);

    //////////////globos en pantalla (cada uno con id único de instancia + posición)
    const [GlobosPantalla, setGlobosPantalla] = useState([
        { id: 9, color: '#FF5D5D', puntos: 1 },
        { id: 7, color: '#6BCB77', puntos: 2 },
        { id: 1, color: '#4D96FF', puntos: 5 },
        { id: 16, color: '#333333', puntos: -3 },

    ]);

    // contador para generar id únicos de instancia (no se reinicia entre renders)
    const contadorId = useRef(0);

    const nuevoGlobo = () => {
        const posicionRandom = Math.floor(Math.random() * 30);
        const tipoRandom = GlobosOriginales[Math.floor(Math.random() * GlobosOriginales.length)];

        contadorId.current += 1;

        const globo = {
            id: posicionRandom,
            posicion: posicionRandom,
            color: tipoRandom.color,
            puntos: tipoRandom.puntos,
        };

        setGlobosPantalla((prev) => [...prev, globo]);
    };


    const eliminarPrimerGlobo = () => {

        setGlobosPantalla((prev) => prev.filter((globo, index) => index !== 0));


    }

    ///////crear globo automáticamente cada cierto tiempo
    useEffect(() => {
        if (pantallaIniciar) return;

        const eliminarGlobos = setInterval(() => {
            eliminarPrimerGlobo()
        }, 2000);



        const generarGlobos = setInterval(() => {
            nuevoGlobo();
        }, 600);

        const intervalo = setInterval(() => {
            setTiempo((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalo);
                    clearInterval(eliminarGlobos);
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
            clearInterval(eliminarGlobos);
        };
    }, [pantallaIniciar]);


    //////////////////////elinar el primer globo


    //////////////celdas
    let celdas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    /////////////////botonExplotar (usa el id único de instancia)
    const botonExplotar = (id) => {
        setGlobosPantalla((prev) => prev.filter((globo) => globo.id !== id));
    };


    ///////////////suma de los puntos 
    const [GloboSX, setGloboSX] = useState(0)
    const [puntos, setPuntos] = useState(0)
    const [positivosGB, setpositivos] = useState(0)
    const [negativosGB, sitnegativosGB] = useState(0)


    const sumarPuntos = (puntos) => {
        setGloboSX((prev) => prev + 1)
        if (puntos > 0) {
            setpositivos((prev) => prev + 1)
        } else {
            sitnegativosGB((prev) => prev + 1)
        }
        setPuntos((prev) => prev + puntos)
    }

    //////////////// nombre del jugador
    const [nombre, setNombre] = useState("");




    return (
        <GloboContext.Provider
            value={{
                negativosGB,
                positivosGB,
                GloboSX,
                nombre,
                setNombre,
                sumarPuntos,
                puntos,
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