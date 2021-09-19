import React from 'react';
import './item.scss';
import {NavLink} from "react-router-dom";

const Item = ({imageUrl, name, count, id, deleteThisItem}) => {

    return (
        <div className="item">
            <NavLink className='link' to="/info">
                <div className="__img">
                    <img src={imageUrl} alt=""/>
                </div>
            </NavLink>
            <div className="__name">
                {name}
            </div>
            <div className="__quantity">
                count: {count}
            </div>
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <div className="__deleteButton" onClick={(e) => deleteThisItem(id)}>Delete</div>
            </NavLink>
        </div>
    )
};

export default Item;
