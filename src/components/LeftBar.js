import React from 'react'
import '../style/left.css'
import {Link} from 'react-router-dom'
import {RiContactsFill} from 'react-icons/ri'
import {BiMessageSquareAdd} from 'react-icons/bi'



function LeftBar() {

    return (
        <div className='leftBar_main' >
           <h4>List Contacts</h4>
            <Link to ="/" className="leftBar_contact">
                <div className="left_content_section">
                    <div className="left_contact" ><RiContactsFill className='leftBar_icon'/></div>
                    <div className="right_contact">My contact</div>
                </div>
            </Link>
            <Link to='/add' className="leftBar_createCont">
                <div className="left_create_section">
                    <div className="left_createContact"><BiMessageSquareAdd className='left_addIcons' /></div>
                    <div className="right_createContact">Create contact</div>
                </div> 
            </Link>
        </div>
    )
}

export default LeftBar
