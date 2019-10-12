import React from "react"

// Estilos
import 'normalize.css';
import '../styles/base.scss';

// Componentes
import Portada from '../components/portada';
import Frase from '../components/frase';
import LaPosada from '../components/la-posada';
import Habitaciones from '../components/habitaciones';
import Ubicacion from '../components/ubicacion';
import Contacto from '../components/contacto';

const Index = () => {
    return (
        <div>
            <Portada/>
            <main>
                <Frase/>
                <LaPosada/>
                <Habitaciones/>
                <Ubicacion/>
            </main>
        </div>
    )
}

export default Index;