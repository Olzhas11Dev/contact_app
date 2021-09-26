import React,{useState} from 'react'
import '../style/login_page.css'
import {useDispatch,useSelector} from'react-redux'
import {addToLocal} from './features/storageSlice'
import {IoMdContacts} from 'react-icons/io'
import {makeMask} from './features/backGroundSlice'

function LoginPage() {
   
    // get from local
    let dataStorage = JSON.parse(localStorage.getItem('user'))
    const selectStorage = useSelector(state => state.storage.initialData)  
    const selectMaskStatus = useSelector(state=>state.maskStatus.changeBgStatus)
    const[nameReg,setNameReg] = useState('')
    const[emailReg,setEmailReg] = useState('')
    const[passwordReg,setPasswordReg] = useState('')

      // saving the todos 
    const dispatch = useDispatch()  

    const handleAddToArray =()=>{
        if(nameReg!==''){                 // If it's empty we don't send
          let obj =  {
                    name: nameReg,
                    email:emailReg,
                    password:passwordReg
                }

               localStorage.setItem('user',JSON.stringify(obj))
                dispatch(addToLocal(obj))
          
                //Clean LIst
                setNameReg('')
                setEmailReg('')
                setPasswordReg('')
               
            }
            
        }
   
    return (
       
        <div className='login_main' >
            <div className={selectMaskStatus ? 'mask' : null }></div>
             <div className='welcom_user' >
                  {selectStorage.name ?
                   <div className='section_logo_face' >
                       <IoMdContacts className='logo_face' /> 
                        <div className='logoUserRow' > 
                            <div className='welcome_login_name' > {selectStorage.name}</div>
                            <div>How are you?</div>
                        </div> 
                  </div> :null}
            </div>
            <h4>Create Account</h4>  
            <div>
                <div>
                    <div className="login_section_inputs">
                        <input onChange={(e)=>setNameReg(e.target.value)} type="text" placeholder='Username' value={nameReg}/>
                        <input onChange={(e)=>setEmailReg(e.target.value)}type="text" placeholder='Email' value={emailReg}/>
                        <input onChange={(e)=>setPasswordReg(e.target.value)}type="text" placeholder='Password' value={passwordReg}/>
                    </div>
                    <button onClick={handleAddToArray} className='signUp_btn' >SignUp</button>
                </div> 
            </div>
        </div>
    )
}

export default LoginPage


