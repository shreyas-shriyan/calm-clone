import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import SingleUser from "../components/SingleUser"
import AllUsers from "../components/AllUsers"
import { logout } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function User() {

    const [currentPage, setCurrentPage] = useState("singleUser")
    const dispatch = useDispatch();

    return (
        <div className={styles.userOverlay}>

            <div className={styles.sidebar} >
                <img src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" ></img>
                <button className={currentPage === "singleUser" ? styles.currentButton : styles.normalButton} id="0" style={{ marginTop: "40px" }} onClick={() => setCurrentPage("singleUser")}>Single User</button>
                <button className={currentPage === "all" ? styles.currentButton : styles.normalButton} id="1" onClick={() => setCurrentPage("all")} >All Users</button>
                <button className={styles.normalButton} id="2" onClick={() => dispatch(logout())}>Logout</button>
            </div>

            <div>
                {
                    currentPage === "singleUser" ? <SingleUser></SingleUser> : <AllUsers></AllUsers>
                }
            </div>

        </div>
    )
}
