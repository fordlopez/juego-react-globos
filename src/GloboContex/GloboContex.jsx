import { createContext, useState, useEffect } from "react";

const GloboContext = createContext();

function GloboProvider({ children }) {

    const [pantallaIniciar, setPantallaIniciar] = useState(true);
    const [pantallaJugar, setPantallaJugar] = useState(false);
    const [pantallaFinal, setPantallaFinal] = useState(false);


    const [tiempo, setTiempo] = useState(10);

    const botonIniciar = () => {
        setPantallaIniciar(false);
        setPantallaJugar(true);
    };

    useEffect(() => {
        if (pantallaIniciar) return;

        const intervalo = setInterval(() => {
            setTiempo((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalo);
                    setPantallaJugar(false);
                    setPantallaFinal(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, [pantallaIniciar]);
    return (
        <GloboContext.Provider
            value={{
                tiempo,

                pantallaIniciar,
                pantallaJugar,
                pantallaFinal,
                botonIniciar,
            }}
        >
            {children}
        </GloboContext.Provider>
    );
}

export { GloboContext, GloboProvider };