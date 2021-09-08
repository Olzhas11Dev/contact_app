import React,{ useState,useEffect } from 'react'
import '../style/left.css'
import {Link, useHistory} from 'react-router-dom'
import {RiContactsFill} from 'react-icons/ri'
import {BiMessageSquareAdd} from 'react-icons/bi'


function LeftBar() {
const[activePage,setActivePage] = useState('/')      //By defalt it's stays on the first

const history = useHistory()
useEffect(()=>{
    history.push('/')
},[])

const addId =(route)=>{
    if(route==='/'){
        setActivePage('/')
        
    } else {
        setActivePage('/add')
    }
}
   
    return (
        <div className='leftBar_main' >
           <h4>List Contacts</h4>
            <Link onClick={()=>addId('/')} to ="/" className="leftBar_contact">
                <div id={activePage==='/'? 'active_menu' : null} className="left_content_section"  >
                    <div className="left_contact" ><RiContactsFill className='leftBar_icon'/></div>
                    <div className="right_contact">My contact</div>
                </div>
            </Link>
            <Link onClick={()=>addId('/add')} to='/add' className="leftBar_createCont">
                <div id={activePage==='/add'? 'active_menu' : null} className="left_create_section">
                    <div className="left_createContact"><BiMessageSquareAdd className='left_addIcons' /></div>
                    <div className="right_createContact">Create contact</div>
                </div> 
            </Link>
        </div>
    )
}

export default LeftBar
