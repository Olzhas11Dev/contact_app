import React,{useState} from 'react'
import '../style/login_page.css'
import {useDispatch} from'react-redux'
import {addToLocal} from './features/storageSlice'

function LoginPage() {
   
    // get from local
    let dataStorage = JSON.parse(localStorage.getItem('user'))

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
            <h4>Create Account</h4>  
           <div className='welcom_user' >  {dataStorage ? dataStorage.name : null}</div>
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


