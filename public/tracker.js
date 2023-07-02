const holeSection = document.querySelector('#hole-section')
const holeForm = document.querySelector('#hole-form')
const holeSelect = document.querySelector('#hole')
const submitHoleBtn = document.querySelector('.submit-btn')

let savedClubs = []

const baseURL = `http://localhost:4000/hamiltonfarm`

const getHole = () => {
    
    axios.get(baseURL+`/${holeSelect.value}`)
    .then(response => {
        console.log(response.data)
        createHoleContainer(response.data)
    }).catch(err => console.log(err))
}

const addShot = () => {
    console.log('shot added')
    const clubInput = document.getElementById('club-input')

    savedClubs.push(clubInput.value)

    let bodyObj = {
    hole: holeSelect.value,
    club: clubInput.value,
    greenInReg: false
}

        clubInput.value = ''

    axios.post(baseURL, bodyObj)
    .then(response => {
        displayShots(response.data)  
        console.log(response.data)
    }).catch(err => console.log(err))
}

const getShots = () => {
    axios.get(baseURL)
    .then(response => {
        displayShots(response.data)
    }).catch(err => console.log(err))
}

const removeShot = (evt) => {
    axios.delete(`${baseURL}/${evt.target.id}`)
    .then(response => {
        displayShots(response.data)
        console.log(response.data)
    }).catch(err => console.log(err))
}

const updateGreenInReg = (evt) => {
    axios.put(`${baseURL}/${evt.target.id}`)
        .then(response => {
            displayShots(response.data)
            console.log(response.data)
        }).catch(err => console.log(err))
}

const savedShots = () => {

    let bodyObj = {
        hole: holeSelect.value,
        clubs: savedClubs,
        score: savedClubs.length


    }

    console.log(bodyObj)

    axios.post(`${baseURL}/saved`, bodyObj)
    .then(response => {  
    }).catch(err => console.log(err))
        savedClubs= []
}

const createHoleContainer = (hole) => {

    let holeContainer = document.createElement('div')
    holeContainer.classList.add('hole-container')

    holeSection.innerHTML=``

    holeContainer.innerHTML = ` 
    <img alt='Hole View' src=${hole.holeView} class="hole-view"/>
    <div class="hole-info">
        <p class="name">${hole.name}</p>
        <p class="par"> Par: ${hole.par}</p>
        <p class="hcp"> Hcp: ${hole.handicap}</p>
        <p class="black"> Black: ${hole.black} yds</p>
        <p class="blue"> Blue: ${hole.blue} yds</p>
        <p class="white"> White: ${hole.white} yds</p>
    </div>
    <div class="shot-input-container">
    <input type="text" id="club-input" placeholder="Club Used"/>
    <button class="add-shot-btn" onclick="addShot()">Add Shot</button>
    <button class="save-btn" onclick="savedShots()">Save</button>
    </div>
    <div class="results-container">
        <ol class="shot-list"></ol>
        <img alt='Hole Map' src=${hole.holeMap} class='hole-map'/>
    </div> 
`
holeSection.appendChild(holeContainer)

getShots()
    
}

const displayShots = shotsArr => {
    const shotList = document.querySelector('.shot-list')

    shotList.innerHTML = ''

    shotsArr.forEach((shotsObj, index) => {
        let { hole ,club, greenInReg } = shotsObj

         if(+hole === +holeSelect.value){

            let listItem = document.createElement('li')
            let clubSelection = document.createElement('span')
            let removeShotBtn = document.createElement('button')
            removeShotBtn.classList.add('remove-shot')
        

            clubSelection.textContent = club
            if(greenInReg){
                clubSelection.classList = 'green'
            }
            clubSelection.id = index
            clubSelection.addEventListener('click', updateGreenInReg)


            removeShotBtn.id = index
            removeShotBtn.textContent = 'Remove'
            removeShotBtn.addEventListener('click', removeShot)


            listItem.appendChild(clubSelection)
            listItem.appendChild(removeShotBtn)

            shotList.appendChild(listItem)


         }

    })
}
const submitNewHole = event => {
    event.preventDefault()
    getHole()

}

submitHoleBtn.addEventListener("click", submitNewHole)