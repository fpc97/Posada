import React from 'react';

class MapaSticky extends React.Component {
    state = {
        posicion: 0,         // 0 = top; 1 = bottom; 2 = medio
        width: '100%',
        movil: false
    }

    constructor(props) {
      super(props);
      this.refContainer = React.createRef();
    }

    scrollSticky() {
        const obj = this.refContainer.current,
            refParent = obj.parentNode.getBoundingClientRect(),
            offset = (window.innerHeight - obj.clientHeight) / 2;
        
        if (refParent.top > offset) {
            if (this.state.posicion !== 0) {
                this.state.posicion = 0;
                obj.style.position = 'absolute';
                obj.style.top = '0';
                obj.style.bottom = 'auto';
                obj.style.width = this.state.width;
            }
        } else if (refParent.bottom < offset + obj.clientHeight) {
            if (this.state.posicion !== 1) {
                this.state.posicion = 1;
                obj.style.position = 'absolute';
                obj.style.top = 'auto';
                obj.style.bottom = '0';
                obj.style.width = this.state.width;
            }
        } else {
            if (this.state.posicion !== 2) {
                this.state.posicion = 2;
                obj.style.position = 'fixed';
                obj.style.top = offset + 'px';
                obj.style.bottom = 'auto';
                obj.style.width = this.state.width;
            }
        }
    }

    resizeMap() {
        if (window.innerWidth > 800) {
            const obj = this.refContainer.current,
                parent = obj.parentNode,
                width = parent.clientWidth - parent.style.paddingLeft - parent.style.paddingRight;
    
            this.setState({width: width + 'px', movil: false});
        } else if (window.innerWidth > 800 && !this.state.movil) {
            const obj = this.refContainer.current,
                parent = obj.parentNode,
                width = parent.clientWidth - parent.style.paddingLeft - parent.style.paddingRight;
    
            this.setState({width: width + 'px', movil: true});
        }
/*
        if (!this.state.movil){
            const obj = this.refContainer.current,
                parent = obj.parentNode,
                width = parent.clientWidth - parent.style.paddingLeft - parent.style.paddingRight;
    
            this.setState({width: width + 'px'});
        }*/
    }

    componentDidMount() {
        this.resizeMap();
        window.addEventListener('scroll', this.scrollSticky.bind(this));
        window.addEventListener('resize', this.resizeMap.bind(this));
    }

    render() {
        return (
            <div ref={this.refContainer} style={{width: this.state.width, height: '60rem', backgroundColor: '#f00'}}>

            </div>
        );
    }
};

export default MapaSticky;