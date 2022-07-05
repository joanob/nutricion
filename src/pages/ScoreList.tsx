import React, {useContext} from 'react'
import Context from '../context'
import { getScoreList } from '../services/scoreService'

import styles from "./ScoreList.module.css"

const ScoreList = (props: {close: () => void}) => {

    const {state, dispatch} = useContext(Context)

    const scorelist = getScoreList()

    let lastentryindex = -1

    if(state.lastScoreListEntry) {
        lastentryindex = scorelist.indexOf(state.lastScoreListEntry)
    }

  return (
    <main className={styles.main}>
        <div className={styles.header}>
            <h2>Puntuaciones</h2>
            <div onClick={()=>{props.close}}>x</div>
        </div>
        <table className={styles.scorelist}>
            <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Puntuación</th>
            </tr>
            {
                scorelist.length === 0 ? "No hay puntuaciones." : 
                scorelist.map((listentry, i)=>{
                    const date = new Date(listentry.date)

                    return (<tr key={i} className={i === lastentryindex ? styles.last : ""}>
                        <td>{date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</td>
                        <td>{listentry.name}</td>
                        <td>{listentry.scorePercent}</td>
                    </tr>)
                })
            }
        </table>
    </main>
  )
}

export default ScoreList