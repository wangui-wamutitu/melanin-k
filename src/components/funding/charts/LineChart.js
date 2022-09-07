import React, {useState} from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChart = () => {
    const [borrowedLoanData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets:[{
            label:"Borrowed Loan",
            data: [12, 20, 22, 10 ,12, 17],
            borderColor:"#fa8107",
            borderWidth:2
        }]
    })
    let options = {
        elements: {
            line: {
                tension: 1
            }
        },  
        scales: {
            y: {
                grid: {
                    display: false
                },
                max: 30, 
                min:0
            }
        }
    }
    
  return (
    <Line data={borrowedLoanData} options={options}/>
  )
}

export default LineChart