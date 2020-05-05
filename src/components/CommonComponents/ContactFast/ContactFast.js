import React from 'react';
import './style.scss'
import { FaFacebookF } from "react-icons/fa";
import { MdCall } from "react-icons/md";
function ContactFast(props) {
    return (
        <React.Fragment>
            <div className="contact-Fact">
                <div className="contact-Fact-0">
                    <span>   <FaFacebookF></FaFacebookF></span>
                    <span>   <FaFacebookF></FaFacebookF></span>
                    <span>  <MdCall></MdCall></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactFast;