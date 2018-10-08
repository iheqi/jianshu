import React, { Component } from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addtion,
	Button,
	SearchWrapper
} from './style';


class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe607;</i>
					</NavItem>
					<SearchWrapper>
						<NavSearch></NavSearch>
						<i className='iconfont'>&#xe600;</i>
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
		)
	}
}

export default Header;