import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'
import './style.css'

const Funding = () => {
  let height = window.innerHeight - 80
  return (
    <>
      <section className='funding-container'>
        <div className="info-container">
          <article className='getfunds-container'>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"10px"}}>
              <h6 style={{fontSize:"18px", fontWeight:"bolder", marginBottom:"10px"}}>Get more funding today!</h6>
              <p>What kind of funding would you like to get for your business?</p>
              <div style={{display:"flex", marginTop:"10px"}}>
                <article style={{width:'200px', height:"100px", backgroundColor:"#f5ac02", borderRadius:"10px", padding:"5px 10px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginRight:"50px"}}>
                  <h5 style={{fontSize:"18px"}}>Get a loan</h5>
                  <BsArrowUpRightCircle fontSize={'24px'} style={{backgroundColor:"#f6f6f6", borderRadius:"50%", cursor:"pointer"}}/>
                </article>
                <article style={{width:'200px', height:"100px", backgroundColor:"#f5ac02",borderRadius:"10px",  padding:"5px 10px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <h5 style={{fontSize:"18px"}}>Get Private Capital</h5>
                  <BsArrowUpRightCircle fontSize={'24px'} style={{backgroundColor:"#f6f6f6", borderRadius:"50%", cursor:"pointer"}}/>
                </article>
              </div>
            </div>
            <article className='funds-statistics'>
              <h5 style={{fontSize:"18px"}}>Funds Statistics</h5>
              <article style={{width:'98%', height:"80px", backgroundColor:"#f5ac02", borderRadius:"10px", padding:"5px 10px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <h5 style={{fontSize:"18px"}}>KES 6,690,000</h5>
                <p>Total Private Capital</p>
              </article>
              <article style={{width:'98%', height:"80px", backgroundColor:"#f5ac02", borderRadius:"10px", padding:"5px 10px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <h5 style={{fontSize:"18px"}}>KES 3,000,000</h5>
                <p>Total Loan Borrowed</p>
              </article>
            </article>
          </article>
          <div style={{height:"72%", marginBottom:"15px", padding:"20px 0px 0px 10px", backgroundColor:"#fff", borderRadius:"10px"}} className='barchart-container'>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <h2 style={{marginRight:"20px"}}>Loan History</h2><IoIosArrowDown/>
            </div>
            <div style={{width:"100%"}}>
              <BarChart/>
            </div>
          </div>
        </div>
        <div className='othercharts-container'>
          <div style={{flex:6, display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
            <div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
              <h6 style={{fontSize:"18px", paddingBottom:"5px",fontWeight:"bolder", borderBottom:"3px solid #fa8107"}}>Current Loans</h6>
              <h6 style={{fontSize:"14px", color:"#c2c2c2"}}>Current Private Equity</h6>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <h5 style={{fontSize:"18px", color:"#fa8107", marginRight:"10px"}}>KES 3,000,000</h5> <AiFillEye fontSize={'22px'}/>
            </div>
            <div className='line-chart'>
              <LineChart/>
            </div>
          </div>
          <div style={{flex:6, display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
            <div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px"}}>
              <h6 style={{fontSize:"18px", paddingBottom:"5px",fontWeight:"bolder", borderBottom:"3px solid #fa8107"}}>Diaspora SME Loan</h6>
              <h6 style={{fontSize:"14px", color:"#1dad74"}}>Active</h6>
            </div>
            <div className='pie-chart'>
              <PieChart/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Funding