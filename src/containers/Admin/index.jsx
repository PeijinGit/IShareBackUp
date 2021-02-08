import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import './admin.scss'
//import axios from 'axios'
import 'antd/dist/antd.css'


class Admin extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    clearLocal = () => {
        alert("clear")
        localStorage.setItem('user','')
        localStorage.setItem('isLogin',false)
    }

    render() {
    const {isLogin} = this.props.userInfo
        alert("Admin: "+isLogin)
    if(isLogin === false) {
        alert("No login info");
        return <Redirect to="/" />
    }
        return (
            <div>
                admin:{this.props.userInfo.user.id}
                <button onClick={this.clearLocal}>clear</button>
            </div>

        )
    }
}

export default connect(
    state => ({ userInfo: state.userInfo }),
    {}
)(Admin)
