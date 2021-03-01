import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
import { Button, Modal } from "antd";
import dayjs from 'dayjs'
import {
    FullscreenOutlined
} from '@ant-design/icons';
import './header.scss'
import menuList from '../../config/meun_config'

const {confirm} = Modal;
let myMenu = menuList

class Header extends Component {

    state = {
        date:dayjs().format('YYYY MM DD HH:mm:ss'),
        title: ''
    }

    componentDidMount(){
        this.timeId = setInterval(()=>{
            this.setState({date:dayjs().format('YYYY MM DD HH:mm:ss')})
        })
        //console.log(this.props.location)
        this.getTitle()
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    getTitle=()=>{
        let pathKey = this.props.location.pathname.split('/').reverse()[0]
        let title = ''
        myMenu.forEach((item)=>{
            if(item.children instanceof Array){
                let tmp = item.children.find((citem)=>{
                    return citem.key === pathKey
                })
                if(tmp) title = tmp.title
            }else{
                if(pathKey === item.key) title = item.title
            }
        })
        return this.setState({title})
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
                        {this.props.title || this.state.title}
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

let withHeader = withRouter(Header)

export default connect(
    state => ({
        isLogin: state.userInfo.isLogin,
        userInfo: state.userInfo,
        title:state.title
    }),
    {
        deleteUserInfo: createDeleteUserInfoAction

    }
)(withHeader)