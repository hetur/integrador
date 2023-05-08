import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav";
import {Routes, Route, useLocation} from "react-router-dom"
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from './components/form/Form';

function App () {
   const location = useLocation()
   const [characters, setCharacters] = useState([])
   const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data)=>{
         (data.name ? characters.filter((char) => char.id === data.id).length === 0: "")? setCharacters([...characters, data]):
         alert("Personaje ya existe")
      })
      .catch((error) => console.log(error))
   };

   useEffect(() =>{

   }, [])

   const onClose = (id) => {
      const filtered = characters.filter((char) =>char.id !== Number (id))
      setCharacters(filtered);
   };
   return (
      <div
         className='App'
         style={{ 
         padding: "25px",
      }}
        >
         {location.pathname !== "/" &&
         <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail/>} />
         </Routes>

      </div>
   );
}

export default App;


