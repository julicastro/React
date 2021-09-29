import React from 'react';


const Contact = (props) => {
    /*setTimeout ( () => {
        props.history.push('/about') // redirecciona dsp de un tiempo
    },2000)*/
    return (
        <div className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            >
            <h3 className='ui header'>Contact</h3>
            <p>Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la Selección Argentina, equipo del que es capitán y máximo goleador histórico</p>
        </div>
    );
}

export default Contact;
