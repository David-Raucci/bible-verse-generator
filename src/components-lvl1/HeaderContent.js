import React from 'react'

const HeaderContent = () => {

    const circle = document.getElementById('circle1')
circle.addEventListener('click', () => {
    fetch('https://bible-api.com/john%203:16?translation=kjv').then((res) => {
            return res = res.json()
    }).then((data) => {
        console.log(data.text)
    })
})


    return (
    <div id="header-container">
        <div id="circle-sub-container">
            <h1 id="bible-verse-text">Rhema</h1>
            <div id="circle">
            </div>
        </div>
    </div>
    )

    

}



export default HeaderContent