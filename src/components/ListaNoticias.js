import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

//noticias es un array!!!!!! y utilizo map para poder recorrerlo
const ListaNoticias = ({noticias}) =>  ( 
    <div className="row">
        {noticias.map(noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
);

//Documentando
ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}
 
export default ListaNoticias;