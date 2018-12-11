import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1
});

export default (state = defaultState, action) => {
	// immutable对象的set方法，会结合之前immutable对象的值
	// 和设置的值，返回一个全新的对象
	switch (action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			});
		case constants.ADD_ARTICLE_LIST:
			console.log(action)
			return state.merge({
				articleList: state.get('articleList').concat(action.list),
				articlePage: action.page
			})			
		default:
			return state;
	}
}


