import {GET_GLOBAL} from '../const'

export const getGlobal = (data) => {
  return {
    type: GET_GLOBAL,
    payload: data
  }
}