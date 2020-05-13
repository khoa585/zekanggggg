import React, { useState, useEffect } from "react";
import './style.scss';
import { UpCircleOutlined } from '@ant-design/icons';
const BackToTop = () => {
    const [state, setState] = useState(false)
    useEffect(() => {
        document.addEventListener("scroll", function (e) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setState(true)
            } else {
                setState(false)
            }
        });
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div>
            {state && (
                <div className="scroll-to-top">
                    <div onClick={() => scrollToTop()}>
                        <UpCircleOutlined />
                    </div>
                </div>
            )}
        </div>
    );
}
export default BackToTop