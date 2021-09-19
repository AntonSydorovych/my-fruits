import React from 'react';
import './coments.scss';

let Coments = ({coments, itemId}) => {
    let result = 'No coments';

    let filteredComents = coments.filter(coment => coment.id === itemId) || '';

    if(filteredComents.length > 0) {
        result = filteredComents.map((item) => {
                return (
                    <div className="coment-wrapper" key={item.id}>
                        <div className="coment-header">
                            <div className="coment-date">{item.date}</div>
                            <div className="coment-delete-button">X</div>
                        </div>
                        <div className="coment-description">{item.description}</div>
                    </div>
                )
            }
        )
    }
    return result
};


export default Coments;


/*
let Coments = () => {
    let mappedComents = myComments.map((item) => {
        return (
            <div className="comentWrapper">
                <div>{item.date}</div>
                <div>{item.description}</div>
            </div>
        )
    },
}

 */
