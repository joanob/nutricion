type listentry = {
    name: string
    scorePercent: number 
    // date in miliseconds
    date: number
}

/**
 * Save score and return last entry
 */
const saveScore = (name: string, scorePercent: number): listentry => {
    const newEntry = {name, scorePercent, date: new Date().getTime()}
    const scorelistJSON = localStorage.getItem("scorelist")
    let scorelist: listentry[] = []
    if (scorelistJSON) {
        scorelist = JSON.parse(scorelistJSON)
        let newscoreList: listentry[] = []
        // Iterate score list to push new entry sorted by score
        for (let i = 0; i < scorelist.length; i++) {
            if (scorelist[i].scorePercent <= scorePercent) {
                newscoreList = scorelist.slice(0, i)
                newscoreList.push(newEntry)
                newscoreList.push(...scorelist.slice(i))
                break
            }
        }
        localStorage.setItem("scorelist", JSON.stringify(newscoreList))
    } else {
        let scorelist = [newEntry]
        localStorage.setItem("scorelist", JSON.stringify(scorelist))
    }
    return newEntry
}

export const getScoreList = (): listentry[] => {
    const scorelistJSON = localStorage.getItem("scorelist")
    if (scorelistJSON) {
        return JSON.parse(scorelistJSON)
    }
    return []
}

export default saveScore