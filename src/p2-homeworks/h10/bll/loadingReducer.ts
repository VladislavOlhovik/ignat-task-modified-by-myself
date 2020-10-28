export type StateType = {
    loading:boolean
}
type ActionReducerType = ReturnType<typeof loadingAC>

const initState = {
    loading:false
};

export const loadingReducer = (state = initState, action: ActionReducerType): StateType => {
    switch (action.type) {
        case "SET_LOADING": {
            return {...state,loading:!state.loading};
        }
        default: return state;
    }
};

export const loadingAC = () => {
    return {
        type:'SET_LOADING'
    }
}; 