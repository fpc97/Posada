import React from 'react';

// Estilos
import posadaStyle from '../styles/posada.module.scss';

// Imagenes
import fotoPosada from '../img/posada.png';

const LaPosada = () => {
    return (
        <div className={`container-general ${posadaStyle.container}`}>
            <div className={`titulo-wrap container-parrafo ${posadaStyle.titulares}`}>
                <h2 className={posadaStyle.h2}>La Posada</h2>
                <svg className='icono-titulo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.68 56.68"><rect x="25.51" y="37.79" width="1.89" height="1.89"/><path d="M64.12,22.52,57,18.36V12H58a.94.94,0,0,0,.94-.94V7.27A.94.94,0,0,0,58,6.33H48.53a.94.94,0,0,0-.94.94v3.78a.94.94,0,0,0,.94.94h.95v1.94L36.73,6.46a.92.92,0,0,0-1,0L8.38,22.52a.93.93,0,0,0-.47.81v4.72a1,1,0,0,0,.95.95,1,1,0,0,0,.47-.13l2.36-1.38v24.7A3.75,3.75,0,0,0,9.8,55.45a4.19,4.19,0,0,0,0,.5A3.77,3.77,0,0,0,11.69,63H60.81A3.77,3.77,0,0,0,62.67,56a4.19,4.19,0,0,0,0-.5,3.75,3.75,0,0,0-1.89-3.26V27.49l2.36,1.38a.94.94,0,0,0,1.29-.34.89.89,0,0,0,.13-.48V23.33A.93.93,0,0,0,64.12,22.52ZM49.48,8.22H57V10.1H49.48ZM51.36,12h3.78v5.26L51.36,15ZM11.69,61.12a1.89,1.89,0,0,1-.49-3.71.94.94,0,0,0,.66-1.16l0-.1a1.88,1.88,0,0,1,3.49-1.42,2,2,0,0,1,.07.23,1,1,0,0,0,1.16.66l.11,0a1.89,1.89,0,0,1,2.45,1.08l.06.18a1,1,0,0,0,1.16.66l.1,0A1.89,1.89,0,1,1,21.86,61a2,2,0,0,1-.72.14Zm13.22-1.89H47.59a3.73,3.73,0,0,0,.52,1.89H24.39A3.73,3.73,0,0,0,24.91,59.23ZM41,53.56H31.53v-17H41Zm1.89,1.89v1.89H29.64V55.45Zm18.44,2a1.89,1.89,0,0,1-.49,3.71H51.36a1.89,1.89,0,0,1,0-3.78,1.81,1.81,0,0,1,.72.14A.94.94,0,0,0,53.29,57a.42.42,0,0,0,0-.1,1.9,1.9,0,0,1,2.34-1.32.85.85,0,0,1,.17.06.94.94,0,0,0,1.23-.53.42.42,0,0,0,0-.1,1.88,1.88,0,1,1,3.64,1,2,2,0,0,1-.08.22,1,1,0,0,0,.53,1.23Zm-2.38-5.74a3.78,3.78,0,0,0-3.28,1.92,3.81,3.81,0,0,0-3.78,1.89,4.07,4.07,0,0,0-.5,0,3.75,3.75,0,0,0-3.25,1.89H44.75V54.5a.94.94,0,0,0-.94-.94h-1v-18a.94.94,0,0,0-.94-.94H30.58a.94.94,0,0,0-.94.94v18h-.95a.94.94,0,0,0-.94.94v2.84H24.39a3.75,3.75,0,0,0-3.25-1.89,4.07,4.07,0,0,0-.5,0,3.81,3.81,0,0,0-3.78-1.89,3.78,3.78,0,0,0-3.28-1.92V26.38L36.25,13.09,58.92,26.38Zm1.76-26.45-24-14a1,1,0,0,0-1,0l-24,14-.13.08L9.8,26.4V23.87L36.25,8.37,62.7,23.87V26.4l-1.89-1.1Z" transform="translate(-7.91 -6.33)"/><path d="M30.58,25.22v4.72a1,1,0,0,0,1,.95H41a1,1,0,0,0,1-.95V25.22a5.67,5.67,0,0,0-11.34,0Zm4.73-3.65v2.7h-2.7A3.77,3.77,0,0,1,35.31,21.57Zm-2.84,4.59h2.84V29H32.47ZM37.19,29V26.16H40V29Zm2.7-4.73h-2.7v-2.7A3.77,3.77,0,0,1,39.89,24.27Z" transform="translate(-7.91 -6.33)"/><path d="M46.64,46h9.45a.94.94,0,0,0,.94-.94V35.61a.94.94,0,0,0-.94-.94H46.64a.94.94,0,0,0-.94.94v9.45A.94.94,0,0,0,46.64,46Zm1-1.89V42.22h7.55v1.89Zm7.55-7.55v3.77H47.59V36.56Z" transform="translate(-7.91 -6.33)"/><path d="M25.86,34.67H16.41a.94.94,0,0,0-.94.94v9.45a.94.94,0,0,0,.94.94h9.45a.94.94,0,0,0,.94-.94V35.61A.94.94,0,0,0,25.86,34.67Zm-.95,1.89v3.77H17.36V36.56Zm-7.55,7.55V42.22h7.55v1.89Z" transform="translate(-7.91 -6.33)"/></svg>
            </div>
            <img className={`container-imagen ${posadaStyle.img}`} src={fotoPosada}></img>
            <p className={`container-parrafo ${posadaStyle.intro}`}>Nuestra casa data de la década <b>1920 al 1930</b>, forma parte del <em>Patrimonio Histórico de la Ciudad</em> y está declarada <em>Bien Cultural</em> por el Decreto Municipal nº066407</p>
            <h3 className={`container-parrafo ${posadaStyle.h3}`}>Habitaciones</h3>
            <p className={`container-parrafo ${posadaStyle.cuartos}`}>Nuestra Posada B&B tiene lugar para 9 huéspedes distribuidos en diferentes cuartos:</p>
        </div>
    );
};

export default LaPosada;