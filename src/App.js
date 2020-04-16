import React, { useState, useCallback} from 'react'
import './App.css'
import HeaderContent from './components-lvl1/HeaderContent'
import MainContent from './components-lvl1/MainContent'

const App = () => {

  const [ verse, setVerse ] = useState('') 

  //use useCallback to recreate itself 

  const fetchVerse = useCallback(() => {
    return fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => setVerse(data))
  }, [])


  return (
    <div>
      <HeaderContent onClick={fetchVerse} />
      <MainContent verseDisplay={verse}/>
    </div>
    
  )
}


export default App



// style the cascadingText
// write a randomizer function for the bible verses
// USE NODES HTTP MODULE and look at docs to create a server and an endpoint for it. 
// point the app to the localserver port