import React,{ useState,useEffect } from 'react'
import '../style/left.css'
import {Link, useHistory} from 'react-router-dom'
import {RiContactsFill} from 'react-icons/ri'
import {BiMessageSquareAdd,BiLogInCircle,BiLogOutCircle} from 'react-icons/bi'
import {GrMenu} from 'react-icons/gr'
import { useSelector,useDispatch } from "react-redux";
import {addToLocal} from './features/storageSlice'


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

window.addEventListener('resize',closeMenu)

// To refresh page '/' router

const history = useHistory()
useEffect(()=>{
    history.push('/')
},[history])

const addId =(route)=>{
    if(route==='/'){
        setActivePage('/')
        setToggle(false)
    } else {
        setActivePage('/add')
        setToggle(false)
    }
}


const clearStore = () =>{
    localStorage.clear()
    dispatch(addToLocal({}))

}

// console.log(selectStorage ,'fromRedux')
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
              {selectStorage ? selectStorage.name :null}
            
            <div className="loginSection">
                {selectStorage.name ?  <Link onClick={clearStore} to="/login" className='logOut_row'>
                    <BiLogOutCircle className='logo_logout' />
                <div>LogOut</div>
                </Link> : 
                <Link to="/login" className='login_row' >
                    <BiLogInCircle className='logo_login' />
                     <div>LogIn</div>
                 </Link>}
            </div>
            </div>
    )
}

export default LeftBar
