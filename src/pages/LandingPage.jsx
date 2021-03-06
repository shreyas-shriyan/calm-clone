import React, { useState } from 'react'
import styles from './Landing.module.css'
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"
import Login from '../components/Login'

export default function Dashboard(props) {

    const [loginModal, setLoginModal] = useState(false)

    /* handle login modal close */
    const handleClose = () => {
        setLoginModal(false)
    }

    return (
        <div>
            <div className={styles.overlay}>
                <div style={{ display: "flex", margin: "0 9%", paddingTop: "10px", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <img height="38.88px" src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" ></img>
                    </div>
                    <div className={styles.navlinks}>
                        <button>For Business</button>
                        <button onClick={() => setLoginModal(true)}>Login</button>
                        <button style={{ border: "2px solid white" }} className={styles.tryButton}>Try Calm for Free</button>
                    </div>
                </div>
                <div className={styles.content} >
                    <div style={{ fontSize: "49.5px", color: "white" }}>Find Your Calm</div>
                    <div style={{ color: "white", fontSize: "27.5px", margin: "10px 0 20px 0" }}>Sleep more. Stress less. Live better.</div>
                    <button className={styles.getStartedbutton} >Get Started</button>
                </div>
            </div>

            {/* footer */}
            <div style={{ backgroundColor: 'rgb(113, 113, 113)' }}>
                <div className={styles.footer} >
                    <div className={styles.footerColumn}>
                        <div style={{ fontWeight: "500", fontSize: "20px" }}>Company</div>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Press</div>
                        <div>Blog</div>
                        <div>Meet our Instructor</div>
                        <div>Calm Science</div>
                        <div>Brand Partneships</div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div style={{ fontWeight: "500", fontSize: "20px" }}>Offers</div>
                        <div>Buy a Gift</div>
                        <div>Redeem a Gift</div>
                        <div>Calm for Business</div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div style={{ fontWeight: "500", fontSize: "20px" }}>Help</div>
                        <div>FAQ</div>
                        <div>Contact Us</div>
                        <div>Terms</div>
                        <div>Privacy</div>
                        <div>Cookies</div>
                    </div>
                    <div className={`${styles.footerColumn} ${styles.footerIcons}`}>
                        <FaInstagram></FaInstagram>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
                <div style={{ paddingBottom: "50px", textAlign: "center", color: "rgba(255, 255, 255,0.5)" }}>Copyright © 2020 Calm. All rights reserved</div>
            </div>

            {/* Login Modal */}
            <div>
                {loginModal ? <Login {...props} handleClose={handleClose}></Login> : null}
            </div>
        </div>
    )
}
