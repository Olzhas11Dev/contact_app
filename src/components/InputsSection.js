import React from 'react'
import '../style/inputSection.css'

function InputsSection() {
    return (
        <div className='inputSection_main'>
           <h4>Add a New Contact</h4> 
           <div className="input_content">
               <input type="text" placeholder='Enter Name' />
               <input type="text" placeholder='Phone Number' />
               <input type="text" placeholder='Address' />
               <input type="text" placeholder='Note' />
               <button>Add Contact</button>
           </div>
        </div>
    )
}

export default InputsSection
