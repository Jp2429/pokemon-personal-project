import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductUl=styled.ul`
    /* width:100%; */
    display:grid;
    grid-template-columns:45% 45%;
    grid-template-rows:auto;
    list-style:none;
    justify-content:center;
    border-bottom:2px solid;
    padding:10px;
    /* margin-bottom:-5px; */
`

const NavBar = () => {

  return (
    <ProductUl>
      <li>
        <Link to="/pokemon-personal-project/">Home</Link>
      </li>
      <li>
        <Link to="/pokemon-personal-project/pokemon-list">List of Pokemon</Link>
      </li>
      
    </ProductUl>
  );
}

export default NavBar;