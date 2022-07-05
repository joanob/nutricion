import React, {useState, useContext} from 'react'

import Context from "./context"
import Welcome from './pages/Welcome'
import Game from "./pages/Game"
import ScoreList from './pages/ScoreList'

const App = () => {

    const [showScorelist, setShowScorelist] = useState(false)

    const {state, dispatch} = useContext(Context)

    if (showScorelist) {
        return <ScoreList close={()=>{setShowScorelist(false)}} />
    }

    if (state.rounds === 0 && state.maxScore > 0) {
        /**
         * Score list prints score list remarking last entry
         * Reset store when closing
         */
        return <ScoreList close={()=>{setShowScorelist(false)}} />
    }

    // Print welcome page if name is not set
    if (state.name == "" || state.rounds === 0) {
        return <Welcome showScorelist={()=>{setShowScorelist(true)}} />
    }

    if (state.name !== "" && state.rounds > 0) {
        // Primera página del juego
        return <Game />
    }

    return <div></div>
}

export default App