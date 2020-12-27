import React, { useState } from 'react'
import styles from './styles.module.css'
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
                    <div style={{ fontSize: "18px", fontWeight: "250", margin: "20px 0" }}>Forgot your password?<span style={{ fontWeight: "bold", marginLeft: "8px", textDecoration: "underline" }}>Click here</span></div>
                    <button type="submit" className={styles.loginButton}>Log in</button>
                    <div style={{ fontSize: "18px", fontWeight: "250", marginTop: "30px" }}>By continuing to use Calm, you agree to our<span style={{ fontWeight: "bold", marginLeft: "8px", textDecoration: "underline" }}>Terms</span></div>
                    <div style={{ fontSize: "18px", fontWeight: "250", marginTop: "20px" }}>Don't have an account?<span style={{ fontWeight: "bold", marginLeft: "8px", textDecoration: "underline" }}>Sign up</span></div>
                </form>
            </div>
        </div>
    )
}
