import React from 'react';
import './style.scss'
import { FacebookOutlined, YoutubeOutlined, PhoneOutlined } from '@ant-design/icons';
function ContactFast() {
    return (
        <React.Fragment>
            <div className="contact-Fact">
                <div className="contact-Fact-0">
                    <span><FacebookOutlined /></span>
                    <span><YoutubeOutlined /></span>
                    <span><PhoneOutlined /></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactFast;