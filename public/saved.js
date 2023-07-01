const roundSection = document.querySelector('#round-section')
const roundForm = document.querySelector('#round-form')
const roundDate = document.querySelector('#round-date')
const submitBtn = document.querySelector('.submit-btn')

const getRound = () => {
    axios.get(`${baseURL}/round`)
    .then(response => {
        console.log(response.data)
        displayRounds(response.data)
    })
    .catch(err => console.log(err))
}


const addRound = () => {
    console.log('round added')

    let bodyObj = {
        date: roundDate.input,
        in: 36,
        out: 36,
        total: 72
     }

        roundDate.value = ''
    
    axios.post(`${baseURL}/round`, bodyObj)
    .then(response => {
        displayRounds(response.data)  
        console.log(response.data)
      }).catch(err => console.log(err))


}

const getResults = () => {
    axios.get(`${baseURL}/results`)
    .then(response => {
        displayResults(response.data)
    }).catch(err => console.log(err))
}


const displayRounds = () => {

}


const displayResults = () => {

}

getRound()

