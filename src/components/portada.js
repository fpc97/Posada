import React from 'react';
import {Link} from 'gatsby';

import stylePortada from '../styles/portada.module.scss';

class Portada extends React.Component {
    state = {
        styleHeader: {
            position: 'fixed',
            width: '100%',
            height: '100vh',
            padding: 'calc((1rem + 1vw) * 1)',
            transitionProperty: 'padding-left, padding-right',
            transitionDuration: '.6s',
        }
    }

    scrollShrink() {
        const alturaMargen = Math.max(80 * (window.innerHeight / 969), 50),
            alturaResto = Math.max(300, window.innerHeight) - alturaMargen,
            lineal = window.pageYOffset / window.innerHeight,
            linealInverso = 1 - lineal,
            lockBar = alturaResto <= window.pageYOffset;

        this.setState(prevState => {
            const styleHeader = Object.assign({}, prevState.styleHeader);

            styleHeader.top = `${lockBar ? -alturaResto : -window.pageYOffset}px`;
            styleHeader.padding = `${lockBar ? '0' : `calc((1rem + 1vw) * ${linealInverso}) calc(1rem + 1vw)`}`;

            return {styleHeader};
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollShrink.bind(this));
    }

    render() {
        return (
            <header style={this.state.styleHeader}>
                <div className={stylePortada.wrapper}>
                    <div className={stylePortada.centro}>
                        <hgroup>
                            <h1><span className={stylePortada.link}>Mi Morada</span><br></br>BnB</h1>
                            <span>Bed and Breakfast</span>
                        </hgroup>
                        <nav>
                            <ul>
                                <li><Link to="#seccion-posada">La Posada</Link></li>
                                <li><Link to="#seccion-posada">Ubicación</Link></li>
                                <li><Link to="#seccion-posada">Tarifas</Link></li>
                                <li><Link to="#seccion-posada">Actividades</Link></li>
                                <li><Link to="#seccion-posada">Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
};

export default Portada;