import React,{useState,useEffect} from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import styled from "styled-components"
import PokemonList from "../components/PokemonList"
import Home from "../components/Home"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

const Main=styled.section`
    background-color:white;
    /* width:80%; */
    justify-content:center;
    /* border:5px solid; */
    border-top:5px solid;
    border-bottom:5px solid;
    /* border-radius:10px; */
    /* margin:25px; */
    /* margin-left:140px; */

`

const PokemonContainer=()=>{
    const [pokemonList,setPokemonList]=useState([])
    const [filteredPokemonList,setFilteredList]=useState([])
    const [filter,setFilter]=useState(null)
    const [offset,setOffset]=useState(0)
    const [limit,setLimit]=useState(20)

    useEffect(()=>{
        getPokemonList()
    },[offset])

    const getPokemonList=()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then(res => res.json())
            .then(pokemonData=>{getPokemonData(pokemonData.results)})
            // .catch(err => console.error(`Loading Pokemon error: ${err}`));
    }

    const getPokemonData=(pokemons)=>{

        const everyPokemonsDetails=pokemons.map((pokemon)=>{
            return fetch(pokemon.url)
                .then(res=>res.json())
        })
        Promise.all(everyPokemonsDetails)
            .then(pokemonData=>setPokemonList(pokemonData))
    }
    const saveFilteredPokemon=(filter)=>{
        setFilter(filter)
        const results=pokemonList.filter(pokemon=>pokemon.name.includes(filter))
        setFilteredList(results)
    }
    const onPrevChange=function(newOffset){
        // console.log( "New url: ",newOffset,newLimit)
        setOffset(newOffset)
        // setLimit(newLimit)
    }
    const onNextChange=function(newOffset){
        setOffset(newOffset)
        // setLimit(newLimit)
    }

    // setPokemonList
    return(
        <Main>
            <Router>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route exact path="/pokemon-list" element={<PokemonList pokemonList={!filter? pokemonList:filteredPokemonList} filter={filter} saveFilteredPokemon={saveFilteredPokemon} onPrevChange={onPrevChange} onNextChange={onNextChange} curOffset={offset}/>}/>
                    <Route exact path="/" element={<Home pokemonList={pokemonList} curOffset={offset}/>}/>
                </Routes>
            </Router>
        </Main>
    )
    //filteredPokemonList.length 
}
export default PokemonContainer