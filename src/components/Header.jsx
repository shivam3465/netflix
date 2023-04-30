import React from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import '../styles/header.scss'
import logo from './netflix-logo.png'

let displayed=false;
const toogleView=() =>{
  if(!displayed) {
    document.getElementById('ham').style.display="none";
    document.getElementById('search').style.display="none";
    document.getElementById('nav').style.display="flex";
    document.getElementById('cross').style.display="initial";
    document.getElementById('nav').style.flexDirection="column";    
    document.getElementById('header').style.height="22rem";
    document.getElementById('header').style.flexDirection="column";
    document.getElementById('header').style.position="absolute";
    // document.getElementById('header').style.zIndex="1";
    document.getElementById('header').style.width="100%";        
  }
  else{
    document.getElementById('nav').style.display="none";
    document.getElementById('ham').style.display="initial";  
    document.getElementById('cross').style.display="none";       
    
    document.getElementById('search').style.display="initial";             
    document.getElementById('header').style.height="3rem";
    document.getElementById('header').style.flexDirection="row";

    document.getElementById('header').style.position="absolute";
    // document.getElementById('header').style.zIndex="0";    
  }
  displayed=!displayed;
}
let isactive=false;
const activateSearch=()=>{
  if(!isactive){
    
    // document.getElementById('nav').style.display="none";          
    document.getElementById('search').style.display="none";          
    document.getElementById('searchBar').style.display="initial";  
    document.getElementById('searchCross').style.display="initial";       
  }
  else{
    // document.getElementById('nav').style.display="initial";              
    document.getElementById('search').style.display="initial";          
    document.getElementById('searchBar').style.display="none";          
    document.getElementById('searchCross').style.display="none";   
  }
  isactive=!isactive;
}

export default function Header() {
  return (
    <nav id='header'>      
        <GiHamburgerMenu id="ham" onClick={toogleView}/>
        <img src={logo} alt="NETFLIX" id='logo' />
      <main>
        <div id='nav'>
          <Link to='/'>TV Shows</Link>
          <Link to='/'>Movies</Link>
          <Link to='/'>Recently Added</Link>
          <Link to='/'>My List</Link>
        </div>
        <RxCross1 id='cross' onClick={toogleView}/>
      </main>
      <div id="searchBox">
        <input type="text" id="searchBar" placeholder='Type here ...'/>
        <GoSearch id='search' onClick={activateSearch}/>
        <RxCross1 id='searchCross' onClick={activateSearch}/>
      </div>
    </nav>
  )
}
