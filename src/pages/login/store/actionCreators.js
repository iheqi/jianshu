import axios from 'axios';
import * as constants from  './constants';
 
const changeLogin = (login) => ({
  type: constants.CHANGE_LOGIN,
  login
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      const data = res.data.data;
      dispatch(changeLogin(data));
    });
  }
}
export const logout = () => ({
  type: constants.LOGOUT,
  login: false
})