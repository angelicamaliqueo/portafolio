
import { Context } from '../store/appContext';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../componente/Navbar'
import Navbarcomponente from '../componente/Navbar';
import ComponenteFooter from '../componente/ComponenteFooter';

function InformacionPersonaje() {

    return (
       
        <div style={{backgroundImage:"linear-gradient(#c7f7f7, #cfcecf)" }}>
             <Navbarcomponente/>
            <img src='https://media.giphy.com/media/N630eTGngyJ5ztefOb/giphy.gif'
        float={'left'}
        width={'100px'}
        height={'100px'}
        zIndex={'2'}
            />
<h1 style={{ textshadow: "2px 2px 4px", color: "purple", textAlign:"center", zIndex:"4"}}> Información Personal</h1>
<h3 style={{ textAlign: "center", textShadow: "2px 2px 5px #ba9df4" }}> Nombres: Angelica Maria<br/>Apellidos: Maliqueo Rumian</h3><br/>
<p style={{ textAlign: "center", textShadow: "2px 2px 5px #ba9df4" }}>Me considero una persona proac﻿tiva, con alto sentido de la responsabilidad,<br /> honestidad, solidaridad, puntualidad y dispuesta a elaborar competitivamente a todo nivel. <br />Con grandes deseo de superación y con expectativas de crecimiento para poder llegar a ser un gran profesional</p>


      <img src='https://media.giphy.com/media/NgurY1o4z080Jfoyzw/giphy.gif'
        float={'right'}
        width={'100px'}
        height={'100px'}
        zIndex={'2'}
        textAlign={"center"}
            /> 
<h3 style={{ textAlign: "center", textShadow: "2px 2px 5px #ba9df4" }}> Lenguaje de Programación</h3>

<h4 style={{ textAlign: "center", textShadow: "2px 2px 5px #ba9df4" }}>HTML, CSS, Bootstrap, JavaScript, React, Python, Flask, SQL, SQLAlchemy, Git, Github, Scrum, REST API</h4>

<div>
<a href="https://github.com/angelicamaliqueo">
    <img height="250rem" src="https://github-readme-stats.vercel.app/api?username=angelicamaliqueo&show_icons=true&theme=synthwave&include_all_commits=true&count_private=true"/>
    <img height="250em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=angelicamaliqueo&layout=compact&langs_count=7&theme=synthwave"/>
  </a>
</div>

<ComponenteFooter/>
       
        </div>


    );
}

export default InformacionPersonaje;