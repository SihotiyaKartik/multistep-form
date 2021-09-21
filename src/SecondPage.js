import React from 'react'
import './Second.css'
import {Link} from 'react-router-dom'
function SecondPage() {
    return (
        <div className='container'>
            <div className='first'>

            </div>
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
                        <button className='btn-second active'>2</button>
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
                    <p>Step2/3</p>
                    <h1>Message</h1>
                    <form>
                        <div className='message'>
                            <label for='message' >Message</label> 
                            <textarea name='txtArea' rows='5' cols='50'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </textarea>
                         </div>
                         <div className='check'>
                             <div className='check-first'>
                            <input type='checkbox' value='1' />
                            <label for='first-check'>The number one choice</label>
                            </div>
                            <div className='check-second'>
                            <input type='checkbox' value='1' />
                            <label for='second-check'>The number two choice</label>
                            </div>
                        </div>
                         <hr className='hr-two'/>
                         <div className='btn-end'>
                             <Link className='back' to='/'>Back</Link>
                             <Link to='/third'>
                                 <button className='second-btn'>Next Step</button>
                             </Link>
                         </div>
                    </form>
                </main>
            </div>
            
        </div>
    )
}

export default SecondPage
