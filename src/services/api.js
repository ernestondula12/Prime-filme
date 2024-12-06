
import axios from "axios";


//Base URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

//fetch e axios qual é a diferença entre elas e quando usa-las e qual é a melhor

//Criando a variavel que vai receber o resultado da nossa requisição

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/'

});

export default api;