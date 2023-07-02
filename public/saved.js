const roundSection = document.querySelector('#round-section')
const roundForm = document.querySelector('#round-form')
const roundDate = document.querySelector('#round-date')
const submitRoundBtn = document.querySelector('.submit-btn')

const baseURL = `http://localhost:4000/hamiltonfarm`

const getRound = () => {
    
    axios.get(`${baseURL}/round`)
    .then(response => {
        console.log(response.data)
        createRoundContainer(response.data)
    }).catch(err => console.log(err))
}


const addRound = () => {
    console.log('round added')

    let bodyObj = {
        date: roundDate.value,
        in: 36,
        out: 36,
        total: 72
     }

        roundDate.value = ''
    
    axios.post(`${baseURL}/round`, bodyObj)
    .then(response => {
        createRoundContainer(response.data)  
        console.log(response.data)
      }).catch(err => console.log(err))


}

const getResults = () => {
    axios.get(`${baseURL}/results`)
    .then(response => {
        displayResults(response.data)
    }).catch(err => console.log(err))
}


const createRoundContainer = (round) => {

    let roundContainer = document.createElement('div')
    roundContainer.classList.add('round-container')

    roundSection.innerHTML= ``

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
                    <button class="score-btn" onclick="updateScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.out}</p>
                    <button class="score-btn" onclick="updateScore(${round.round}, 'minus')">-</button>
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
                    <button class="score-btn" onclick="updateScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.in}</p>
                    <button class="score-btn" onclick="updateScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
            <div class="fbt-score">
                <div class="num">
                    <p class="score-type">TOT</p>
                </div>
                <div class="score-box">
                    <button class="score-btn" onclick="updateScore(${round.round}, 'plus')">+</button>
                    <p class"score-number">${round.total}</p>
                    <button class="score-btn" onclick="updateScore(${round.round}, 'minus')">-</button>
                </div>
            </div>
        </div>
            <div class="btns-container">
                <button class="get-results-btn">Get Results</button>
                <button class="remove-round-btn">Remove Round</button>
            </div>
`
roundSection.appendChild(roundContainer)

}


const displayResults = () => {

}

const submitNewRound = event => {
    event.preventDefault()
    addRound()
}

submitRoundBtn.addEventListener("click", submitNewRound)

getRound()

