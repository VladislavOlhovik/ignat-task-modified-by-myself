type ActionThemeReducerRype = ReturnType<typeof changeThemeC>
export type initStateThemeReducerType = {
    theme: string
}

const initState: initStateThemeReducerType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionThemeReducerRype): initStateThemeReducerType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return { ...state, theme: action.value };
        }
        default: return state;
    }
};

export const changeThemeC = (value: string) => ({ type: 'CHANGE_THEME', value } as const);