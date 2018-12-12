import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList,
  recommendList: data.recommendList,
  articleList: data.articleList
})

const addHomeList = (list, page) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  page: page
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

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const data = res.data.data;
      const action = addHomeList(data, page + 1);
      dispatch(action);      
    });
  }
}

export const toggleTopShow = (flag) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  flag
})