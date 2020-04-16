
const http = require('http')
const port = 4000
const fs = require('fs')
const verseText = fs.readFileSync('bibleVerses.txt', 'utf8')
const verseArray = verseText.split('newVerse')
const cors = require('cors')

const randomizer = () => {
    randomIndexNum = Math.floor(Math.random() * 31103)
    console.log(verseArray[randomIndexNum])
    return verseArray[randomIndexNum]
  }  

const server = http.createServer((request, response) => {  
    
    response.write(randomizer())
    response.end()
})



server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong.')
    } else {
        console.log('Server is listening on port ' + port)
    }
})

