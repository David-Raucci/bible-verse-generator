import React, { useState } from 'react'


const HeaderContent = (props) => {

    return (
    <div id="header-container">
        <div id="circle-sub-container">
            <h1 id="bible-verse-text">Rhema</h1>
            <div onClick={props.onClick} id='circle'></div>
        </div>
    </div>
    )
}

export default HeaderContent

//useCallBack  = a variable a is a function 
// put fetch in a useCallBack Hook
// useState, useCallBack, useEffect, useRef