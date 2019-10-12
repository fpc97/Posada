import React from 'react';

// Estilos
import styleHabitaciones from '../styles/habitaciones.module.scss';

class Habitaciones extends React.Component {
    state = {
        habitacionActual: 0,
        habitaciones: [
            {
                nombre: 'Habitación en Suit con baño privado',
                descripcion: [''],
                detalles: [
                    'Desayuno artesanal',
                    'Ventilador de techo',
                    'Calefacción',
                    'Room service',
                    'Secador de pelo',
                    'Aire acondicionado opcional'
                ]
            },
            {
                nombre: '2 Habitaciones dobles',
                descripcion: [
                    'Es una novedosa adaptación de lo que en su época fue un garage, por eso sale directamente al exterior.',
                    'Esta habitación se encuentra restaurada en su totalidad!! Ventanas y puerta de ingreso en madera de cedro trabajada a mano con punzón.',
                    'En su interior, tiene un cuadro antiguo y una pintura que hace las veces de respaldo de cama, echa al óleo por Marcelo Guzmán, pintor de Alta Gracia recibido en la Escuela de Bellas Artes en la Ciudad de Córdoba.'
                ],
                detalles: [
                    'Desayuno artesanal',
                    'Ventilador de techo',
                    'Calefacción',
                    'Room service',
                    'Secador de pelo',
                    'Aire acondicionado opcional'
                ]
            },
            {
                nombre: 'Habitación Loft con baño privado',
                descripcion: [''],
                detalles: [
                    'Desayuno artesanal',
                    'Ventilador de techo',
                    'Calefacción',
                    'Room service',
                    'Secador de pelo',
                    'Aire acondicionado opcional'
                ]
            },
        ]
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    scrollToMyRef() {
        setTimeout(() => {
            const ref = this.myRef.current.getBoundingClientRect(),
                medio = ref.top + (ref.bottom - ref.top) / 2;
            
            window.scrollBy({
                top: medio - window.innerHeight / 2 - 20,
                left: 0,
                behavior: 'smooth'
            });
        }, 0);
    }

    cambiarHabitacion(num) {
        this.setState({habitacionActual: num});
        //setTimeout(this.scrollToMyRef, 0);
        this.scrollToMyRef();
    }

    render() {
        const crearHabitacion = () => {
            const habitacion = this.state.habitaciones[this.state.habitacionActual];
            const descripciones = habitacion.descripcion.map(desc => <p className={styleHabitaciones.descripcionParrafo}>{desc}</p>),
                items = habitacion.detalles.map(det => <li className={styleHabitaciones.descripcionItem}>{det}</li>);

            return (
                <div className={styleHabitaciones.muestraInterno}>
                    <h4 className={styleHabitaciones.h4}>{habitacion.nombre}</h4>
                        <div className={styleHabitaciones.descripcionContenido}>
                        {descripciones}
                        <ul className={styleHabitaciones.descripcionUl}>
                            {items}
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <div className={styleHabitaciones.fondo}>
                <div className={`container-general ${styleHabitaciones.container}`}>
                    <div className={`container-parrafo ${styleHabitaciones.seccionHabitaciones}`}>
                        <div>
                            <ul className={styleHabitaciones.ulHabitaciones}>
                                <li className={styleHabitaciones.liHabitaciones}><a className={this.state.habitacionActual === 0 ? styleHabitaciones.seleccionActive : styleHabitaciones.seleccion} onClick={this.cambiarHabitacion.bind(this, 0)} href='javascript:void(0)'>Habitación Suit Triple</a></li>
                                <li className={styleHabitaciones.liHabitaciones}><a className={this.state.habitacionActual === 1 ? styleHabitaciones.seleccionActive : styleHabitaciones.seleccion} onClick={this.cambiarHabitacion.bind(this, 1)} href='javascript:void(0)'>Habitación Doble Loft</a></li>
                                <li className={styleHabitaciones.liHabitaciones}><a className={this.state.habitacionActual === 2 ? styleHabitaciones.seleccionActive : styleHabitaciones.seleccion} onClick={this.cambiarHabitacion.bind(this, 2)} href='javascript:void(0)'>Dos Habitaciones Dobles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styleHabitaciones.seccionMuestra} id='muestra' ref={this.myRef}>
                        {crearHabitacion()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Habitaciones;