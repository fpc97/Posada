import React from 'react';

// Librerias
//import L from 'leaflet';
//import 'leaflet-routing-machine';

// Estilos
import ubicacionStyle from '../styles/ubicacion.module.scss';
import '../styles/borrarDescripcion.scss';

class Mapa extends React.Component {
    state = {
        rutaActual: null,
        L: null,
        rm: null
    }

    establecerRuta(num) {
        const fallbL = this.state.L || require('leaflet'),
            rm = this.state.rm || require('leaflet-routing-machine');


        const puntoOriginal = [-31.6576608, -64.4395798],
            puntoMedio = [puntoOriginal[0] + (num[0] - puntoOriginal[0]) / 2, puntoOriginal[1] + (num[1] - puntoOriginal[1]) / 2];

        const iconoInvisible = fallbL.icon({
            iconUrl: require('../img/invisible.png'),
            shadowUrl: require('../img/invisible.png'),
        
            iconSize:     [1, 1],           // size of the icon
            shadowSize:   [1, 1],           // size of the shadow
            iconAnchor:   [1, 1],           // point of the icon which will correspond to marker's location
            shadowAnchor: [1, 1],           // the same for the shadow
            popupAnchor:  [1, 1]            // point from which the popup should open relative to the iconAnchor
        });
        
        const iconoDestino = fallbL.icon({
            iconUrl: require('../img/marcador-destino.png'),
            shadowUrl: require('../img/marcador-destino-sombra.png'),
        
            iconSize:     [44, 54],         // size of the icon
            shadowSize:   [61, 31],         // size of the shadow
            iconAnchor:   [22, 52],         // point of the icon which will correspond to marker's location
            shadowAnchor: [6, 27],          // the same for the shadow
            popupAnchor:  [22, 52]          // point from which the popup should open relative to the iconAnchor
        });

        const ruta = fallbL.Routing.control({
            waypoints: [
                fallbL.latLng(-31.6576608, -64.4395798),
                fallbL.latLng(num[0], num[1])
            ],
            lineOptions: {
                styles: [
                    {
                        color: '#f20',
                        opacity: .8,
                        weight: 5
                    }
                ],
                addWaypoints:false
            },
            draggableWaypoints: false,
            createMarker: function (i, start, n){
                var marker_icon = null
                if (i == 0) {
                    marker_icon = iconoInvisible;
                } else if (i == n - 1) {
                    marker_icon = iconoDestino;
                }
                var marker = fallbL.marker (start.latLng, {
                    icon: marker_icon
                });
                return marker
            }
        });

        this.state.rutaActual===null||this.state.rutaActual.remove();
        ruta.addTo(this.map);
        this.setState({rutaActual: ruta})

        this.map.panTo(puntoMedio);
    }

    crearMapa() {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            const rm = require('leaflet-routing-machine');

            if (typeof this.state.L === 'undefined') {
                this.setState({
                    L: L,
                    rm: rm
                });
            }
            // create map
            this.map = L.map('mapolo', {
                center: [-31.6563844, -64.4396453],
                zoom: 17,
                layers: [
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    })
                ]
            });
            
            const iconoCasa = L.icon({
                iconUrl: require('../img/marcador-posada.png'),
                shadowUrl: require('../img/marcador-posada-sombra.png'),
            
                iconSize:     [70, 70],     // size of the icon
                shadowSize:   [100, 70],    // size of the shadow
                iconAnchor:   [34, 70],     // point of the icon which will correspond to marker's location
                shadowAnchor: [30, 53],     // the same for the shadow
                popupAnchor:  [34, 70]      // point from which the popup should open relative to the iconAnchor
            });
    
            this.marker = L.marker([-31.6576608, -64.4395798], {icon: iconoCasa}).addTo(this.map);
        }
    }

    componentDidMount() {
        this.crearMapa();
    }

    componentWillReceiveProps(newProps) {
        if (typeof this.map !== undefined) {
            //console.log(newProps.destino);
            newProps.destino===null||this.establecerRuta(newProps.destino);
        }
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
                <div id="mapolo" className={`container-imagen ${ubicacionStyle.mapa}`}></div>
            </div>
        );
    }
}

export default Mapa;