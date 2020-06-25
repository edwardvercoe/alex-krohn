import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer__nav">
            <img src={process.env.PUBLIC_URL + "/assets/burger.png"}  alt="Website navigation button"/>
            <p>Equal parts creative and strategic <br />Based in Sydney, working worldwide.</p>
            </div> 
            <div className="footer__socials">
                <p>EMAIL</p>
                <p>INSTAGRAM</p>
            </div>
        </footer>
    )
}
