import React from "react";
import user from "../images/user.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactDetail = (props) => {

    const {name, email} = props.location.state.contact;
    return (
            <div className="main">
                <div className="ui card centered">
                    <div className="image">
                        <img src={user} alt="user icon" />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
                <div className="center-div">
                    <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button></Link>
                </div>
            </div>
        );
}

export default ContactDetail;