import React,{ useState,useEffect }from 'react'
import '../style/inputSection.css'
import {useDispatch,useSelector} from 'react-redux'
import {addToCard} from './features/cardSlice'
import {increment} from './features/colorSlice'

// const myColors = ['#E6783B','#2C8E88','#6B81AD','#2F223D']

function InputsSection() {

const[name,setName] = useState('')
const[email,setEmail] = useState('')
const[phone,setPhone] = useState('')
const[address,setAddress] = useState('')
const[note,setNote] = useState('')
const[notice,setNotice] = useState(false)
const[alert,setAlert] = useState(false)

const select = useSelector(state => state.increment.getColors)
const dispatch = useDispatch()

const addData = ()=>{
    if(!name){
        setAlert(true)
    } else{
        setAlert(false)
        dispatch(increment(1))
        dispatch(addToCard(
            {
                id:new Date().toISOString(),
                firstName:name,
                email:email,
                mobile:phone,
                address:address,
                note:note,
                color:select
            }
        ))
        
            setNotice(true)
            setInterval(() => {
            setNotice(false)
            }, 2000);
    }
 
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
    setNote('')
}

    return (
        <div className='inputSection_main'>
           <h4>Add a New Contact</h4> 
           <div className="input_content">
                <input style={{border:alert ? 'red 1px solid ': ''}} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name' value={name}/>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' value={email}/>
                <input onChange={(e)=>setPhone(e.target.value)}type="text" placeholder='Phone Number' value={phone} />
                <input onChange={(e)=>setAddress(e.target.value)}type="text" placeholder='Address' value={address}/>
                <input onChange={(e)=>setNote(e.target.value)}type="text" placeholder='Note' value={note}/>
                <button onClick={addData} >Add Contact</button>
            </div>
            {notice ? <div className='input_alert' >The contact has been added </div>: null}
            {alert ? <div className='addName_alert' >Please at least add a name </div>: null}
        </div>
    )
}

export default InputsSection
