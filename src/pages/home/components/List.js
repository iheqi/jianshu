import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      this.props.list.map(item => {
        return (
          <ListItem key={item.get('id')}>
            <img className='pic' src={item.get('imgUrl')} alt=''/>
            <ListInfo>
              <h3 className='title'>
                {item.get('title')}
              </h3>
              <p className='desc'>{item.get('desc')}</p>
            </ListInfo>
          </ListItem>          
        )
      })
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('acticleList')
})

export default connect(mapState)(List)