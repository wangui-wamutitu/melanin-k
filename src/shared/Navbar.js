import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'
import {IoMdNotificationsOutline, IoIosArrowDown} from 'react-icons/io'
import "../style.css"

const Navbar = () => {
  return (
    <nav style={{height:"80px", width:"100%", display:"flex",alignItems:"center", justifyContent:"space-between", padding:'0 15px'}}>
        <div className='company-name'>
            <img style={{height:"20px", width:"20px", borderRadius:"50%", marginRight:"10px"}} src={require('../assets/logo.jpg')} alt="Logo" />
            <h6 style={{fontSize:"18px", fontWeight:"bolder"}}>Melanin Kapital</h6>
        </div>
        <div style={{flex:7, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <h1>Funding</h1>
            <div className='searchbar'>
                <input type="text" placeholder='What are you looking for ?' style={{width:"350px", height:"40px", border:"1px solid black", outline:'none', paddingLeft:"5px", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px"}}/>
                <button style={{height:"40px", width:"50px", border:"1px solid black", outline:'none', cursor:"pointer", borderTopRightRadius:"10px", borderBottomRightRadius:"10px", backgroundColor:"transparent" }}><FiSearch fontSize={'22px'}/></button>
            </div>
        </div>
        <div style={{flex:3, display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
            <div className='notifications'>
                <p style={{width:"15px", height:"15px", backgroundColor:"#f5ac02", color:"#fff", fontSize:"12px",borderRadius:"50%", paddingLeft:"4px", marginRight:"20px", position:"absolute"}}>2</p>
                <MdOutlineEmail fontSize={'28px'}/>
            </div>
            <div className='notifications'>
                <p style={{width:"15px", height:"15px", backgroundColor:"#f5ac02", color:"#fff", fontSize:"12px", borderRadius:"50%", paddingLeft:"4px", marginRight:"20px", position:"absolute"}}>2</p>
                <IoMdNotificationsOutline fontSize={'28px'} /> 
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img style={{width:"40px", height:"40px", borderRadius:"50%", marginRight:"10px", objectFit:"cover"}} src={require('../assets/profile.jpg')} alt="Profile" />
                <div className='profile-details'>
                    <h6 style={{fontSize:"16px"}}>Tafari Mwangi</h6>
                    <div style={{display:"flex", alignItems:"center", marginTop:"5px"}}>
                        <p style={{fontSize:"16px", fontWeight:200, marginRight:"5px"}}>Entrepreneur</p><IoIosArrowDown/>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar