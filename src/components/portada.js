import React from 'react';
import {Link} from 'gatsby';

import stylePortada from '../styles/portada.module.scss';

class Portada extends React.Component {
    state = {
        colorFondo: {
            c1: [230, 193, 129],
            c2: [230, 146, 69]
        },
        styleHeader: {
            position: 'fixed',
            width: '100%',
            height: 'calc(var(--vh, 1vh) * 100)',
            padding: 'calc((1rem + 1vw) * 1)',
            transitionProperty: 'padding-left, padding-right',
            transitionDuration: '.6s'
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

            styleHeader.top = `${lockBar ? 0 : -window.pageYOffset}px`;
            styleHeader.height = lockBar ? alturaMargen : 'calc(var(--vh, 1vh) * 100)';
            styleHeader.padding = `${lockBar ? '0' : `calc((1rem + 1vw) * ${linealInverso}) calc(1rem + 1vw)`}`;

            return {styleHeader};
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollShrink.bind(this));
        window.addEventListener('resize', this.scrollShrink.bind(this));
    }

    render() {
        return (
            <header style={this.state.styleHeader}>
                <div className={stylePortada.wrapper}>
                    <div className={stylePortada.centro}>
                        <div className={stylePortada.banner}>
                            <svg className={stylePortada.semicirculo} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.8 35.9"><defs></defs><title>circulitos</title><circle class="cls-1" cx="71.4" cy="1.7" r="1.7"/><circle class="cls-1" cx="55.6" cy="3.1" r="1.7"/><circle class="cls-1" cx="40.3" cy="7.2" r="1.7"/><circle class="cls-1" cx="25.9" cy="13.9" r="1.7"/><circle class="cls-1" cx="12.9" cy="23" r="1.7"/><circle class="cls-1" cx="1.7" cy="34.2" r="1.7"/><circle class="cls-1" cx="141.1" cy="34.2" r="1.7"/><circle class="cls-1" cx="129.9" cy="23" r="1.7"/><circle class="cls-1" cx="116.9" cy="13.9" r="1.7"/><circle class="cls-1" cx="102.5" cy="7.2" r="1.7"/><circle class="cls-1" cx="87.2" cy="3.1" r="1.7"/></svg>
                            <hgroup>
                                <h1 className={stylePortada.h1}><span className={stylePortada.tituloPrimero}>Mi Morada</span><br></br><span className={stylePortada.tituloSegundo}>B&B</span></h1>
                                <span className={stylePortada.slogan}>Bed and Breakfast</span>
                            </hgroup>
                            <svg className={stylePortada.semicirculo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.81 35.89">
                                <title>
                                    Untitled-1
                                </title>
                                <circle class="cls-1" cx="71.41" cy="34.2" r="1.69"/>
                                <circle class="cls-1" cx="87.21" cy="32.82" r="1.69"/>
                                <circle class="cls-1" cx="102.53" cy="28.71" r="1.69"/>
                                <circle class="cls-1" cx="116.91" cy="22.01" r="1.69"/>
                                <circle class="cls-1" cx="129.91" cy="12.91" r="1.69"/>
                                <circle class="cls-1" cx="141.12" cy="1.69" r="1.69"/>
                                <circle class="cls-1" cx="1.69" cy="1.69" r="1.69"/>
                                <circle class="cls-1" cx="12.91" cy="12.91" r="1.69"/>
                                <circle class="cls-1" cx="25.9" cy="22.01" r="1.69"/>
                                <circle class="cls-1" cx="40.28" cy="28.71" r="1.69"/>
                                <circle class="cls-1" cx="55.6" cy="32.82" r="1.69"/>
                            </svg>
                        </div>
                        <nav className={stylePortada.nav}>
                            <ul>
                                <li className={stylePortada.li}><Link className={stylePortada.link} to="#seccion-posada">La Posada</Link></li>
                                <li className={stylePortada.li}><Link className={stylePortada.link} to="#seccion-posada">Ubicación</Link></li>
                                <li className={stylePortada.li}><Link className={stylePortada.link} to="#seccion-posada">Tarifas</Link></li>
                                <li className={stylePortada.li}><Link className={stylePortada.link} to="#seccion-posada">Actividades</Link></li>
                                <li className={stylePortada.li}><Link className={stylePortada.link} to="#seccion-posada">Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
};

export default Portada;