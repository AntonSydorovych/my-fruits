import {downLoadItems, saveItem} from '../store/reducers/mainReducer';
import {showItem} from '../store/reducers/itemReducer';
import {items} from "../backEnd/main";

export const downloadData = () => {
    let items = JSON.parse(localStorage.getItem('items'));
    return (dispatch) => {
        dispatch(downLoadItems(items));
    }
};

export const uploadData = () => {
    const uploadedItems = JSON.parse(localStorage.getItem('items'));
    if (uploadedItems === null) {
        localStorage.setItem('items', JSON.stringify(items));
    }

};

export const loadItem = (item) => {
   localStorage.setItem('selectedItem', JSON.stringify(item));
    return (dispatch) => {
        dispatch(showItem(item));
    }
};

export const getSelectedItem =  () => {
 let item = JSON.parse(localStorage.getItem('selectedItem'));
    return (dispatch) => {
        dispatch(showItem(item));
    }
};

export const saveEditedItem = (item) => {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    return (dispatch) => {
        dispatch(showItem(item));
        dispatch(saveItem(item));
    }
};
