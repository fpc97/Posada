import React from 'react';

// Estilos
import ubicacionStyle from '../styles/ubicacion.module.scss';
import { request } from 'https';

// Componentes
import MapaLeaflet from '../components/mapa-leaflet';

// Metodos

class Ubicacion extends React.Component {
    state = {
        destinos: [
            ['Centro Comercial', '200 metros', [-31.657376, -64.4356963]],                                    // Nombre, distancia, coordenadas
            ['Restaurantes y Pizzerías', '200 metros', [-31.655376, -64.4404443]],
            ['Arroyo Chicamtoltina', '200 metros', [-31.662332, -64.4431295]],
            ['Terminal de Omnibus', '600 metros', [-31.654463, -64.4468282]],
            ['Casa en donde vivió el “Che” Guevara', '10 cuadras', [-31.648702, -64.4417952]],
            ['Golf Club de Alta Gracia ', '10 cuadras', [-31.65112,-64.4464162]]
        ],
        destinoActual: null,
        movil: false
    }

    constructor(props) {
        super(props);
        this.mapaCiudad = React.createRef();
    }

    resizeMap() {
        const mapa = this.mapaCiudad.current;
        mapa.style.width = mapa.parentNode.clientWidth + 'px';
    }

    checkMovil() {
        if (window.innerWidth < 800 && this.state.movil === false) this.setState({movil:true});
        else if (window.innerWidth > 800 && this.state.movil === true) this.setState({movil:false});
    }

    mapaPosicion = () => {
        const mapa = this.mapaCiudad.current;
        if (!this.state.movil) {
            const altura = mapa.clientHeight,
                c = mapa.parentNode.getBoundingClientRect(),
                cTop = -c.top,
                cBottom = -c.bottom;

            const sumar = (window.innerHeight - altura) / 2 + 30;

            const enTop = cTop + sumar < 0,
                enBottom = cTop + sumar > cTop - cBottom - altura;
                //this.resizeMap();

            if (enTop) {
                mapa.style.position = 'absolute';
                mapa.style.top = '0';
                mapa.style.bottom = 'auto';
            } else if (enBottom) {
                mapa.style.position = 'absolute';
                mapa.style.top = 'auto';
                mapa.style.bottom = '0';
            } else {
                mapa.style.position = 'fixed';
                mapa.style.top = sumar + 'px';
                mapa.style.bottom = 'auto';
            }
        } else //if (mapa.style.position !== 'absolute') 
        {
            //mapa.style.width = 'auto';
            mapa.style.position = 'relative';
            mapa.style.top = 'auto';
            mapa.style.bottom = 'auto';
            //mapa.firstChild.firstChild.style.position = 'relative';
            document.getElementById('mapolo').style.position = 'relative';
        }
    }

    componentDidMount() {
        this.checkMovil();
        this.resizeMap();
        this.mapaPosicion();
        window.addEventListener('scroll', this.mapaPosicion);

        window.addEventListener('resize', () => {
            this.checkMovil();
            this.resizeMap();
            this.mapaPosicion();
        });
    }

    manageDestClick(ind) {
        this.setState({destinoActual: ind});
        if (this.state.movil) {
            const refs = this.mapaCiudad.current.getBoundingClientRect();
            window.scrollBy({
                top: refs.top - 80,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    render() {
        const generarDestinos = () => this.state.destinos.map((dest, ind) => <li><a className={ubicacionStyle.listaLink} onClick={() => this.manageDestClick(ind)} href='javascript:void(0)'><span>{dest[1]}</span> {dest[0]}</a></li>);

        return (
            <div className={`container-general ${ubicacionStyle.container}`} id='ubicacin'>
                <div className={ubicacionStyle.introContainer}>
                    <div className={`titulo-wrap container-parrafo c-der`}>
                        <h2>Ubicación</h2>
                        <svg className='icono-titulo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.24 66.03"><path d="M42,34.58A10.15,10.15,0,1,0,31.89,24.43,10.17,10.17,0,0,0,42,34.58Zm0-18.69a8.54,8.54,0,1,1-8.54,8.54A8.55,8.55,0,0,1,42,15.89Z" transform="translate(-14.93 -7.3)"/><path d="M69.12,72.25,61.58,44.38a.81.81,0,0,0-.78-.59H53.66c4.05-6.07,7.49-12.44,7.49-17.39a19.11,19.11,0,0,0-38.21,0c0,5,3.44,11.32,7.48,17.39H23.29a.81.81,0,0,0-.78.59L15,72.32a.8.8,0,0,0,.13.7.82.82,0,0,0,.65.31H68.36a.8.8,0,0,0,.8-.8A.86.86,0,0,0,69.12,72.25ZM42,8.91A17.52,17.52,0,0,1,59.54,26.4c0,4.88-3.77,11.48-8,17.69l0,0c-1.21,1.76-2.46,3.5-3.67,5.15l-.14.18,0,.05-2,2.66c-1.38,1.86-2.61,3.51-3.63,5-1-1.45-2.25-3.12-3.64-5-1.81-2.44-3.86-5.2-5.79-8l0,0c-4.26-6.22-8-12.83-8-17.72A17.51,17.51,0,0,1,42,8.91ZM16.79,71.72,23.91,45.4h7.61c1.88,2.73,3.84,5.37,5.61,7.74s3.14,4.24,4.24,5.88a.9.9,0,0,0,.37.3h0l.08,0h.45l0,0a.05.05,0,0,0,0,0l.05,0,0,0,0,0,0,0s0,0,0,0l0,0,0,0,0,0,0-.06c1.09-1.62,2.54-3.57,4.21-5.82l1.74-2.35.09-.12.3-.4c1.16-1.58,2.35-3.24,3.52-4.93h7.61L67.3,71.72Z" transform="translate(-14.93 -7.3)"/><path d="M57.25,47a.8.8,0,0,0-.59,1l5,20a.81.81,0,0,0,.78.61.69.69,0,0,0,.2,0,.82.82,0,0,0,.59-1l-5-20A.8.8,0,0,0,57.25,47Z" transform="translate(-14.93 -7.3)"/></svg>
                    </div>
                    <address className={`container-parrafo ${ubicacionStyle.direccion}`}><span>Eduardo Madero 339 - Alta Gracia - 5186 - Córdoba, Argentina</span></address>
                    <p className={`container-parrafo c-der`}>Nuestra <strong>Posada B&B</strong> se encuentra a <a href='javascript:void(0)'>200 metros del Casco Histórico</a>, hoy Patrimonio de la Humanidad.</p>
                </div>
                <div className={`container-imagen ${ubicacionStyle.mapaContainer}`}>
                    <div className={`container-imagen ${ubicacionStyle.mapa}`} ref={this.mapaCiudad}>
                        <MapaLeaflet destino={this.state.destinoActual !== null ? this.state.destinos[this.state.destinoActual][2] : null}/>
                    </div>
                </div>
                <div className={`${ubicacionStyle.listaContainer}`}>
                    <p className={`container-parrafo c-der`}>Otros sitios de interés son:</p>
                    <ul className={`container-parrafo c-der ${ubicacionStyle.listaUl}`}>
                        {generarDestinos()}
                        {generarDestinos()}
                        {generarDestinos()}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Ubicacion;