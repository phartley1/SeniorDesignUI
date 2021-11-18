import React from 'react'
import './Popup.css'

function Popup(props) {
    return(props.trigger) ? (
        <div className = "popup">
            <div className = "inner">
                <button className = "close" onClick={() => props.setTrigger(false)}>close</button>
                <a href="https://www.google.com/search?q=boilers&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPlKe0maL0AhWOhXIEHbZHBdsQ_AUoAnoECAMQBA&biw=683&bih=668&dpr=1.3" target="_blank">
                    <button>Go!</button>
                </a>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup