import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import { Line } from 'react-chartjs-2';

export default function User(props) {

    const [select, setSelect] = useState("7")

    /* dummy data for the user */
    const state = [{
        labels: ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thrusday', "Friday", "Saturday"],
        datasets: [
            {
                label: "mood",
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [1, 5, 3, 4, 2, 4, 1]
            }
        ]
    }, {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        datasets: [
            {
                label: "mood",
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [2, 4, 3, 4, 2, 4, 1, 2, 5, 3, 5, 2, 4, 1, 3, 5, 3, 4, 2, 4, 3, 1, 5, 4, 3, 2, 4, 1, 3, 5]
            }
        ]
    }]

    return (
        <div className={styles.userOverlay}>
            <div className={styles.sidebar} >
                <img src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" ></img>
                <button>Mood Data</button>
                <button onClick={() => alert("logout")} >Logout</button>
            </div>

            <div style={{ width: "82vw", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

                <div style={{ width: "63%", display: "flex", backgroundColor: "white", margin: "40px auto 0 auto", padding: "15px", borderRadius: "30px", justifyContent: "space-between" }} >
                    <div>{`Happy Days : ${state[`${select === "7" ? 0 : 1}`].datasets[0].data.filter((item) => item === 5).length}`}</div>
                    <div>{`Sad Days : ${state[`${select === "7" ? 0 : 1}`].datasets[0].data.filter((item) => item === 1).length}`}</div>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "10px" }} >Range :</div>
                        <select onChange={(e) => setSelect(e.target.value)}  >
                            <option value="7" >7 days</option>
                            <option value="30" >1 month</option>
                        </select>
                    </div>
                </div>

                <div style={{ width: "60%", margin: "auto", backgroundColor: "white", padding: "35px", borderRadius: "30px" }} >
                    <Line
                        data={state[`${select === "7" ? 0 : 1}`]}
                        options={{
                            title: {
                                display: true,
                                text: 'Your Mood Trend',
                                fontSize: 20
                            },
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        stepSize: 1
                                    }
                                }]
                            }
                        }}
                    />
                </div>

            </div>
        </div >
    )
}
