import React,{ useState,useEffect } from 'react'
import '../style/left.css'
import {Link, useHistory} from 'react-router-dom'
import {RiContactsFill} from 'react-icons/ri'
import {BiMessageSquareAdd,BiLogInCircle,BiLogOutCircle} from 'react-icons/bi'
import {GrMenu} from 'react-icons/gr'


function LeftBar() {
const[activePage,setActivePage] = useState('/')      //By defalt it's stays on the first

const[toggle,setToggle] = useState(false)

let closeMenu=()=>{
    if(window.innerWidth<800){
        setToggle(false)
    } 
}

window.addEventListener('resize',closeMenu)

// To refresh page '/' router

const history = useHistory()
useEffect(()=>{
    history.push('/')
},[])

const addId =(route)=>{
    if(route==='/'){
        setActivePage('/')
        setToggle(false)
    } else {
        setActivePage('/add')
        setToggle(false)
    }
}


   
    return (
        <div className='leftBar_main' id={toggle ? 'moveRight' : 'moveLeft'} >
             <div onClick={()=>setToggle(!toggle)} className="leftBar_logo"><GrMenu  className='logoMenu_open' /></div> 
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
            <div className="loginSection">
                <Link to="/login" className='login_row' >
                    <BiLogInCircle className='logo_login' />
                     <div>LogIn</div>
                 </Link>
                <div className='logOut_row'>
                    <BiLogOutCircle className='logo_logout' />
                <div>LogOut</div>
                 </div>
            </div>
            </div>
    )
}

export default LeftBar
