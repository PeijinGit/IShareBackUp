import React, { Component } from 'react'
import { connect } from "react-redux";
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
import { Button, Modal } from "antd";
import dayjs from 'dayjs'
import {
    FullscreenOutlined
} from '@ant-design/icons';
import './header.scss'
import { Content } from 'antd/lib/layout/layout';

const {confirm} = Modal;

class Header extends Component {

    state = {
        date:dayjs().format('YYYY MM DD HH:mm:ss')
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({date:dayjs().format('YYYY MM DD HH:mm:ss')})
        })
    }

    logOut = () => {
        confirm({
            title: 'Logout?',
            Content:'Again',
            cancelText:'Cancel',
            okText:'Confirm',
            onOk:()=>{
                this.props.deleteUserInfo()
            },
            onCancel:()=> {},
        });

        
    }
    render() {

        return (
            <header className="header">
                <div className="header-top">
                    <Button size='small'>
                        <FullscreenOutlined />
                    </Button>
                    <span className="username">Welcome Num: {this.props.userInfo.user.id}</span>
                    <Button type='link' onClick={this.logOut}>Logout</Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        XXXChart
                    </div>
                    <div className="header-bottom-right">
                        {this.state.date}
                        <img src="https://cdn3.iconfinder.com/data/icons/gundam-twotone/48/Cartoons__Anime_Gundam_Artboard_2-128.png" alt="weather Info" />
                        Sunny 2~ -12
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(
    state => ({
        isLogin: state.userInfo.isLogin,
        userInfo: state.userInfo
    }),
    {
        deleteUserInfo: createDeleteUserInfoAction

    }
)(Header)