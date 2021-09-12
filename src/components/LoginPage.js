import React,{useState,useEffect} from 'react'
import '../style/login_page.css'

function LoginPage() {

    // get from local
    let getDataFromLoc = () => {
        const storedTodos = localStorage.getItem('user')
        if (storedTodos) {
            return JSON.parse(storedTodos)
        }
            else{
                return []
            }
      } 

    const[nameReg,setNameReg] = useState('')
    const[emailReg,setEmailReg] = useState('')
    const[passwordReg,setPasswordReg] = useState('')

    const[arrayLog,setArrayLog] = useState(getDataFromLoc()) //Combined Data to Local here ,before was []

      // saving the todos 
      
      useEffect(() => {
        localStorage.setItem('user', JSON.stringify(arrayLog))
      }, [arrayLog])
          
    const handleAddToArray =()=>{
        if(nameReg!==''){                   // If it's empty we don't send
            setArrayLog([ ...arrayLog,     
                {
                    name: nameReg,
                    email:emailReg,
                    password:passwordReg
                }
                ])

                setNameReg('')
                setEmailReg('')
                setPasswordReg('')
            }
        }
    
    return (
       
        <div className='login_main' >
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
                  {/* <div>
                    <div className="login_section_inputs">
                        <input type="text" placeholder='Username' value={nameLog}/>
                        <input type="text" placeholder='Password' value={nameLog} />
                        </div>
                    <button className='signUp_btn' >Login</button>
                 </div>  */}
                
                 
            </div>
        </div>
    )
}

export default LoginPage

//1 Add List of Registration's objects
//2 If User Send the Same Username do NOT add to the object and alert 'it's been already added'
//3 If there is no such an object add it and give a message its been added ...
//4 Change for automatically to a login 
//5 Map through id and if the same UserName display his/her name
