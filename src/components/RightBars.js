import React,{useState} from 'react'
import '../style/right.css'
import Card from './Card'
import { useSelector } from "react-redux";
import {AiOutlineCloseCircle,AiOutlineSearch} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'

function RightBars() {
    const cards = useSelector(state => state.cards.cardStorage)
    const selectStorage = useSelector(state => state.storage.initialData)
    const [input,setInput] = useState('')
    const selectMaskStatus = useSelector(state=>state.maskStatus.changeBgStatus)

    
    return (
        <div className='rightBar_main' >
           
            <div className={selectMaskStatus ? 'mask' : null }></div>
            <div className='leftBar_user' >
                  {selectStorage.name ?
                   <div className='leftBar_logo_face' >
                       <IoMdContacts className='left_logo_face' /> 
                        <div className='logoUserRow' > 
                            <div className='left_login_name' > {selectStorage.name}</div>
                            <div>How there!!!</div>
                        </div> 
                  </div> :null}
            </div>
            <div className="cards_context_container">
                <div className='rightBar_topDetails' >
                    <div className='rightBar_input_section' >
                        <input onChange={(e)=>setInput(e.target.value)} className='rightInput' placeholder='Search...' type="text" value={input} />
                        {input && <AiOutlineCloseCircle onClick={()=>setInput('')} className='rightBar_close' />}
                    </div>
                    <h4 className='right_total' > Total : {cards.filter((card)=> card.firstName.toLowerCase().includes(input.toLowerCase())).length}   contacts</h4>
            </div>
                <div className="card_row">
                    {cards.filter(elem=>elem.firstName.toLowerCase().includes(input.toLowerCase()))   
                    .map((item)=>{
                        return (
                        <Card key={item.id} item={item}/>
                        )
                    })}  
                </div> 
            </div>
            
        </div>
    )
}

export default RightBars

