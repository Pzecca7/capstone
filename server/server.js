const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
  })

  app.get('/tracker', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/tracker.html'))
  })

 const { getHole,
         addShot,
         getShots,
         removeShot,
         updateGreenInReg,
         savedShots,
         getResults

} = require('./controller')

 app.get("/hamiltonFarm/:hole", getHole)
 app.post("/hamiltonFarm", addShot)
 app.get("/hamiltonFarm", getShots)
 app.delete("/hamiltonFarm/:index", removeShot)
 app.put("/hamiltonFarm/:index", updateGreenInReg)
 app.post("/hamiltonFarm/saved", savedShots)
 app.get("/hamiltonFarm/results", getResults)
 
 




app.listen(4000, console.log(`Server running on localhost:4000`))