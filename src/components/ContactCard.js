import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import contacts from "../api/contacts";


const ContactCard = (props) => {

    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user image" />  
                <div className="content">
                    
                    <Link to={{pathname:`/contact/${id}`, state: {contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                <br/>
                <Link to="/delete">
                <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px", marginBottom:"10px"}}
                onClick={() => props.clickHandler(id)}></i>
                </Link>
                <Link to= {{pathname:`/edit`, state: {contact: props.contact}}}>
                <i className="edit alternate outline icon" style={{color:"blue", marginTop:"7px"}}></i>
                </Link>
            </div>
        );
}

export default ContactCard;