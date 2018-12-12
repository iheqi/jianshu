import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addtion,
	Button,
	SearchInfo,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		const { focused, handleInputFocus, handleInputBlur, list } = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe607;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames='slide'
						>
							<NavSearch 
								className={focused ? 'focused' : ''}
								onFocus={() => {handleInputFocus(list)}}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
							&#xe600;
						</i>
						{ this.getListArea() }
					</SearchWrapper>
				</Nav>

				<Addtion>
					<Button className='reg'>注册</Button>
					<Button className='writting'>
						<i className='iconfont'>&#xe831;</i>
						写文章
					</Button>
				</Addtion>
			</HeaderWrapper>
		);
	}

	getListArea() {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS(); // immutable对象转为普通对象
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10 && i < newList.length - 1; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}			
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
							<i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>

					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}		
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let angle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (angle) {
				angle = angle | 0;
			} else {
				angle = 0;
			}
			spin.style.transform = `rotate(${angle + 360}deg)`;

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		}		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);