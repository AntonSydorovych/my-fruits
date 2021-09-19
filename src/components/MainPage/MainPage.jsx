import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {uploadData, downloadData, loadItem} from '../../functions/api';
import {createItem, deleteItem, sortItems} from '../../store/reducers/mainReducer';
import Mapper from '../../functions/Mapper';
import MyForm from "../Form/Form";
import './mainPage.scss';

let MainPage = () => {
    const dispatch = useDispatch();
    let [modalVisible, setModalVisible] = useState(false);
    let [reduxItems, setReduxItems] = useState(' ');
    useEffect(() => {
        uploadData();
    }, []);

    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(downloadData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    useEffect(() => {
        setReduxItems(state.mainPageReducer.reduxItems);
    }, [state]);

    let mappedProducts = 'Loading...';

    const showItem = (item) => {
        dispatch(loadItem(item))
    };

    const removeItem = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Do you want delete this item?")) {
            dispatch(deleteItem(id))
        }
    };

    const sortByCount = () => {
        dispatch(sortItems(reduxItems.sort(function (a, b) {
            if (+a.count > +b.count) {
                return 1;
            }
            if (+a.count < +b.count) {
                return -1;
            }
            return 0;
        })))
    };

    const sortByName = () => {
        dispatch(sortItems(reduxItems.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })))
    };

    const AddItem = (newItem) => {
        newItem.id = +Date.now();
        dispatch(createItem(newItem))
    }

    return (
        <div className={modalVisible ? "main-page main-page--active" : "main-page"}>
            <div className="button-wrapper">
                <div className="main-page-button" onClick={sortByName}>Sort by name</div>
                <div className="add-item-button" onClick={() => setModalVisible(true)}>New Product</div>
                <div className="main-page-button" onClick={sortByCount}>Sort by count</div>
            </div>
            <div className="form-wrapper">
                <MyForm modalVisible={modalVisible} submit={AddItem}
                        setModalVisible={setModalVisible} actionType={'Add'}/>

            </div>

            <div className="fruits-area">
                <Mapper
                    reduxItems={reduxItems}
                    mappedProducts={mappedProducts}
                    deleteItem={removeItem}
                    showItem={showItem}
                />
            </div>
        </div>
    )
};

export default MainPage;
