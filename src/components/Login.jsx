import React, { useState } from 'react'
import styles from './style.module.css'
import { useHistory } from 'react-router-dom'

export default function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === "shreyas") {
            if (password === "12345678") {
                props.handleClose()
                history.push("/user")
            }
            else {
                alert("wrong password")
            }
        }
        else if (username === "admin") {
            if (password === "12345678") {
                props.handleClose()
                history.push("/admin")
            }
            else {
                alert("wrong password")
            }
        }
        else {
            alert("wrong credentials")
        }
    }

    return (
        <div className={styles.loginModal}>
            <div onClick={() => props.handleClose()} style={{ textAlign: "right", fontSize: "30px", marginRight: "10px" }} >x</div>
            <div style={{ margin: "0 2vw" }}>
                <div style={{ fontSize: "35px" }} >Log into your account</div>
                <form className={styles.loginForm} style={{ display: "flex", flexDirection: "column" }} onSubmit={(e) => handleSubmit(e)}>
                    <input required onChange={(e) => setUsername(e.target.value)}></input>
                    <input required onChange={(e) => setPassword(e.target.value)} type="password"></input>
                    <div>Forgot your password? Click here</div>
                    <button className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    )
}
