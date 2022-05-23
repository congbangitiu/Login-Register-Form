import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register";
import './Toggle.css';

export  default function Toggle(){
    const [show,setShow] = useState(false);

    return (
        <div>
            <div>
                {
                    show ? <Register/> : <Login />
                }
            </div>
            <div className="base">
                <button onClick={() => setShow(!show)}>Click</button>
            </div>
        </div>
    );
}