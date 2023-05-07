import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
         <button onClick={onClose}className={styles.button}>X</button> </div>
         <div className={styles.imageContainer}> <img src={image} alt='not found'/>
         <h2 className={styles.name}>{name}</h2>
         </div>
         <div className={styles.propsContainer}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
   </div>
      </Link>
   );
}