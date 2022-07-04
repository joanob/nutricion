import { createContext, Dispatch } from "react";
import {IState, TAction, initialState} from "./store"

interface IContextProps {
    state: IState;
    dispatch: Dispatch<TAction>;
}

const Context = createContext<IContextProps>({
    dispatch: () => {
        // Dispatch initial state
    },
    state: initialState
})

export default Context