import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={this.props.fn1}>登陆</button>
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.commons.isLogin
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fn1: () => {
      dispatch({
        type: 'LOGIN'
      })
      let redirect = props.location.search.substr(10);
      props.history.replace(redirect);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)