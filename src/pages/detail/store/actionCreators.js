import axios from 'axios';
import * as constants from  './constants';
 
const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.content));
    });
  }
}