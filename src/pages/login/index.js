import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='帐号'/>
          <Input placeholder='密码'/>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login);