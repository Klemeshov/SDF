const ADD_FRIENDS = 'ADD_FRIENDS';
const ADD_FRIEND = 'ADD_FRIEND';

const friendReducer = (state, action) => {
  if (action.type === ADD_FRIENDS){
    return {...state, friends: action.friends}
  }
  if (action.type === ADD_FRIEND){
    return state.friends.push(action.friend)
  }

  return state;
}
const newsReducer = (state, action) => {
  if (action.type === ADD_FRIENDS){
    state.friends = action.friends
  }
  if (action.type === ADD_FRIEND){
    state.friends.push(action.friend)
  }
}

class Store {
  state = {

  };

  constructor() {
    const defaultValue = {
      friends: [],
      news: [],
      messages: [],
      profile: {

      },
      auth: {

      },

    }
  }

  dispatch = (action) => {
    let newState = this.state;
    newState = friendReducer(newState, action);
    newState = newsReducer(newState, action);

    if (newState !== this.state)
      rerenderComponent();
  };
}