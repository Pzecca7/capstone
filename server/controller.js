let holeInfoDB = require('./db.json')

let shotDB = require('./db-2.json')
let shotID = 1

let resultDB = require('./db-3.json')
let resultID = 1

let roundDB = require('./db-4.json')
let roundID = 1

// let dateDB = require('./db-5.json')
// let dateID = 1



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
    getRounds: (req,res) => {
        console.log('check')
        res.status(200).send(roundDB)
    },
    addRound: (req,res) => {
        console.log('check')
        req.body.round = roundID
        roundDB.push(req.body)
        res.status(200).send(roundDB)
        roundID++
    },
    removeRound: (req,res) =>{
        console.log(req.params)
        let { round } = req.params
        let index = roundDB.findIndex(scoreCard => scoreCard.round === +round)
        roundDB.splice(+index, 1)
        console.log(index)
        res.status(200).send(roundDB)
    },
    updateOutScore: (req,res) => {
        let { round } = req.params
        let { type } = req.body
        let index = roundDB.findIndex(scoreCard => scoreCard.round === +round)
        if(type === 'minus' && roundDB[index].out > 20){
            roundDB[index].out -= 1
        } else if(type === 'plus' && roundDB[index].out < 60){
           roundDB[index].out += 1
        } else {
            res.status(400).send('bad request!')
            return
        }

        res.status(200).send(roundDB)

    },
    updateInScore: (req,res) => {
        let { round } = req.params
        let { type } = req.body
        let index = roundDB.findIndex(scoreCard => scoreCard.round === +round)
        if(type === 'minus' && roundDB[index].in > 20){
            roundDB[index].in -= 1
        } else if(type === 'plus' && roundDB[index].in < 60){
           roundDB[index].in += 1
        } else {
            res.status(400).send('bad request!')
            return
        }

        res.status(200).send(roundDB)
    },
    updateTotalScore: (req,res) => {
        let { round } = req.params
        let { type } = req.body
        let index = roundDB.findIndex(scoreCard => scoreCard.round === +round)
        if(type === 'minus' && roundDB[index].total > 50){
            roundDB[index].total -= 1
        } else if(type === 'plus' && roundDB[index].total < 120){
           roundDB[index].total += 1
        } else {
            res.status(400).send('bad request!')
            return
        }

        res.status(200).send(roundDB)
    },
    
    getResults: (req,res) => {
        res.status(200).send(resultDB)
    },

    // addDate: (req,res) => {
    //     req.body.id = dateID
    //     dateDB.push(req.body)
    //     res.status(200).send(dateDB)
    //     dateID++
    // }
}