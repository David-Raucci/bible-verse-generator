import React from 'react'

const circle = document.getElementById('circle1')
circle.addEventListener('click', () => {
    fetch('https://bible-api.com/john%203:16?translation=kjv').then((res) => {
        if (res.status = 200) {
            return res = res.json()
        } else {
            console.log('Something went wrong')
        }
    }).then((data) => {
        console.log(data.text)
    })
})

export default FetchData.js