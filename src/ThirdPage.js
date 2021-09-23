import './Third.css'
import React from 'react'
import {Link} from'react-router-dom'
function ThirdPage() {
    return (
        <div className='container'>
            <div className='first'></div>
            <div className='second'>
            <header className='head'>
                    <div className='head-f'>
                        <Link to='/'>
                        <button className='btn-first'>1</button>
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
                        <button className='btn-third active'>3</button>
                        </Link>
                        <p>Checkbox</p>
                    </div>
                </header>
                <hr className='hr-one' />
                <main className='main'>
                    <p>Step3/3</p>
                    <h1>Checkbox</h1>
                    <form>
                        <div className='gender'>
                        <div className='bike'>
                        
                        </div>
                        <div className='car'>
                        </div>
                        </div>
                        <div className='t-first'>
                            <input name='t-first-check' required type='checkbox' />
                            <label for='t-first-check'>I want to add this option.</label>
                        </div>
                        <div className='t-sec'>
                            <input name='t-sec-check' required type='checkbox' />
                            <label for='t-sec-check'>Let me click on this checkbox and choose some cool stuff.</label>
                        </div>
                        <hr className='hr-two' />
                        <div className='btn-end'>
                             <Link className='back' to='/second'>Back</Link>
                             <Link to='/'>
                                 <button className='second-btn'>Submit</button>
                             </Link>
                         </div>
                    </form>
                </main>
            </div>
            
        </div>
    )
}

export default ThirdPage
