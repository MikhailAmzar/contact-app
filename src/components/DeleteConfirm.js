import React from "react";
import user from "../images/user.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DeleteConfirm = () => {

    return (
            <div className="main">
                <div className="ui card centered">
                    <img src={user} alt="user icon" />
                    <h2>You have deleted the contact</h2>
                    <Link to="/">
                    <button className="ui button blue">Ok</button>
                    </Link>
                </div>
            </div>
        );
}

export default DeleteConfirm;