import React, {useState} from "react";
import './form.scss';

const MyForm = (props) => {

    let [name, setName] = useState('');
    let [count, setCount] = useState('');
    let [width, setWidth] = useState('');
    let [height, setHeight] = useState('');
    let [weight, setWeight] = useState('');

    let [wasNameTouched, setWasNameTouched] = useState(false);
    let [wasCountTouched, setWasCountTouched] = useState(false);
    let [wasWidthTouched, setWasWidthTouched] = useState(false);
    let [wasHeightTouched, setWasHeightTouched] = useState(false);
    let [wasWeightTouched, setWasWeightTouched] = useState(false);
    //
    // let validator = () => {
    //     if (name.length === 0 || !isNaN(count) && wasNameTouched) {
    //         error.name = 'Field can not be empty'
    //     }
    //     if (count.length === 0 || isNaN(count) && wasCountTouched) {
    //         error.count = 'Count can be only number'
    //     }
    //     if (width.length === 0 || isNaN(width) && wasWidthTouched) {
    //         error.width = 'Width can be only number'
    //     }
    //     if (height.length === 0 || isNaN(height) && wasHeightTouched) {
    //         error.height = 'Height can be only number'
    //     }
    //     if (weight.length === 0 || isNaN(weight) && wasWeightTouched) {
    //         error.weight = 'Weight can be only number'
    //     }
    //
    //     return error;
    // };

    const cancelAdding = () => {
        props.setModalVisible(false)
    };

    let error = {};
    let validator = () => {
        if (name.length === 0 || !(/^[a-zA-Z]+$/.test(name))) {
            error.name = 'Field can be only with latin letters'
        }
        if (count.length === 0 || isNaN(count)) {
            error.count = 'Count can be only a number'
        }
        if (width.length === 0 || isNaN(width)) {
            error.width = 'Width can be only a number'
        }
        if (height.length === 0 || isNaN(height)) {
            error.height = 'Height can be only a number'
        }
        if (weight.length === 0 || isNaN(weight)) {
            error.weight = 'Weight can be only a number'
        }

        return error;
    };

    const Submit = () => {

        if (Object.keys(error).length > 0) {
            alert('Form is incorrect');
            console.log('name.length', name.length);
            return
        }

        let newItem = {
            imageUrl: 'https://www.espaceagro.com/_affaire/418808.jpg',
            name,
            count,
            width,
            height,
            weight
        };

        props.submit(newItem);

        setName('');
        setCount('');
        setWidth('');
        setHeight('');
        setWeight('');

        setWasNameTouched(false);
        setWasCountTouched(false);
        setWasWidthTouched(false);
        setWasHeightTouched(false);
        setWasWeightTouched(false);

        console.log('error', error);
    }

    return (
        <div className="modal-container">
            {props.modalVisible && <div className="upsert-modal">
                <div className="upsert-modal__header">
                    <div className="form-button-submit" onClick={Submit}>{props.actionType}</div>
                    <div className="form-button-cancel" onClick={cancelAdding}>Cancel</div>
                </div>
                <div className="upsert-modal__body">
                    <div>
                        <div>Name</div>
                        {(validator().name && wasNameTouched) && <div className="errorField">{validator().name}</div>}
                        <input className="input" onBlur={() => setWasNameTouched(true)}
                               onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div>
                        <div>Count</div>
                        {(validator().count && wasCountTouched) &&
                        <div className="errorField">{validator().count}</div>}
                        <input className="input" onBlur={() => setWasCountTouched(true)}
                               onChange={(e) => setCount(e.target.value)} value={count}/>
                    </div>
                    <div>
                        <div>Width</div>
                        {(validator().width && wasWidthTouched) &&
                        <div className="errorField">{validator().width}</div>}
                        <input className="input" onBlur={() => setWasWidthTouched(true)}
                               onChange={(e) => setWidth(e.target.value)} value={width}/>
                    </div>
                    <div>
                        <div>Height</div>
                        {(validator().height && wasHeightTouched) &&
                        <div className="errorField">{validator().height}</div>}
                        <input className="input" onBlur={() => setWasHeightTouched(true)}
                               onChange={(e) => setHeight(e.target.value)} value={height}/>
                    </div>
                    <div>
                        <div>Weight</div>
                        {(validator().weight && wasWeightTouched) &&
                        <div className="errorField">{validator().weight}</div>}
                        <input className="input" onBlur={() => setWasWeightTouched(true)}
                               onChange={(e) => setWeight(e.target.value)} value={weight}/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyForm;
