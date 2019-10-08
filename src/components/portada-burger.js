import React from 'react';
import {Link} from 'gatsby';

// Estilos
import '../styles/burger.scss';

// Utilidades
import generateId from '../lib/generateId.js';

export default props => {
    console.log(props);
    return (
        <div className='burger'>
            <label className='burger__label' for="check-burger">&nbsp;</label>
            <input className='burger__check' type='checkbox' id="check-burger"></input>
            <nav className='burger__nav'>
                <ul className='burger__ul'>
                    {props.children.map(item => <li className='burger__li'><Link className='burger__link' to={generateId(item)}>{item}</Link></li>)}
                </ul>
            </nav>
        </div>
    );
}

/*
{props.children.map(item => <li className='cacas'><Link className='cacas' to={generateId(item)}>{item}</Link></li>)}

{items.map(item => <li className={this.state.modoBarra ? stylePortada.liBarra : stylePortada.li}><Link className={this.state.modoBarra ? stylePortada.linkBarra : stylePortada.link} to={generateId(item)}>{item}</Link></li>)}*/