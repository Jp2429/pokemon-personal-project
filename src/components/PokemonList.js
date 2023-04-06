import styled from "styled-components"
import {useState} from 'react'

const PokeListUl=styled.ul`
    display:grid;
    grid-template-columns:45% 45%;
    grid-template-rows:auto auto;
    /* display:flexbox; */
    flex-wrap:wrap;
    grid-gap:20px;
    list-style:none;
    justify-content:center;
    background-color:red;
    
`
const PokeListLi=styled.li`
    display:grid;
    grid-template-columns:20% 40% 20% ;
    grid-template-rows:auto auto auto;
    justify-content:center;
    background-color:white;
    border:2px solid;
    border-radius:20px;
    margin-top:10px;
    margin-bottom:10px;
    /* box-shadow:2px 3px black; */
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
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
    margin-top:5px;
    margin-left:-50px;
    width:100px;
    &:hover{
        width:110px;
    }
`
const ImageDiv=styled.div`
    width:100px;
`
const TypeList=styled.li`
    list-style:square;
`
const GrassType=styled.p`
    color:#7AC74C;
`
const PoisonType=styled.p`
    color:#A33EA1;
`
const FireType=styled.p`
    color:#EE8130;
`
const WaterType=styled.p`
    color:#6390F0;
`
const DarkType=styled.p`
    color:#705746;
`
const ElectricType=styled.p`
    color:#F7D02C;
`
const FlyingType=styled.p`
    color:#A98FF3;
`
const BugType=styled.p`
    color:#A6B91A;
`
const RockType=styled.p`
    color:#B6A136;
`
const FairyType=styled.p`
    color:#D685AD;
`
const GhostType=styled.p`
    color:#735797;
`
const NormalType=styled.p`
    color:#A8A77A;
`
const FightingType=styled.p`
    color:#C22E28;
`
const GroundType=styled.p`
    color:#E2BF65;
`
const SteelType=styled.p`
    color:#A8A77A;
`
const DragonType=styled.p`
    color:#6F35FC;
`
const IceType=styled.p`
    color:#B7B7CE;
`
const PsychicType=styled.p`
    color:#F95587;
`
const PokemonNotFoundHeader=styled.h1`
    color:white;
    text-align:center;
    font-size:22px;
    font-weight:bold;
    padding:5px;
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
    const Capitalize=((str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    })

    const pokemonNodes=pokemonList.map((pokemon)=>{
        const pokemonTypes=pokemon.types.map((type,index)=>{
            return (
                <TypeList>
                   <GrassType>{type.type.name==="grass" ? Capitalize(type.type.name):null}</GrassType>
                   <PoisonType>{type.type.name==="poison" ? Capitalize(type.type.name):null}</PoisonType>
                   <WaterType>{type.type.name==="water" ? Capitalize(type.type.name):null}</WaterType>
                   <FireType>{type.type.name==="fire" ? Capitalize(type.type.name):null}</FireType>
                   <DarkType>{type.type.name==="dark" ? Capitalize(type.type.name):null}</DarkType>
                   <RockType>{type.type.name==="rock" ? Capitalize(type.type.name):null}</RockType>
                   <SteelType>{type.type.name==="steel" ? Capitalize(type.type.name):null}</SteelType>
                   <FlyingType>{type.type.name==="flying" ? Capitalize(type.type.name):null}</FlyingType>
                   <NormalType>{type.type.name==="normal" ? Capitalize(type.type.name):null}</NormalType>
                   <BugType>{type.type.name==="bug" ? Capitalize(type.type.name):null}</BugType>
                   <ElectricType>{type.type.name==="electric" ? Capitalize(type.type.name):null}</ElectricType>
                   <GroundType>{type.type.name==="ground" ? Capitalize(type.type.name):null}</GroundType>
                   <FairyType>{type.type.name==="fairy" ? Capitalize(type.type.name):null}</FairyType>
                   <DragonType>{type.type.name==="dragon" ? Capitalize(type.type.name):null}</DragonType>
                   <IceType>{type.type.name==="ice" ? Capitalize(type.type.name):null}</IceType>
                   <FightingType>{type.type.name==="fighting" ? Capitalize(type.type.name):null}</FightingType>
                   <PsychicType>{type.type.name==="psychic" ? Capitalize(type.type.name):null}</PsychicType>
                   <GhostType>{type.type.name==="ghost" ? Capitalize(type.type.name):null}</GhostType>
                </TypeList>
                )
        })
        return(
            <PokeListLi key={pokemon.id}>
                <ImageDiv>
                    <PokemonImage src={pokemon['sprites']['other']['official-artwork']['front_default']}/>
                </ImageDiv>
                <div>
                    <p><b>Name:</b> {Capitalize(pokemon.name)}</p>
                    <p><b>Weight:</b> {pokemon.weight} pounds</p>
                    <p><b>Height:</b> {pokemon.height/10}m</p>           
                </div>
                <div>
                    <p><b>Types:</b></p>
                    <ul>
                        {pokemonTypes}
                    </ul>
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
                {!pokemonList.length ?<PokemonNotFoundHeader>Could not find a Pokemon by that name</PokemonNotFoundHeader>:null}
                <PokeListUl>                   
                    {pokemonNodes}
                </PokeListUl>
            </ListDiv>
        </section>
    )
}
export default PokemonList