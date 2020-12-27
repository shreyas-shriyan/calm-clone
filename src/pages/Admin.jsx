import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import SingleUser from "../components/SingleUser"
import AllUsers from "../components/AllUsers"

export default function User() {

    const [currentPage, setCurrentPage] = useState("singleUser")

    return (
        <div className={styles.userOverlay}>

            <div className={styles.sidebar} >
                <img src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" ></img>
                <button style={{ marginTop: "40px" }} onClick={() => setCurrentPage("singleUser")}>Single User</button>
                <button onClick={() => setCurrentPage("all")} >All Users</button>
                <button onClick={() => alert("logout")}>Logout</button>
            </div>

            <div>
                {
                    currentPage === "singleUser" ? <SingleUser></SingleUser> : <AllUsers></AllUsers>
                }
            </div>

        </div>
    )
}
