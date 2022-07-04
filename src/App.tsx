import React, {useContext} from 'react'

import Context from "./context"
import Welcome from './pages/Welcome'
import Game from "./pages/Game"
import saveScore from './services/scoreService'

const App = () => {

    const {state, dispatch} = useContext(Context)

    if (state.rounds === 0 && state.maxScore > 0) {
        // Save score
        const scorePercent = Math.round(state.score/state.maxScore*100);
        saveScore(state.name, scorePercent)
        // Print score
        alert(state.name + " ha conseguido " + scorePercent + "% de los puntos")
        // TODO: print modal 
        return <div>Modal</div>
        // Reset state when modal is closed
        // dispatch(reset())
      }

    // Print welcome page if name is not set
    if (state.name == "" || state.rounds === 0) {
        return <Welcome />
    }

    if (state.name !== "" && state.rounds > 0) {
        // Primera página del juego
        return <Game />
    }

    return <div></div>
}

export default App