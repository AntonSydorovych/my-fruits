import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import {getSelectedItem, saveEditedItem} from "../../functions/api";
import MyForm from "../Form/Form";
import {myComments} from "../../backEnd/main";
import Coments from "./Coments/Coments";
import './infoPage.scss';


const Info = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let [modalVisible, setModalVisible] = useState(false);
    const item = useSelector(state => state).itemReducer.item;
    const {
        imageUrl,
        name,
        count,
        weight,
        id,
    } = item;

    useEffect(() => {
        dispatch(getSelectedItem());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveItem = (editedItem) => {
        editedItem.id = item.id;
        editedItem.imageUrl = item.imageUrl;
        dispatch(saveEditedItem(editedItem));
    }

    return (
        <div>

            <MyForm modalVisible={modalVisible} submit={saveItem}
                    setModalVisible={setModalVisible} actionType={'Save'} />

            <div className="info-wrapper">
                <div className="photo-container">
                    <img src={imageUrl} alt="" className="img"/>
                </div>
                <div className="description-container">
                    <div className="description-name">{name}</div>
                    <div className="description-count">Count: {count}</div>
                    <div className="description-weight">Weight: {weight}</div>
                </div>
                <div className="button-container">
                    <div className="back-button" onClick={() => history.goBack()}>
                        {'< Back'}
                    </div>
                    <div className="edit-button" onClick={() => setModalVisible(true)}>
                        Edit Item
                    </div>
                </div>
            </div>

            <Coments
                coments={myComments}
                itemId={id}
            />

        </div>
    )
}

export default Info;
