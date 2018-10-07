import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	display: block;
	width: 100px;
	height: 58px;
	position: absolute;
	top: 0;
	left: 0;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}

	&.right {
		float: right;
		color: #969696;
	}
	
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;

	&::placeholder {
		color: #999;
	}
`;

export const Addtion = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	margin-right: 20px;
	border: 1px solid #ec6149;
	padding: 0 20px;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}

	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;