import React from 'react'
/*
const Hello=()=>{
    return (
        <div>
            <h1>Hello PAVNI using Jsx</h1>
        </div>
    )
}
*/

const Hello=()=>{return React.createElement('div',null,React.createElement('h1',null,"Hello pavni without using JSX"))}
export default Hello