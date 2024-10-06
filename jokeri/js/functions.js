
const jokerTable = document.getElementById('jokerTable')
const rowCountDisplay = document.getElementById('rowCount')
const newRowBtn = document.getElementById('newRowBtn')

let rowCount = 0;

newRowBtn.addEventListener('click', () => {
    
})

const getRandomJokerNumber = () => {
    return Math.floor(Math.random() * 10) 
}

const createNewRow = () => {
    const row = document.createElement('tr')

    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td')
        cell.innerText = getRandomJokerNumber()
        row.appendChild(cell);
    }

    jokerTable.appendChild(row)
    rowCount++
    rowCountDisplay.innerText = rowCount 
}

newRowBtn.addEventListener('click', createNewRow)