const initialState = {};

function rootReducer(state = initialState, action) {
  const newState = {...state};

  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default rootReducer;
