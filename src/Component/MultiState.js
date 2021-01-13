import React, {useState} from 'react';


const MultiState = () => {
    var [number, setnumber] = useState(0)
    var [str, setstr] = useState("Hi")
    var [flag, setbool] = useState(true)
    return (
        <div>
            <p>Number = {number}</p>
            <button onClick={function (){setnumber(number+1)
            }}>increase</button>

            <p>Chat = {str}</p>
            <button onClick={function (){setstr(str+"Hey")
            }}>Message</button>

            <p>Flag = {flag.toString()}</p>
            <button onClick={function (){setbool(!flag)
            }}>Signal</button>
        </div>
    );
};

export default MultiState;