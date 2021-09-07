import React from 'react'
import '../style/card.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
//const myColors = ['#E6783B','#2C8E88','#6B81AD','#2F223D']


function Card({item}) {

    return (
        <div className='card_item' >
            <div  className="card_avaSection">
                <div style={{background:item.color}} className="logoName">{item.firstName[0]}</div>
                <div className= "card_firstName">{item.firstName}</div>
            </div>
            <div className="card_contact_details">
                <div className="phone_section">
                    <div className="title_details">Phone</div>
                    <div className='card_element'>{item.mobile}</div>
                </div>
                <div className="phone_section">
                    <div className="title_details">Email</div>
                    <div className='card_element'>{item.email}</div>
                </div>
                <div className="address_section">
                    <div className="title_details">Address</div>
                    <div className='card_element address_det'>{item.address}</div>
                </div>
                <div className="address_section">
                    <div className="title_details">Note</div>
                    <div className='card_element '>{item.note}</div>
                </div>
            </div>
           
            <div className='icon_trash'><RiDeleteBin6Line/></div>
        </div>
    )
}

export default Card
