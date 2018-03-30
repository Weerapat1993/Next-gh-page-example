export const reducer = (state = {foo: ''}, action) => {
  switch (action.type) {
      case 'FOO':
          return {...state, foo: action.payload};
      default:
          return state
  }
};

// RootReducer
const rootReducer = {
  foo: reducer
}

export default rootReducer