import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias: []
   }
   //se utiliza estas funciones denominadas el ciclo de vida comunmente para hacer llamados a apis
  componentDidMount() {
    this.consultarNoticias();
  }

  //utilizo un arrow function (=>)
  //se utiliza ya sea async await o fetch para tratar con las apis
  consultarNoticias = async  (categoria = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5158406d37f8463da0b5dd8bb09064fc`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      this.setState({
        noticias : noticias.articles
      })
  }

  render() { 
    return ( 
        <Fragment>
            <Header 
              //titulo es un props que se pasa al header.js en donde tengo el html que va a mostrar el valor de titulo
                titulo='Noticias React API'
            />

            <div className="container white contenedor-noticias ">
                <Formulario 
                  consultarNoticias={this.consultarNoticias}
                />

                <ListaNoticias 
                  noticias={this.state.noticias}
                />
            </div>
        </Fragment>
    );
  }
}
 
export default App;