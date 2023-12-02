import './Footer.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

function Footer() {
const navigate = useNavigate()
const [btnText, setBtnText] = useState('Sign up!')

    function myAlert() {
        alert("Sorry, it is not yet poossible to sign up :/")
    }

    return (
        <footer className='footer'>
            <article className='footer__left'>
                <h3 className='footer__header'>LINKS</h3>
                <p className='footer__link' onClick={() => navigate('/rooms')}>Rooms</p>
                <p className='footer__link' onClick={() => navigate('/video')}>Entertainment</p>
            </article>
            <article className='footer__right'>
                <h3 className='footer__header'>Sign up to our newsletter!</h3>
                <button onClick={myAlert} className='footer__button'>{ btnText }</button>
            </article>
        </footer>
    )
}

export default Footer