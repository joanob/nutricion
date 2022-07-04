type listentry = {
    name: string
    scorePercent: number 
    // date in miliseconds
    date: number
}

const saveScore = (name: string, scorePercent: number) => {
    const scorelistJSON = localStorage.getItem("scorelist")
    let scorelist: listentry[] = []
    if (scorelistJSON) {
        scorelist = JSON.parse(scorelistJSON)
    }
    scorelist.push({name, scorePercent, date: new Date().getTime()})
    localStorage.setItem("scorelist", JSON.stringify(scorelist))
}

export default saveScore