import { GET_GLOBAL } from "../const";

const initialState = {
  global: null
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_GLOBAL:
      return {
        ...state,
        global: action.payload
      }
    default:
      return state;
  }
}

export default appReducer