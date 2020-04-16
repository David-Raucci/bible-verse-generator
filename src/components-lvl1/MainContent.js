import React from 'react'

const MainContent = (props) => {
    


    return (
    <div className="main-container">
        <div className="text-display">            
            <p id='bible-verse-input'>{props.verseDisplay}</p>
        </div>
    </div>
    )
}

export default MainContent