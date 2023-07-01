let holeInfoDB = require('./db.json')

let shotDB = require('./db-2.json')
let shotID = 1

let resultDB = require('./db-3.json')
let resultID = 1

let roundDB = require('./db-4.json')
let roundID = 3



module.exports = {

    getHole: (req,res) => {
        let { hole } = req.params
        res.status(200).send(holeInfoDB[hole-1])
        
    },
    addShot: (req,res) => {
        req.body.id = shotID
        shotDB.push(req.body)
        res.status(200).send(shotDB)
        shotID++
    },
    getShots: (req,res) => {
        res.status(200).send(shotDB)
    },
    removeShot: (req,res) => {
        console.log(req.params)
        let { index } = req.params
        console.log(index)
        shotDB.splice(+index, 1)
        res.status(200).send(shotDB)
    },
    updateGreenInReg: (req,res) => {
        console.log(req.params)
        let { index } = req.params
        index = parseInt(index)
        shotDB[index].greenInReg = !shotDB[index].greenInReg
        res.status(200).send(shotDB)
    },
    savedShots: (req,res) => {
        console.log(req.body)
        resultDB.push(req.body)
        res.status(200).send(resultDB)
    },
    getRound: (req,res) => {
        res.status(200).send(roundDB)
    },
    getResults: (req,res) => {
        res.status(200).send(resultDB)
    }
}