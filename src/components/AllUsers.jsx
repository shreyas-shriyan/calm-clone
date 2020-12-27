import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import data from './users';

export default function AllUsers(props) {
    const [select, setSelect] = useState("0")
    const range = ["1 day", "1 month", "3 months", "6 months"]


    return (
        <div style={{ width: "82vw", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

            <div style={{ width: "59%", display: "flex", backgroundColor: "white", margin: "40px auto 0 auto", padding: "15px 40px", borderRadius: "50px", justifyContent: "space-between", alignItems: "center" }} >
                <div>{`Most Unhappy Hours : ${data[0].labels[6]}`}</div>
                <button style={{ borderRadius: "20px", border: "none", padding: "8px", backgroundColor: "DodgerBlue", outline: "none" }} onClick={() => alert("Notified Unhappy Users")}>Notify Unhappy Users</button>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>Range :</div>
                    <select style={{ borderRadius: "20px" }} onChange={(e) => setSelect(e.target.value)}  >
                        <option value="0">{range[0]}</option>
                        <option value="1" >{range[1]}</option>
                        <option value="2" >{range[2]}</option>
                        <option value="3">{range[3]}</option>
                    </select>
                </div>

            </div>

            <div style={{ width: "60%", margin: "auto", backgroundColor: "white", padding: "35px", borderRadius: "30px" }} >
                <Line
                    data={data[select]}
                    options={{
                        title: {
                            display: true,
                            text: 'Users Mood Trend',
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
