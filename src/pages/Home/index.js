
/*
    Usando o useEffect para que toda vez que acessamos o
    site ela vai para api e busca os filmes.

    Usando useState para que depois de ele buscar armazenar em um estado para conseguirmos usar
    na nossa aplicação.

    //URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR
*/

import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    //Toda vez que a nossa aplicação abrir ela vai chamar o nosso useEffect

    useEffect(() => {

        //criando uma função assincrona

        async function loadFilmes(){

            const response = await api.get("/movie/now_playing", {
                //Passando parametros
                params:{
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);

        }

        loadFilmes();

    }, [])


    if(loading){
        return(

            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(

        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {

                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )

                })}
            </div>
        </div>

    )

}

export default Home;