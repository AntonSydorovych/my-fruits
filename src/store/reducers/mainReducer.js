import {actionTypes} from './actionTypes';

const initialState = {
    reduxItems: ' '
};

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOWNLOAD_ITEMS_FROM_LS:
            if (state.reduxItems === ' ') {
                return {
                    ...state,
                    reduxItems: action.payload
                }
            } else {
                return state
            }

        case actionTypes.CREATE_ITEM:
            return {
                ...state,
                reduxItems: [...state.reduxItems, action.payload]
            };


        case actionTypes.SORT_ITEMS:
            return {
                ...state,
                reduxItems: action.payload
            };

        case actionTypes.SAVE_ITEM:
            return {
                ...state,
                reduxItems: [...state.reduxItems.filter(item => item.id !== action.payload.id), action.payload]
            };

        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                reduxItems: [...state.reduxItems.filter(item => item.id !== action.payload)]
            };

        default:
            return state;
    }
};

export const createItem = (payload) => {
    return {
        type: actionTypes.CREATE_ITEM,
        payload
    }
};
export const downLoadItems = (payload) => {
    return {
        type: actionTypes.DOWNLOAD_ITEMS_FROM_LS,
        payload
    }
};

export const deleteItem = (payload) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload
    }
};

export const sortItems = (payload) => {
    return {
        type: actionTypes.SORT_ITEMS,
        payload
    }
};

export const saveItem = (payload) => {
    return {
        type: actionTypes.SAVE_ITEM,
        payload
    }
};

