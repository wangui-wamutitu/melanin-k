import React, {useState} from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const PieChart = () => {
    const [smeLoanData] = useState({
        labels: ['KES 2,100,000', 'KES 1,900,000'],
        datasets:[{
            data: [2100000, 1900000],
            backgroundColor:['#fa8107', '#a1a1a1']
        }]
    })
    
  return (
    <Pie data={smeLoanData}/>
  )
}

export default PieChart