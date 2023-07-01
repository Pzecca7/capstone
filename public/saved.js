




const getResults = () => {
    axios.get(`${baseURL}/results`)
    .then(response => {
        displayResults(response.data)
    }).catch(err => console.log(err))
}


const displayResults = () => {

}

const totalScore = () => {
}



getResults()
