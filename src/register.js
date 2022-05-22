import React from 'react';
import './register.css';

export default function Register(){
    return(
        <div className="frame">
            <div className="title">
                <h1>LOGIN</h1>
            </div>
            <div className="inputField">
                <input className="special" type="text" placeholder="Username"/>
                <div className="input">
                    <input type="password" className="special" placeholder="Password"/>
                </div>
                <div className="input">
                    <input type="password" className="special" placeholder="Password again"/>
                </div>
            </div>
            <div className="submit1">
                <button className="submit-1">
                    <a className="submit-2" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fgiabao18.github.io%2FCaculator-project%2F%3Ffbclid%3DIwAR3P_Iq83y7phdJPekuimWqG_i5CQF_QVuTpwlMcc8bZgq_0euz5MN9s8to&h=AT3fbJ4g53U_regjrdlIhLih-JAXjSv-FYt5YfwA-DyBB3VSd65iJ1nZA9Pne5x_9d469FjluFE5uJCEQzRgUXzleu86cMC3wnMOH6Oel3x06pXNnwfFvu3rubk2EbeO_WGAS9jYJrjZP6ZePQ-HAg">Sign Up</a>
                </button>
            </div>
            <div className="change-account">
                <a>Already have an account? Click here</a>
            </div>
        </div>
    );
}

