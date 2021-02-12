import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
import './admin.scss'
import 'antd/dist/antd.css'


class Admin extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    clearLocal = () => {
        alert("clear")
        this.props.deleteUserInfo()
    }

    acquireEvents = () => {

    }

    render() {
    const {isLogin} = this.props.userInfo
        alert("Admin: "+isLogin)
    if(isLogin === false) {
        alert("No login info");
        return <Redirect to="/login" />
    }
        return (
            <div>
                admin:{this.props.userInfo.user.id}
                <button onClick={this.clearLocal}>clear</button>
                <button onClick={this.acquireEvents}></button>
            </div>

        )
    }
}

export default connect(
    state => ({ userInfo: state.userInfo }),
    {
        deleteUserInfo: createDeleteUserInfoAction
    }
)(Admin)
