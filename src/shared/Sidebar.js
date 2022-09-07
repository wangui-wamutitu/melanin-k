import React from 'react'
import {VscHome} from 'react-icons/vsc'
import {AiOutlineFolder, AiOutlinePieChart, AiOutlineMail} from 'react-icons/ai'
import {BiBuildingHouse} from 'react-icons/bi'
import {HiOutlineUsers} from 'react-icons/hi'
import {FaSchool} from 'react-icons/fa'

const Sidebar = () => {
  let height = window.innerHeight - 80
  return (
    <aside style={{height: height, width:"13%"}} className='sidebar-container'>
        <ul style={{height:'85%',width:'100%', display:"flex", flexDirection:"column", justifyContent: 'space-around', listStyle:"none", color:"#363636"}}>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
                 <VscHome fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Home</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
                <AiOutlineFolder fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Business Profile</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
                <BiBuildingHouse fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Risk Profile</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row",alignItems:"center", backgroundColor:"#fa8107",cursor:"pointer", borderTopRightRadius:30, borderBottomRightRadius:30, paddingLeft:"10px"}}>
                <AiOutlinePieChart fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Funding</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
                <HiOutlineUsers fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Konnect</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
                <FaSchool fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Academy</h6>
            </li>
            <li style={{width:"100%", height:"60px", display:"flex", flexDirection:"row", alignItems:"center", paddingLeft:"10px",cursor:"pointer"}}>
               <AiOutlineMail fontSize={"24px"}/> <h6 style={{marginLeft:"40px", fontSize:"16px"}}>Support</h6>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar