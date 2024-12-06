
import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link  } from 'react-router-dom';
import { toast } from 'react-toastify';



function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        //criando a variavel que vai receber a lista

        const minhaLista = localStorage.getItem("@primefilme");

        //Se não tiver nada no localstorage cria uma nova lista

        setFilmes(JSON.parse(minhaLista) || []);


    }, [])

    function excluirFilme(id){

        //Filtra filmes da nossa useState
        let filtroFilmes = filmes.filter((item) => {

            return (item.id !== id)

        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primefilme", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso");

    }

    return(

        <div className="meus-filmes">
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Voce não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((item) => {

                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )

                })}  
            </ul>

        </div>


    )


}

export default Favoritos;