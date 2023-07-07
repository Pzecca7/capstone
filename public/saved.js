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
                <div class="num" id="hole-1">
                </div>
                <div class="clubs" id="saved-clubs-1">
                </div>
                <div class="hole-score-box" id="hole-score-box-1">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-2">
                </div>
                <div class="clubs" id="saved-clubs-2">
                </div>
                <div class="hole-score-box" id="hole-score-box-2">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-3">
                </div>
                <div class="clubs" id="saved-clubs-3">
                </div>
                <div class="hole-score-box" id="hole-score-box-3">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-4">
                </div>
                <div class="clubs" id="saved-clubs-4">
                </div>
                <div class="hole-score-box" id="hole-score-box-4">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-5">
                </div>
                <div class="clubs" id="saved-clubs-5">
                </div>
                <div class="hole-score-box" id="hole-score-box-5">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-6">
                </div>
                <div class="clubs" id="saved-clubs-6">
                </div>
                <div class="hole-score-box" id="hole-score-box-6">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-7">
                </div>
                <div class="clubs" id="saved-clubs-7">   
                </div>
                <div class="hole-score-box" id="hole-score-box-7">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-8">
                </div>
                <div class="clubs" id="saved-clubs-8">
                </div>
                <div class="hole-score-box" id="hole-score-box-8">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-9">
                </div>
                <div class="clubs" id="saved-clubs-9">
                </div>
                <div class="hole-score-box" id="hole-score-box-9">
                </div>
            </div>
            <div class="fbt-score">
                <div class="type-box">
                <p class="score-type">OUT</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateOutScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.out}</p>
                    <button class="score-btn" onclick="updateOutScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-10">
                </div>
                <div class="clubs" id="saved-clubs-10">
                </div>
                <div class="hole-score-box" id="hole-score-box-10">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-11">
                </div>
                <div class="clubs" id="saved-clubs-11">
                </div>
                <div class="hole-score-box" id="hole-score-box-11">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-12">
                </div>
                <div class="clubs" id="saved-clubs-12">
                </div>
                <div class="hole-score-box" id="hole-score-box-12">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-13">
                </div>
                <div class="clubs" id="saved-clubs-13">
                </div>
                <div class="hole-score-box" id="hole-score-box-13">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-14">
                </div>
                <div class="clubs" id="saved-clubs-14">
                </div>
                <div class="hole-score-box" id="hole-score-box-14">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-15">
                </div>
                <div class="clubs" id="saved-clubs-15">
                </div>
                <div class="hole-score-box" id="hole-score-box-15">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-16">
                </div>
                <div class="clubs" id="saved-clubs-16">
                </div>
                <div class="hole-score-box" id="hole-score-box-16">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-17">
                </div>
                <div class="clubs" id="saved-clubs-17">
                </div>
                <div class="hole-score-box" id="hole-score-box-17">
                </div>
            </div>
            <div class="hole">
                <div class="num" id="hole-18">
                </div>
                <div class="clubs" id="saved-clubs-18">
                </div>
                <div class="hole-score-box" id="hole-score-box-18">
                </div>
            </div>
            <div class="fbt-score">
                <div class="type-box">
                    <p class="score-type">IN</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateInScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.in}</p>
                    <button class="score-btn" onclick="updateInScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
            <div class="fbt-score">
                <div class="type-box">
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

getResults()

}

const displayRound = roundObj => {
    roundSection.innerHTML= ``

    for(i = 0; i < roundObj.length; i++){
        createRoundContainer(roundObj[i])

    }
        
    console.log(roundObj)
}


const displayResults = resultsArr => {
    

    resultsArr.forEach((resultsObj) => {


    let { hole, clubs, score, date} = resultsObj

    // if( date === roundDate.value) {

        let holeNumberBox = document.querySelector(`#hole-${hole}`)

            let savedClubs = document.querySelector(`#saved-clubs-${hole}`)

            let holeScoreBox = document.querySelector(`#hole-score-box-${hole}`)



            holeNumberBox.innerHTML = ` `

            savedClubs.innerHTML = ` `

            holeScoreBox.innerHTML = ` `


            let holeNumber = document.createElement("p")
                holeNumber.classList.add('hole-number')
                holeNumber.textContent = hole

            let savedClubList = document.createElement("ul")
                savedClubList.classList.add('saved-club-list')
            for( i = 0; i < clubs.length; i++){
                let club = document.createElement("li")
                club.classList.add("saved-club-used")
                club.textContent = clubs[i]
                savedClubList.appendChild(club)
            }

            let holeScore = document.createElement("p")
                holeScore.classList.add('hole-score')
                holeScore.textContent = score


        
            if (+hole === 2 && +score === 3) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 2 && +score === 4) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 2 && +score === 5) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 2 && +score === 6) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 2 && +score === 7) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 2 && +score === 8) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 9 && +score === 3) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 9 && +score === 4) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 9 && +score === 5) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 9 && +score === 6) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 9 && +score === 7) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 9 && +score === 8) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 11 && +score === 3) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 11 && +score === 4) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 11 && +score === 5) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 11 && +score === 6) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 11 && +score === 7) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 11 && +score === 8) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 14 && +score === 3) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 14 && +score === 4) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 14 && +score === 5) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 14 && +score === 6) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 14 && +score === 7) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 14 && +score === 8) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 3 && +score === 1) {
                holeScoreBox.classList.add('ace')
            } else if (+hole === 3 && +score === 2) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 3 && +score === 3) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 3 && +score === 4) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 3 && +score === 5) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 3 && +score === 6) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 7 && +score === 1) {
                holeScoreBox.classList.add('ace')
            } else if (+hole === 7 && +score === 2) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 7 && +score === 3) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 7 && +score === 4) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 7 && +score === 5) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 7 && +score === 6) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 12 && +score === 1) {
                holeScoreBox.classList.add('ace')
            } else if (+hole === 12 && +score === 2) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 12 && +score === 3) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 12 && +score === 4) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 12 && +score === 5) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 12 && +score === 6) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 17 && +score === 1) {
                holeScoreBox.classList.add('ace')
            } else if (+hole === 17 && +score === 2) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 17 && +score === 3) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 17 && +score === 4) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 17 && +score === 5) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 17 && +score === 6) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 1 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 1 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 1 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 1 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 1 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 1 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 4 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 4 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 4 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 4 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 4 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 4 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 5 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 5 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 5 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 5 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 5 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 5 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 6 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 6 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 6 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 6 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 6 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 6 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 8 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 8 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 8 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 8 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 8 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 8 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 10 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 10 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 10 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 10 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 10 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 10 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 13 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 13 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 13 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 13 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 13 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 13 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 15 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 15 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 15 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 15 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 15 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 15 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 16 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 16 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 16 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 16 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 16 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 16 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            if (+hole === 18 && +score === 2) {
                holeScoreBox.classList.add('eagle')
            } else if (+hole === 18 && +score === 3) {
                holeScoreBox.classList.add('birdie')
            } else if (+hole === 18 && +score === 4) {
                holeScoreBox.classList.add('par')
            } else if (+hole === 18 && +score === 5) {
                holeScoreBox.classList.add('bogey')
            } else if (+hole === 18 && +score === 6) {
                holeScoreBox.classList.add('double-bogey')
            } else if (+hole === 18 && +score === 7) {
                holeScoreBox.classList.add('triple-bogey')
            }

            holeNumberBox.appendChild(holeNumber)

            savedClubs.appendChild(savedClubList)

            holeScoreBox.appendChild(holeScore)


        // }

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



getRounds()

