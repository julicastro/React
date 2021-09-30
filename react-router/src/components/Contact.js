import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';


const Contact = (props) => {
    /*setTimeout ( () => {
        props.history.push('/about') // redirecciona dsp de un tiempo
    },2000)*/
    return (
        <div>
            <Modal />
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}
            >
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la Selección Argentina, equipo del que es capitán y máximo goleador histórico</p>
            </div>
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}
            >
                <Link to='/william' className='ui header'>William</Link>
                <p>Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la Selección Argentina, equipo del que es capitán y máximo goleador histórico</p>
            </div>
        </div>



    );
}

export default Contact;
