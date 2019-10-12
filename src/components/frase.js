import React from 'react';

// Estilos
import fraseStyle from '../styles/frase.module.scss';

export default () => {
    return(
        <div className={fraseStyle.container}>
            <div className={fraseStyle.center}>
                <svg className={fraseStyle.puntos} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 4"><circle class="cls-1" cx="29.9" cy="2" r="2"/><circle class="cls-1" cx="44" cy="2" r="2"/><circle class="cls-1" cx="58.1" cy="2" r="2"/><circle class="cls-1" cx="2" cy="2" r="2"/><circle class="cls-1" cx="16.1" cy="2" r="2"/></svg>
                <p className={fraseStyle.p}>
                    <span className={`cocos ${fraseStyle.span1}`}>Una casa antigua, el confort </span><br></br>
                    <span className={fraseStyle.span2}>de una Habitación Cálida </span><br></br>
                    <span className={fraseStyle.span3}>... y la atención personal de la familia</span>
                </p>
            </div>
        </div>
    );
};/**/