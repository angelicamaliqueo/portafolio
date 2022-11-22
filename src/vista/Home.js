import React, { useContext, useEffect } from "react";
import Navbar from '../componente/Navbar';
import Card from '../componente/Card';
import { Context } from "../store/appContext";
import Navbarcomponente from "../componente/Navbar";
import ComponenteFooter from "../componente/ComponenteFooter";



function Home() {

    

   
    return (
        <div style={{ backgroundImage: "linear-gradient(#c7f7f7, #cfcecf)" }}>

            <Navbarcomponente/>
            <div style={{ backgroundImage: "linear-gradient(#c7f7f7, #cfcecf)" }}>
                <Card/>
            </div>
            <ComponenteFooter/>
        </div>
    );
}


export default Home;