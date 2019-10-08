import React from 'react';
import {Link} from 'gatsby';

// Estilos
import stylePortada from '../styles/portada.module.scss';

// Componentes
import Burger from './portada-burger';

// Utilidades
import generateId from '../lib/generateId.js';

// Cosas...


class Portada extends React.Component {
    state = {
        modoBarra: false,
        alturaBarra: 80,
        alturaCalculada: 80,
        colorFondo: {
            c1: [230, 193, 129],
            c2: [230, 146, 69]
        },
        styleHeader: {
            position: 'fixed',
            padding: 'calc((1rem + 1vw) * 1)',
            height: '100vh',
            width: '100%',
            transitionProperty: 'padding-left, padding-right',
            transitionDuration: '.8s'
        },
        bcg: 'hsl(29, 70%, 45%)',
        opc: 1,
        anchoPantalla: 0
    }
    
    checkBarra() {
        const alturaCalculada = Math.max(50, this.state.alturaBarra * (window.innerHeight / 969)),
            breakPoint = window.innerHeight - alturaCalculada;
            
        const l = Math.min(window.pageYOffset / window.innerHeight, 1),
            lExp = Math.pow(l, 1.8);
            
        const c0 = [29, 70, 45],
            c1 = [38, 67, 70],
            cR = [c0[0]*(1-lExp)+c1[0]*lExp, c0[1]*(1-lExp)+c1[1]*lExp, c0[2]*(1-lExp)+c1[2]*lExp];

        if (window.pageYOffset > breakPoint) {  // Barra
            this.setState(prevState => {
                const styleHeader = Object.assign({}, prevState.styleHeader);
                //styleHeader.height = alturaCalculada + 'px';
                styleHeader.padding = '0';
                styleHeader.top = -breakPoint;
                styleHeader.transitionDuration = '0';

                return {
                    styleHeader,
                    modoBarra: true,
                    bcg: `hsl(${cR[0]}, ${cR[1]}%, ${cR[2]}%)`,
                    opc: 1,
                    alturaCalculada: alturaCalculada,
                    anchoPantalla: window.innerWidth
                };
            });
        } else {
            this.setState(prevState => {        // Portada
                const styleHeader = Object.assign({}, prevState.styleHeader);
                styleHeader.height = '100vh';
                styleHeader.padding = `calc((1rem + 1vw) * ${1 - window.pageYOffset / window.innerHeight}) calc(1rem + 1vw)`;
                styleHeader.top = Math.max(-window.pageYOffset, -breakPoint);
                styleHeader.transitionDuration = '0';
                
                return {
                    styleHeader,
                    modoBarra: false,
                    bcg: `hsl(${cR[0]}, ${cR[1]}%, ${cR[2]}%)`,
                    opc: 1 - lExp * 1.4,
                    anchoPantalla: window.innerWidth
                };
            });
        }
    }

    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('scroll', this.checkBarra.bind(this));
            window.addEventListener('resize', this.checkBarra.bind(this));
        }, 0);
        this.setState({
            anchoPantalla: window.innerWidth
        });
    }

    render() {
        const generateHgroup = () => {
            const titulo = <h1 className={this.state.modoBarra ? stylePortada.h1Barra : stylePortada.h1}><span className={this.state.modoBarra ? stylePortada.tituloPrimeroBarra : stylePortada.tituloPrimero}>Mi Morada</span><br></br><span className={this.state.modoBarra ? stylePortada.tituloSegundoBarra : stylePortada.tituloSegundo}>B&B</span></h1>,
                slogan = <span className={this.state.modoBarra ? stylePortada.sloganBarra : stylePortada.slogan}>Bed and Breakfast</span>,
                hgroup = <hgroup className='oslo'>{titulo}{slogan}</hgroup>,
                hgroupLink = <Link to='#home'>{hgroup}</Link>;

            return this.state.modoBarra ? hgroupLink : hgroup;
        };

        const items = [
            'La Posada',
            'Ubicación',
            'Tarifas',
            'Actividades',
            'Contacto'
        ];

        const itemList = (
            <nav className={this.state.modoBarra ? stylePortada.navBarra : stylePortada.nav}>
                <ul>
                    {items.map(item => <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to={generateId(item)}>{item}</Link></li>)}
                </ul>
            </nav>
        );

        return (
            <header className={this.state.modoBarra ? stylePortada.headerBarra : stylePortada.header} style={this.state.styleHeader}>
                <div className={this.state.modoBarra ? stylePortada.wrapperBarra : stylePortada.wrapper} style={{backgroundColor: this.state.bcg}}>
                    <div className={this.state.modoBarra ? stylePortada.centroBarra : stylePortada.centro} style={{opacity: this.state.opc, height: this.state.modoBarra ? this.state.alturaCalculada : 'auto'}}>
                        <div className={this.state.modoBarra ? stylePortada.bannerBarra : stylePortada.banner}>
                            <svg className={this.state.modoBarra ? stylePortada.semicirculoBarra : stylePortada.semicirculo} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.8 35.9"><defs></defs><circle class="cls-1" cx="71.4" cy="1.7" r="1.7"/><circle class="cls-1" cx="55.6" cy="3.1" r="1.7"/><circle class="cls-1" cx="40.3" cy="7.2" r="1.7"/><circle class="cls-1" cx="25.9" cy="13.9" r="1.7"/><circle class="cls-1" cx="12.9" cy="23" r="1.7"/><circle class="cls-1" cx="1.7" cy="34.2" r="1.7"/><circle class="cls-1" cx="141.1" cy="34.2" r="1.7"/><circle class="cls-1" cx="129.9" cy="23" r="1.7"/><circle class="cls-1" cx="116.9" cy="13.9" r="1.7"/><circle class="cls-1" cx="102.5" cy="7.2" r="1.7"/><circle class="cls-1" cx="87.2" cy="3.1" r="1.7"/></svg>
                            { generateHgroup() }
                            <svg className={this.state.modoBarra ? stylePortada.semicirculoBarra : stylePortada.semicirculo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.81 35.89"><circle cx="71.41" cy="34.2" r="1.69"/><circle cx="87.21" cy="32.82" r="1.69"/><circle cx="102.53" cy="28.71" r="1.69"/><circle cx="116.91" cy="22.01" r="1.69"/><circle cx="129.91" cy="12.91" r="1.69"/><circle cx="141.12" cy="1.69" r="1.69"/><circle cx="1.69" cy="1.69" r="1.69"/><circle cx="12.91" cy="12.91" r="1.69"/><circle cx="25.9" cy="22.01" r="1.69"/><circle cx="40.28" cy="28.71" r="1.69"/><circle cx="55.6" cy="32.82" r="1.69"/></svg>
                        </div>
                        <div className={this.state.modoBarra ? stylePortada.indiceBarra : stylePortada.indice}>
                            <svg className={this.state.modoBarra ? stylePortada.cruzBarra : stylePortada.cruz} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><polyline points="0.4 11.3 5.9 5.8 0.6 0.6"/><polyline points="11.3 0.4 5.8 5.9 11.1 11.1"/></svg>
                            {/*{this.state.anchoPantalla > 700 || !this.state.modoBarra ? itemList : <Burger>{items}</Burger>}*/}
                            <svg className={this.state.modoBarra ? stylePortada.cruzBarra : stylePortada.cruz} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7"><polyline points="0.4 11.3 5.9 5.8 0.6 0.6"/><polyline points="11.3 0.4 5.8 5.9 11.1 11.1"/></svg>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default Portada;


// QUE HACER DESPUES
// 1. Terminar de cambiar los estilos modoBarra
// 2. Encapsular los contenidos de hgroup en un <Link>
//      * Se me ocurre meter una funcion ahi cosa de que si estamos en modo barra devuelva
//          <Link>
//              <h1></h1>
//              <span></span>
//          </Link>
//        y sino los devuelve en un div o en lo posible sueltos
// 3. Hay que achicar los contenidos de wrapper porque aunque header se achica a la medida (80 - 50)
//    wrapper se mantiene del mismo tamaño. Lo que tenemos que hacer es hacer que el logo y el nav
//    esten en una misma linea y que los elementos del nav tambien esten en una misma linea (y sean mas chicos)
// 4. vos podes francisco del futuro carajo
/*
                                    <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to="#seccion-posada">La Posada</Link></li>
                                    <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to="#seccion-posada">Ubicación</Link></li>
                                    <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to="#seccion-posada">Tarifas</Link></li>
                                    <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to="#seccion-posada">Actividades</Link></li>
                                    <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to="#seccion-posada">Contacto</Link></li>*/