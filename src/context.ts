import { createContext, Dispatch } from "react";
import {State, Action, initialState} from "./store"

interface IContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

const Context = createContext<IContextProps>({
    dispatch: () => {
        // Dispatch initial state
    },
    state: initialState
})

export default Context