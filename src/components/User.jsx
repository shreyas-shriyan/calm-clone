import React from 'react'
import styles from './style.module.css'

export default function User(props) {
    return (
        <div className={styles.userOverlay}>
            <div className={styles.sidebar} >
                <img height="38.88px" src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" ></img>
            </div>
            <div style={{ width: "80vw" }}></div>
        </div>
    )
}
