import React from "react";

// Props Object
// {
//     phrase: 'Hello there'
//     name: 'Ray'
// };
const Greeter = (props) => {
    return (
        <div>
            <h1>{props.phrase} {props.name}</h1>
        </div>
    );
}

const Something = (props) => {
    return (
        <div>
            <h1>{props.phrase} {props.name}</h1>
        </div>
    );
}

const Nextthing = (props) => {
    return (
        <div>
            <h1>{props.phrase} {props.name}</h1>
        </div>
    );
}
export default Greeter;
export {Something};
export {Nextthing}