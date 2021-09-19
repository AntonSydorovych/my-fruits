import { actionTypes } from './actionTypes';

const initialState = {
    item: ' '
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ITEM:
            return {
                ...state,
                item: action.payload
            }

        case actionTypes.UPDATE_ITEM:
            return {
                ...state,
                item: state.items.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export const showItem = (payload) => {
    return {
        type: actionTypes.SHOW_ITEM,
        payload
    }
}

export const updateItem = (payload) => {
    return {
        type: actionTypes.UPDATE_ITEM,
        payload
    }
}
