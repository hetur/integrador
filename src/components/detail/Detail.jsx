import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"
import styles from "./Detail.module.css"

export default function Detail(pops){
    const navigate = useNavigate()
    const {detailId} = useParams()
    const [character, setCharacter] = useState ({})
    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res) => res.json())
        .then((data) => {
            data.name ? setCharacter(data) : alert("no hay personajes con ese id")
        })
        .catch((err) => {
            console.log(err)
            alert("ups algo salio mal")
        })
        return ()=> setCharacter ({})
    },[]);
    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)}>Regresar</button>
          <div className={styles.containerInfo}>
            <div>
                <h1>Name: {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Gender: {character.gender}</h1>
                <h1>Specie: {character.species}</h1>
                <h1>Origin: {character.origin ?.name}</h1>
                <h1>Location: {character.location ?.name}</h1>
            </div>
            <img src={character.image} alt="" />
          </div>
        </div>
    )
}