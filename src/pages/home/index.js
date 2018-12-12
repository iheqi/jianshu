import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

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
        {
          this.props.showScroll ? 
            <BackTop onClick={this.handleScrollTop}>回顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollToShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);