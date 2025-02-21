
let counter = 0;
const CHANGE_COUNTER_EVENT = 'CHANGE_COUNTER_EVENT';

let str = `Вы нажали на кнопку: ${counter} раз`;

const dispatch = (event, state) => {
    if (event === CHANGE_COUNTER_EVENT) {
        counter = state;
        str = `Вы нажали на кнопку: ${counter} раз`;
    }
}

const setCounter = (newCounter) => {
    dispatch(CHANGE_COUNTER_EVENT, newCounter);
}

const onClick = () => {
    setCounter(counter + 1);
}

const onDoubleClick = () => {
    setCounter(counter - 1);
};

/*
const state = {};

const dispatch = (event, values) => {
    if (event === 'SET_VALUE') {
        state[values.id] = values.value;
        startRerender();
    }
}
const useState = (defaultValue) => {
    const id = generateId();
    state[id] = defaultValue;

    const setValue = (newValue) => {
        dispatch("SET_VALUE", {id: id, value: newValue});
    }

    return [state[id], setValue];
}
*/