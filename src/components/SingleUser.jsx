import React, { useState } from 'react'
import styles from './styles.module.css'
import { Line } from 'react-chartjs-2';
import data from './user'

export default function SingleUser(props) {

    const [select, setSelect] = useState("0")

    console.log(select)

    const users = ["Shreyas", "Suhas", "Akash"]

    return (
        <div style={{ width: "82vw", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

            <div style={{ width: "65%", display: "flex", backgroundColor: "white", margin: "40px auto 0 auto", padding: "5px", borderRadius: "40px", justifyContent: "space-around", alignItems: "center" }} >
                <h3>Select User:</h3>
                <select value={select} onChange={(e) => setSelect(e.target.value)} style={{ borderRadius: "30px", height: "30px", padding: "0 30px", outline: "none" }}  >
                    <option value="0">{users[0]}</option>
                    <option value="1" >{users[1]}</option>
                    <option value="2" >{users[2]}</option>
                </select>
            </div>

            <div style={{ width: "60%", margin: "auto", backgroundColor: "white", padding: "35px", borderRadius: "30px" }} >
                <Line
                    data={data[`${select}`]}
                    options={{
                        title: {
                            display: true,
                            text: `${users[select]}'s Mood Trend`,
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
    )
}
