const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const verseText = fs.readFileSync('bibleVerses.txt', 'utf8')
const verseArray = verseText.split('newVerse')

const randomizer = () => {
    randomIndexNum = Math.floor(Math.random() * 31103)
    console.log(verseArray[randomIndexNum])
    return verseArray[randomIndexNum]
  }  

app.use(cors())

app.get('/', function (req, res, next) {
    res.json(randomizer())
    res.end()
  })

app.listen(4000, () => {
    console.log('CORS-enabled web server listening on port 4000')
  })
