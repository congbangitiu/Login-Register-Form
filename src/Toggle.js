import React, {useState} from "react";
import Login from "./login";
import Register from "./register";
import './Toggle.css';

export  default function Toggle(){
    const [show,setShow] = useState(false);

    return (
        <div>
            {/* <div>
                {
                    show ? <Register/> : <Login />
                }
            </div> */}
            <div className="base">
                {
                    show ? <Register/> : <Login />
                }
                <button onClick={() => setShow(!show)}>Click</button>
            </div>
        </div>
    );
}