import styled from "styled-components"
import {useState} from 'react'

const PokeListUl=styled.ul`
    display:grid;
    grid-template-columns:30% 30% 30%;
    grid-template-rows:auto auto auto;
    grid-gap:20px;
    list-style:none;
    justify-content:center;
    background-color:red;
    
`
const PokeListLi=styled.li`
    display:grid;
    grid-template-columns:30% 60% ;
    grid-template-rows:auto auto;
    justify-content:center;
    background-color:white;
    border:2px solid;
    border-radius:20px;
    margin-top:10px;
    margin-bottom:10px;
    &:hover{
        background-color:whitesmoke;
    }

`
const FilterInput=styled.input`
    width:150px;
    justify-content:center;
    margin-top:10px;
`
const ListDiv=styled.div`
    padding:5px;
    background-color:red;
    border:2px solid;
`
const UrlButton=styled.button`
    width:25%;
    height:auto;
    padding:5px;
    background-color:red;
    color:white;
    &:hover{
        color:purple;
    }
    border:2px solid;
    margin:10px;
    margin-bottom:20px;

`
const PokemonImage=styled.img`
    margin-top:10px;
    width:100px;
    &:hover{
        /* background-color:red; */
    }
    /* animation-name: spin;
    animation-duration: 9000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    } */
`

const PokemonList=({pokemonList,filter,saveFilteredPokemon,onPrevChange,onNextChange,curOffset})=>{

    const handleChange=(evt)=>{
        const filterInput=evt.target.value
        
        saveFilteredPokemon(filterInput)
    }

    const handleClickPrev=function(){
        if(curOffset===0){
            alert("Error, You are on the first 20 pokemon")
        }else{
            const newOffset=curOffset-20
            onPrevChange(newOffset)
        }
    }
    const handleClickNext=function(){
        if(curOffset===1200){
            alert("Error, You are on the last 20 pokemon")
        }else{
            const newOffset=curOffset+20
            onNextChange(newOffset)
        }
    }

    const pokemonNodes=pokemonList.map((pokemon)=>{
        return(
            <PokeListLi key={pokemon.id}>
                <div>
                    <PokemonImage src={pokemon['sprites']['other']['official-artwork']['front_default']}/>
                </div>
                <div>
                    <p>Name: {pokemon.name}</p>
                    <p>Weight: {pokemon.weight} pounds</p>
                    <p>Height: {pokemon.height/100}m</p>
                </div>
            </PokeListLi>
        )
    })


    return(
        <section>
            <div>
                <UrlButton id="previous-20" onClick={handleClickPrev}> View Previous 20</UrlButton>
                <UrlButton id="next-20" onClick={handleClickNext}> View Next 20</UrlButton>
            </div>
            <ListDiv>
                <form>
                <FilterInput type="text" placeholder="Filter Pokemon by Name" value={filter} onChange={handleChange}></FilterInput>
                </form>
                <PokeListUl>
                    {pokemonNodes}
                </PokeListUl>
            </ListDiv>
        </section>
    )
}
export default PokemonList