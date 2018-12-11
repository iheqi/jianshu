import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/313b30a87782c9934e69fa46cfd7df0549e55aea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/home.json').then(res => {
      const data = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: data.topicList,
        recommendList: data.recommendList,
        articleList: data.articleList
      }
      console.log(data)
      this.props.changeHomeData(action);
    });
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home);