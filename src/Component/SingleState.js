import React,{useState} from 'react';

const SingleState = () => {
    var [obj, setobj] = useState({
        number: 0,
        str: "Hi",
        flag: true
    })
    return (
        <div>
            <p>Number = {obj.number}</p>
            <button onClick={function (){
                setobj({
                    ...obj,
                    number: obj.number+1
                })
            }}>Increase</button>

            <p>Chat = {obj.str}</p>
            <button onClick={function (){
                setobj({
                    ...obj,
                    str: obj.str+"Hey"
                })
            }}>Chat</button>

            <p>Flag = {obj.flag.toString()}</p>
            <button onClick={function (){
                setobj({
                    ...obj,
                    flag: !obj.flag
                })
            }}>Flag</button>
        </div>
    );
};

export default SingleState;