import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    // extraer los datos aplicando destructuring
    const { urlToImage, url, title, description, source } = noticia;

    // condicionalmente cargar la imagen si esta disponible utilizando el ternario (?)

    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    return ( 
        //col es de columna,en s12 nos indica que en tamaño pequeño utilizara las 12 columnas,
        //en m6 tamaño mediano utilizara 6 columnas y en l4 tamaña grande utilizara 4 columnas
        //esto se define asi para los diferentes dispositivos que pueden acceder a la app
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                            Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
     );
}
 
//Documentando
Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}

export default Noticia;