import React from 'react';

// Estilos
import burgerStyle from '../styles/burger.module.scss';

// Utilidades
import generateId from '../lib/generateId.js';
import smoothScroll from '../lib/smooth-scroll.js';

export default props => {
    const itemList = (
        <div className={burgerStyle.color}>
            <nav className={burgerStyle.nav}>
                <ul className={burgerStyle.ul}>
                    {props.secciones.map(item => <li className={burgerStyle.li}><a className={burgerStyle.link} href={generateId(item)} onClick={smoothScroll}>{item}</a></li>)}
                </ul>
            </nav>
        </div>
    );
    return (
        <div className={burgerStyle.burger}>
            <label className={burgerStyle.label} for="check-burger"><span className={burgerStyle.icon}>&nbsp;</span></label>
            <input className={burgerStyle.check} type="checkbox" id="check-burger"></input>
            {itemList}
        </div>
    );
}

/*
{props.children.map(item => <li className='cacas'><Link className='cacas' to={generateId(item)}>{item}</Link></li>)}

{items.map(item => <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to={generateId(item)}>{item}</Link></li>)}*/