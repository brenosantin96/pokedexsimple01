import axios from "axios";

let BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

export const getAllPokeInfo = async () => {
    let response = await axios.get(BASEURL)
    if(response){ return response}
}

export const getOnePokeInfo = async (id: number) => {
    let response = await axios.get(`${BASEURL}${id}`)
    if(response){
        return response
    } else {
        console.log("Deu um erro na chamada da API: GetOnePokeInfo")
    }
}

let BASEURLPAGINATION = 'https://pokeapi.co/api/v2/pokemon/';
//?offset=20&limit=20

export const controlPage = async (offset: number) => {
    let response = await axios.get(`${BASEURL}?offset=${offset}&limit=20`)
    if(response){ return response}
    
}

//https://pokeapi.co/api/v2/pokemon//?offset=${offset}&limit=20