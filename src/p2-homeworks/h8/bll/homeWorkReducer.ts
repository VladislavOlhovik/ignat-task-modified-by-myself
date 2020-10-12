import { ActionType, ObjType } from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: ObjType[], action: ActionType): ObjType[] => {
    switch (action.type) {
        case "sort": {
            if(action.payload==='up'){
            state.sort((a,b)=>{
                switch (a.name > b.name) {
                    case true:
                      return 1;
                    case false:
                      return -1;
                    default:
                      return 0;
                  }
            })
        } if(action.payload==='down'){
            state.sort((a,b)=>{
                switch (a.name < b.name) {
                    case true:
                      return 1;
                    case false:
                      return -1;
                    default:
                      return 0;
                  }
            })
        }
            return [...state]
        }
        case "check": {
            return state.filter(el=>el.age>action.payload)
        }
        default: return state
    }
};