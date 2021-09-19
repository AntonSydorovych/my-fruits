import React from 'react';
import Item from '../components/MainPage/Item/Item';

let Mapper = ({reduxItems, mappedProducts, deleteItem, showItem}) => {
    if (reduxItems !== ' ') {
        return mappedProducts = reduxItems.map((item) => {
            return <div className="item-wrapper" key={item.id} onClick={() => showItem(item)}>
                <Item
                    imageUrl={item.imageUrl}
                    name={item.name}
                    count={item.count}
                    id={item.id}
                    deleteThisItem={deleteItem}
                />
            </div>
        })
    }
    return mappedProducts;
}

export default Mapper;
