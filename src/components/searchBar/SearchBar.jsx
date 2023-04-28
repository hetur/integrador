import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input type='search' />
         <button onClick={()=>props.onSearch("Estoy recibiendo un id")}>Agregar</button>
      </div>
   );
}
