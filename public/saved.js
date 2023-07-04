const roundSection = document.querySelector('#round-section')
const roundForm = document.querySelector('#round-form')
const roundDate = document.querySelector('#round-date')
const submitRoundBtn = document.querySelector('.submit-btn')
const submitResultsBtn = document.querySelector('#submit-results-btn')

const baseURL = `http://localhost:4000/hamiltonfarm`

const getRounds = () => {
    console.log('check')
    axios.get(`${baseURL}/round`)
    .then(response => {
        console.log(response.data)
        displayRound(response.data)
    }).catch(err => console.log(err))
}


const addRound = (bodyObj) => {
    console.log('round added')
    
    axios.post(`${baseURL}/round`, bodyObj)
    .then(response => {
        displayRound(response.data)  
        console.log(response.data)
      }).catch(err => console.log(err))


}
const removeRound = (round) => {
    console.log(round)
    axios.delete(`${baseURL}/round/${round}`)
    .then(response => {
        displayRound(response.data)
    }).catch(err => console.log(err))
}

const updateOutScore = (round, type) => {
    axios.put(`${baseURL}/out-score/${round}`, {type})
    .then(response => {
        displayRound(response.data)
    }).catch(err => console.log(err))
}

const updateInScore = (round, type) => {
    axios.put(`${baseURL}/in-score/${round}`, {type})
    .then(response => {
        displayRound(response.data)
    }).catch(err => console.log(err))
}

const updateTotalScore = (round, type) => {
    axios.put(`${baseURL}/total-score/${round}`, {type})
    .then(response => {
        displayRound(response.data)
    }).catch(err => console.log(err))
}

const getResults = () => {
    console.log('check')
    axios.get(`${baseURL}/results`)
    .then(response => {
        console.log(response.data)
        displayResults(response.data)
    }).catch(err => console.log(err))
}


const createRoundContainer = (round) => {

    let roundContainer = document.createElement('div')
    roundContainer.classList.add('round-container')

    

    roundContainer.innerHTML=`

    
    <p class="round-date">${round.date}</p>
        <div class="score-card">
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">   
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="fbt-score">
                <div class="num">
                <p class="score-type">OUT</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateOutScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.out}</p>
                    <button class="score-btn" onclick="updateOutScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="hole">
                <div class="num">
                </div>
                <div class="clubs">
                </div>
                <div class="hole-score">
                </div>
            </div>
            <div class="fbt-score">
                <div class="num">
                    <p class="score-type">IN</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateInScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.in}</p>
                    <button class="score-btn" onclick="updateInScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
            <div class="fbt-score">
                <div class="num">
                    <p class="score-type">TOT</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateTotalScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.total}</p>
                    <button class="score-btn" onclick="updateTotalScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
        </div>
    <button class="remove-round-btn" onclick="removeRound(${round.round})">Remove Round</button>
`
roundSection.appendChild(roundContainer)

}

const displayRound = roundObj => {
    roundSection.innerHTML= ``

    for(i = 0; i < roundObj.length; i++){
        createRoundContainer(roundObj[i])

    }
        
    console.log(roundObj)
}


const displayResults = resultsArr => {
    const holeNumberBox = document.querySelector(".num")
    const savedClubs = document.querySelector(".clubs")
    const holeScoreBox = document.querySelector(".hole-score")
    

    resultsArr.forEach((resultsObj) => {
        let { hole, clubs, score} = resultsObj

        let holeNumber = document.createElement("p")
            holeNumber.classList.add('hole-number')
            holeNumber.textContent = hole

        let savedClubList = document.createElement("ol")
            savedClubList.classList.add('saved-club-list')
            savedClubList.textContent = clubs

        let holeScore = document.createElement("p")
            holeScore.classList.add('hole-score')
            holeScore.textContent = score

            
  // inside for loop?          
        if (holeNumber === 2,9,11,14 && holeScore === 3) {
            holeScoreBox.classList.add('eagle')
        } else if (holeNumber === 2,9,11,14 && holeScore === 4) {
            holeScoreBox.classList.add('birdie')
        } else if (holeNumber === 2,9,11,14 && holeScore === 5) {
            holeScoreBox.classList.add('par')
        } else if (holeNumber === 2,9,11,14 && holeScore === 6) {
            holeScoreBox.classList.add('bogey')
        } else if (holeNumber === 2,9,11,14 && holeScore === 7) {
            holeScoreBox.classList.add('double-bogey')
        } else if (holeNumber === 2,9,11,14 && holeScore === 8) {
            holeScoreBox.classList.add('triple-bogey')
        }

        if (holeNumber === 3,7,12,17 && holeScore === 1) {
            holeScoreBox.classList.add('ace')
        } else if (holeNumber === 3,7,12,17 && holeScore === 2) {
            holeScoreBox.classList.add('birdie')
        } else if (holeNumber === 3,7,12,17 && holeScore === 3) {
            holeScoreBox.classList.add('par')
        } else if (holeNumber === 3,7,12,17 && holeScore === 4) {
            holeScoreBox.classList.add('bogey')
        } else if (holeNumber === 3,7,12,17 && holeScore === 5) {
            holeScoreBox.classList.add('double-bogey')
        } else if (holeNumber === 3,7,12,17 && holeScore === 6) {
            holeScoreBox.classList.add('triple-bogey')
        }

        if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 2) {
            holeScoreBox.classList.add('eagle')
        } else if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 3) {
            holeScoreBox.classList.add('birdie')
        } else if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 4) {
            holeScoreBox.classList.add('par')
        } else if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 5) {
            holeScoreBox.classList.add('bogey')
        } else if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 6) {
            holeScoreBox.classList.add('double-bogey')
        } else if (holeNumber === 1,4,5,6,8,10,13,15,16 && holeScore === 7) {
            holeScoreBox.classList.add('triple-bogey')
        }

        holeNumberBox.appendChild(holeNumber)

        savedClubs.appendChild(savedClubList)

        holeScoreBox.appendChild(holeScore)


    })

}

const submitNewRound = event => {
    event.preventDefault()

    let date = document.querySelector('#round-date')

    let bodyObj = {
        date: roundDate.value,
        in: 36,
        out: 36,
        total: 72
     }
     
     addRound(bodyObj)

    date.value= ''
}

submitRoundBtn.addEventListener("click", submitNewRound);



submitResultsBtn.addEventListener("click", getResults)



getRounds()

