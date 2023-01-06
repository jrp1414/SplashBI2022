import { ActionReducer, MetaReducer } from "@ngrx/store";

export interface RootState {
    titles: string[];
}

export const hydrationMetaReducer = (reducer: ActionReducer<RootState>): ActionReducer<RootState> => {
    return (state, action) => {
        if (action.type == "INIT") {
            const storageValue = localStorage.getItem("state");
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
            const nextState = reducer(state, action);
            localStorage.setItem("state", JSON.stringify(nextState));
        }
    }
};

export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
];