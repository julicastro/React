import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const buttonText = "Click Me!";
    const objetoJs = { text: ' to submit' };
    // JSX No admite objetos de JS salvo q ponga nombre del atributo
    return (
        <div>
            <label htmlFor="name" className="label">Enter e-mail</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                {buttonText} {objetoJs.text}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)