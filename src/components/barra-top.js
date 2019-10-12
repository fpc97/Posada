import React from 'react';

// Estilo
import barraStyle from '../styles/barra-top.module.scss';

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

        return (
            <div className={this.state.working ? barraStyle.containerWorking : barraStyle.container}>
                <div className={barraStyle.fondo}>
                    
                </div>
            </div>
        );
    }
}

export default BarraTop;