import React, {useState} from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    const [loanHistoryData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label:"Loan Taken in Thousands",
            data: [30, 30, 30, 30 ,10, 15, 9, 16, 30, 30, 30, 30],
            backgroundColor:["#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#fa8107", "#fa8107", "#fa8107", "#fa8107", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0",]
        }]
    })
    let options = {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    }
    
  return (
    <Bar data={loanHistoryData} options={options}/>
  )
}

export default BarChart