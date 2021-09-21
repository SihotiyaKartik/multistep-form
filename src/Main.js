import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
function Main() {
    return (
        <div className='container'>
            <div className='first'>
               
            </div>
            <div className='second'>
                <header className='head'>
                    <div className='head-f'>
                        <Link to='/'>
                        <button className='btn-first active'>1</button>
                        </Link>
                        <p>Sign Up</p>
                    </div>
                    <div className='head-s'>
                        <Link to='/second'>
                        <button className='btn-second'>2</button>
                        </Link>
                        <p>Message</p>
                    </div>
                    <div className='head-t'>
                        <Link to='/third'>
                        <button className='btn-third'>3</button>
                        </Link>
                        <p>Checkbox</p>
                    </div>
                </header>
                <hr className='hr-one' />
                <main className='main'>
                    <p>Step1/3</p>
                    <h1>Sign UP</h1>
                    <form>
                        <div className='form-first'>
                            <div className='f-name'>
                            <label for='firstName'>First Name</label>
                            <input type='text' required autoComplete="off" />
                            </div>
                            <div className='l-name'>
                            <label for='lastName'>Last Name</label>
                            <input type='text' required autoComplete="off" />
                            </div>
                        </div>
                        <div className='form-second'>
                            <div className='d'>
                            <label for='Date'>Date of Birth</label>
                            <input type='date' required autoComplete="off" />
                            </div>
                            <div className='e'>
                            <label for='Email'>Email Address</label>
                            <input type='email' required autoComplete="off" />
                            </div>
                        </div>
                        <div className='form-third'>
                            <label for='address'>Address</label>
                            <input type='text' autoComplete="off" required />
                        </div>
                        <hr className='hr-two' />
                        <Link to='/second'>
                        <button className='btn'>Next Step</button>
                        </Link>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Main
