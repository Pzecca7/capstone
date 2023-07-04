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
         getRounds,
         addRound,
         removeRound,
         updateOutScore,
         updateInScore,
         updateTotalScore,
         getResults

} = require('./controller')

 app.get("/hamiltonfarm/hole/:hole", getHole)
 app.post("/hamiltonfarm/shot", addShot)
 app.get("/hamiltonfarm/shot", getShots)
 app.delete("/hamiltonfarm/shot/:index", removeShot)
 app.put("/hamiltonfarm/green-in-reg/:index", updateGreenInReg)
 app.post("/hamiltonfarm/saved", savedShots)
 app.get("/hamiltonfarm/round", getRounds)
 app.post("/hamiltonfarm/round", addRound)
 app.delete("/hamiltonfarm/round/:round", removeRound)
 app.put("/hamiltonfarm/out-score/:round", updateOutScore)
 app.put("/hamiltonfarm/in-score/:round", updateInScore)
 app.put("/hamiltonfarm/total-score/:round", updateTotalScore)


 app.get("/hamiltonfarm/results", getResults)
 


 
 




app.listen(4000, console.log(`Server running on localhost:4000`))