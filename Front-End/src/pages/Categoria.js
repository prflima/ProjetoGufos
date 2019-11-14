import React, { Component } from 'react';
import Rodape from '../componentes/Rodape';
import Header from '../componentes/Header';

class Categoria extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            listaCategorias : [],
            titulo : ''
        }
    }

    
    // Função que faz a requisição para a API
    // Atribui os dados recebidos ao state listarCategorias
    // Caso ocorra um erro, exibe no console do navegador
    buscarCategorias(){
        fetch('http://localhost:5000/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState( {listaCategorias : data} ))
        .catch((erro) => console.log(erro))
    }

    componentDidMount(){
        this.buscarCategorias();
    }

    render() {
        return (
            <div>
                <Header/>
                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    { 
                                        // Percorre o array listaCategorias e preenche o corpo da tabela, 
                                        // com o Id e o Título de cada categoria.
                                        this.state.listaCategorias.map(function(categoria){
                                            return (
                                                <tr key={categoria.categoriaId}>
                                                    <td>{categoria.categoriaId}</td>
                                                    <td>{categoria.titulo}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
                            </h2>
                            <form>
                                <div class="container">
                                    <input
                                        type="text"
                                        id="nome-tipo-evento"
                                        placeholder="tipo do evento"
                                    />
                                    <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        )
    }
}

export default Categoria;