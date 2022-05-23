import React from 'react';
import './Login.css';

function Login(){
    return (
        <div className="nav">
            <div className="header">
                <h1>LOGIN</h1>
            </div>
            <div className="body">
                <input className="input-place" type="text" placeholder="Username"/>
                <div className="input">
                    <input className="input-place" type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="footer">
                <button className="button">
                    <a className="button1" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fgiabao18.github.io%2FCaculator-project%2F%3Ffbclid%3DIwAR3P_Iq83y7phdJPekuimWqG_i5CQF_QVuTpwlMcc8bZgq_0euz5MN9s8to&h=AT3fbJ4g53U_regjrdlIhLih-JAXjSv-FYt5YfwA-DyBB3VSd65iJ1nZA9Pne5x_9d469FjluFE5uJCEQzRgUXzleu86cMC3wnMOH6Oel3x06pXNnwfFvu3rubk2EbeO_WGAS9jYJrjZP6ZePQ-HAg">Login</a>
                </button>
            </div>
            <div className="change-account">
                <a>Don't have an account? Click here</a>
            </div>
        </div>
        );
}

export default Login;