import styles from "./Card.module.css"
export default function Card({name, species, gender, image, onClose}) {
   return (
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
   );
}