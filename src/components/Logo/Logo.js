import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';


const Logo = () => {
    return (
        <div className='ma5 mt0'>
            <Tilt style={{ height: '100px', width: '100px'}}>
                <div>
                    <img alt='logo' src={logo}/>
                </div>
            </Tilt>

        </div>
    )
}

export default Logo;

