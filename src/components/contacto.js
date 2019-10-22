import React from 'react';

// Estilos
import contactoStyle from '../styles/contacto.module.scss';

const Contacto = () => {
    return (
        <footer className={contactoStyle.footer} id='contacto'>
            <div className={contactoStyle.color}>
                <h2 className={contactoStyle.titulo}>Contacto</h2>
                <div className={contactoStyle.wrapperContenido}>
                    <address className={contactoStyle.direcciones}>
                        <p className={contactoStyle.consultasReservas}>Consultas y reservas: <br></br><span>María Elena Compagnucci de Carreño</span></p>
                        <ul className={contactoStyle.direcUl}>
                            <li className={contactoStyle.direcLi}>
                                <div className={contactoStyle.direcKey}>
                                    <svg className={contactoStyle.direcIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96"><path d="M1 17v96H129V17ZM115.8 27.7 65 68.8 14.2 27.7ZM11.7 102.3v-63L65 82.5l53.3-43.2v63Z" transform="translate(-1 -17)"/></svg>
                                </div>
                                <div className={contactoStyle.direcValue}>
                                    <a className={contactoStyle.direcLink} href='mailto:posadabyb@yahoo.com.ar'>posadabyb<wbr></wbr>@yahoo.com.ar</a>
                                </div>
                            </li>
                            <li className={contactoStyle.direcLi}>
                                <div className={contactoStyle.direcKey}>
                                    <svg className={contactoStyle.direcIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.7 106"><path d="M100.3 111.9l-15.5-30s-8.7 4.3-9.1 4.5c-9.9 4.8-30-34.5-20.4-39.7l9.2-4.5L49.1 12l-9.3 4.6C8 33.2 58.5 131.3 91 116.5 91.6 116.2 100.3 111.9 100.3 111.9Z" transform="translate(-29.67 -12)"/></svg>
                                </div>
                                <div className={contactoStyle.direcValue}>
                                    <a className={contactoStyle.direcLink} href="tel:+54-3547-421811">+54-3547-421811</a>
                                    <br></br>
                                    <a className={contactoStyle.direcLink} href="tel:+54-9-3547-15-578716">+54-9-3547-15-578716</a>
                                </div>
                            </li>
                            <li className={contactoStyle.direcLi}>
                                <div className={contactoStyle.direcKey}>
                                    <svg className={contactoStyle.direcIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.7 106"><path d="M65 12C46.5 12 29.7 27 29.7 45.6S45 86.3 65 118c20-31.7 35.3-53.9 35.3-72.4S83.6 12 65 12Zm0 48.6A13.3 13.3 0 1 1 78.3 47.3 13.3 13.3 0 0 1 65 60.6Z" transform="translate(-29.67 -12)"/></svg>
                                </div>
                                <div className={contactoStyle.direcValue}>
                                    <span className={contactoStyle.direcLink}>Eduardo Madero 339 - Alta Gracia - 5186 - Córdoba, Argentina</span>
                                </div>
                            </li>
                        </ul>
                    </address>
                    <div className={contactoStyle.mail}>
                        <h3 className={contactoStyle.mailTitulo}>Enviar mail</h3>
                        <form className={contactoStyle.form}>
                            <div className={contactoStyle.formCampo}>
                                <label className={contactoStyle.formLabel}>Nombre *</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo}>
                                <label className={contactoStyle.formLabel}>Teléfono *</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo}>
                                <label className={contactoStyle.formLabel}>E-mail *</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo + ' ' + contactoStyle.largoMedio + ' ' + contactoStyle.nullMargin}>
                                <label className={contactoStyle.formLabel}>País</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo + ' ' + contactoStyle.largoMedio}>
                                <label className={contactoStyle.formLabel}>Provincia</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo + ' ' + contactoStyle.largoMedio + ' ' + contactoStyle.nullMargin}>
                                <label className={contactoStyle.formLabel}>Ciudad</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo + ' ' + contactoStyle.largoMedio}>
                                <label className={contactoStyle.formLabel}>Domicilio</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <input className={contactoStyle.formInputText} type='text'></input>
                                </div>
                            </div>
                            <div className={contactoStyle.formCampo}>
                                <label className={contactoStyle.formLabel}>Consulta *</label>
                                <div className={contactoStyle.formInputTextWrap}>
                                    <textarea className={contactoStyle.formInputText + ' ' + contactoStyle.formTextarea}></textarea>
                                </div>
                            </div>
                            <div className={contactoStyle.formSubmitWrap}>
                                <button className={contactoStyle.formSubmit}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Contacto;