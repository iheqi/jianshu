import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList,
  recommendList: data.recommendList,
  articleList: data.articleList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const data = res.data.data;
      const action = changeHomeData(data);
      dispatch(action);
    });  
  }
}