import './App.css';
import Card from './components/card/Card';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App () {
   return (
      <div>
         <div className='App' style={{ padding: '25px'}}> 
            <SearchBar
               onSearch={(characterID) => window.alert(characterID)}
         />
         </div>
         <div style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               }}
         > 
            <Card
               name={Rick.name}
               species={Rick.species}
               gender={Rick.gender}
               image={Rick.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
      </div>
      <hr />
      <div>
         <Cards
            characters={characters}
         />
      </div>
      <hr />
      
   </div>
   )
};

export default App;
