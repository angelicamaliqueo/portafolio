import React, { useContext, useEffect } from "react";
import Navbar from '../componente/Navbar';
import Card from '../componente/Card';
import { Context } from "../store/appContext";
import Navbarcomponente from "../componente/Navbar";


function Home() {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPokemon();
    }, []);
    console.log("store", store)
    return (
        <>

            <Navbarcomponente />
            <Card pokemon={store.pokemon} />

        </>
    );
}


export default Home;