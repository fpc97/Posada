import React from 'react';

// Componentes
import Burger from '../components/portada-burger';

// Estilos
import barraStyle from '../styles/barra-top.module.scss';

// Utilidades
import generateId from '../lib/generateId.js';
import smoothScroll from '../lib/smooth-scroll.js';

class BarraTop extends React.Component {
    state = {
        working: false
    }

    listenScroll = () => {
        if (window.pageYOffset > Math.max(window.innerHeight, 400)) {
            this.state.working==true||this.setState({working: true});
        } else {
            this.state.working==false||this.setState({working: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScroll);
    }

    render() {
        const itemList = (
            <nav className={barraStyle.nav}>
                <ul className={barraStyle.ul}>
                    {this.props.secciones.map(item => <li className={barraStyle.li}><a className={barraStyle.link} href={generateId(item)} onClick={smoothScroll}>{item}</a></li>)}
                </ul>
            </nav>
        );
        const titulos = (
            <a className={barraStyle.tituloLink} href='#portada' onClick={smoothScroll}>
                <span className={barraStyle.titulo1}>Mi Morada</span>
                <span className={barraStyle.titulo2}>B&B</span>
            </a>
        )

        return (
            <div className={this.state.working ? barraStyle.containerWorking : barraStyle.container}>
                <div className={barraStyle.fondo}>
                    {!this.state.working||titulos}
                    {!this.state.working||itemList}
                    {!this.state.working||<Burger secciones={this.props.secciones}/>}
                </div>
            </div>
        );
    }
}

export default BarraTop;