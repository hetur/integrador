import styles from "./Form.module.css"
import { useEffect, useState } from "react";

export default function Form(props) {
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
const validate = (inputs) => {
    const errors = {};
        if (!regexEmail.test(inputs.userName)){
          errors.userName = "Debe ser un Email";
        }
        if (!inputs.userName) {
            errors.userName = "No puede ser vacio";
        }
        if (inputs.userName.length > 35) {
            errors.userName = "No puede tener mas de 35 caracteres"
        }
        if (!validLettersAndNumbers.test(inputs.password)) {
            errors.password ="debe contener al menos un numero";
        }
        if(inputs.password.length < 6 || inputs.password.length > 10){
            errors.password = " debe tener entre 6 y 10 carcteres";
        }
        return errors;
    };
    const [userData, setUserData] = useState ({
        userName: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        userName: "",
        password: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrors(
            validate({
                ...userData,
                [name]: value,
            })
        );
    };
    useEffect(() => {
        console.log(userData);
    }, [userData]);
    return (
        <form className={styles.container}>
            <img src="https://i.pinimg.com/564x/61/de/2b/61de2ba956418acd9ab454ceca15bbb2.jpg" alt="not found"
            />
            <br />
            <label htmlFor="">Nombre: </label>
            <input
                type="text"
                value={userData.userName}
                name="userName"
                onChange={handleChange}
                className={errors.userName && styles.warning}
                />
                {errors.userName ? <p styles={{color: "red"}}>{errors.userName}</p> : null}
            <label htmlFor="">Password: </label>
                <input
                type="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
                className={errors.password && styles.warning}
                />
                {errors.password ? <p styles={{color: "red"}}>{errors.password}</p> : null}
            <br />
            <button>Login</button>
        </form>
    )
}