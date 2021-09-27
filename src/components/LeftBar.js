import React,{ useState,useEffect } from 'react'
import '../style/left.css'
import {Link, useHistory} from 'react-router-dom'
import {RiContactsFill} from 'react-icons/ri'
import {BiMessageSquareAdd,BiLogInCircle,BiLogOutCircle} from 'react-icons/bi'
import {GrMenu} from 'react-icons/gr'
import { useSelector,useDispatch } from "react-redux";
import {addToLocal} from './features/storageSlice'
import {makeMask} from './features/backGroundSlice'


function LeftBar() {
const dispatch = useDispatch()
const selectStorage = useSelector(state => state.storage.initialData)  

const[activePage,setActivePage] = useState('/')      //By defalt it's stays on the first
const[toggle,setToggle] = useState(false)

let closeMenu=()=>{
    if(window.innerWidth<800){
        setToggle(false)
    } 
}

function listenScrollEvent(){
    if (window.scrollY > 10) {
        setToggle(false)
        dispatch(makeMask(false))
    }
    
}

window.addEventListener('resize',closeMenu)
window.addEventListener('scroll',listenScrollEvent)

// To refresh page '/' router

const history = useHistory()
useEffect(()=>{
    history.push('/')
},[history])

const addId =(route)=>{
    if(route==='/'){
        setActivePage('/')
        setToggle(false)
        dispatch(makeMask(false))
    } else {
        setActivePage('/add')
        setToggle(false)
        dispatch(makeMask(false))
    }
}


const clearStore = () =>{
   
    localStorage.clear()
    dispatch(addToLocal({}))
}

const toggleIt =()=>{
    setToggle(!toggle)
    dispatch(makeMask(!toggle))
}

    return (
        <div className='leftBar_main' id={toggle ? 'moveRight' : 'moveLeft'} >
             <div onClick={()=>toggleIt()} className="leftBar_logo"><GrMenu  className='logoMenu_open' /></div> 
           <h4>  List Contacts</h4>
           <div className='added_name' >{selectStorage ? selectStorage.name :null} </div>
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
             
            <div className="loginSection" onClick={ ()=>setToggle(false)} >
                {selectStorage.name ?  <Link onClick={clearStore} to="/login" className='logOut_row'>
                    <BiLogOutCircle className='logo_logout' />
                <div onClick={()=> dispatch(makeMask(false))} >LogOut</div>
                </Link> : 
                <Link to="/login" className='login_row' >
                    <BiLogInCircle className='logo_login' />
                     <div onClick={()=> dispatch(makeMask(false))} >LogIn</div>
                 </Link>}
            </div>
            </div>
    )
}

export default LeftBar
