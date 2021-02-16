import React, { Component } from 'react'
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
import { baseurl } from "../../config";
import { Layout } from 'antd';
import myAxios from "../../api/myAxios";
import Category from "./category";
import Header from "../Header";
import Home from "./home";
import Line from "./line";
import Pie from "./pie";
import Product from "./product";
import Role from "./role";
import User from "./user";
import Bar from "./bar";
import './admin.scss'
import 'antd/dist/antd.css'

const {  Footer, Sider, Content } = Layout;

class Admin extends Component {

    componentDidMount() {
        //console.log(this.props)
    }

    clearLocal = () => {
        alert("clear")
        this.props.deleteUserInfo()
    }

    acquireEvents = () => {
        myAxios.get(baseurl + 'Events/GetAllEvents', {
            params: {
                id: 7
            },
        })
            .then((res) => {
                console.log(res.data);
                if (res.status === 215) {
                    alert("Please login first")
                } else if (res.status === 214) {
                    alert("Login Expire")
                    this.props.deleteUserInfo()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        // const { isLogin } = this.props.userInfo
        // alert("Admin: " + isLogin)
        // if (isLogin === false) {
        //     alert("No login info");
        //     return <Redirect to="/login" />
        // }
        return (
            // <div>
            //     admin:{this.props.userInfo.user.id}
            //     <button onClick={this.clearLocal}>clear</button>
            //     <button onClick={this.acquireEvents}>sendTest</button>
            // </div>
            <Layout className="admin">
                <Sider className="sider">Sider</Sider>
                <Layout>
                    <Header className="herader">Header</Header>
                    <Content className="content">
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/prod_about/category" component={Category}/>
                                <Route path="/admin/prod_about/product" component={Product}/>
                                <Route path="/admin/user" component={User}/>
                                <Route path="/admin/role" component={Role}/>
                                <Route path="/admin/bar" component={Bar}/>
                                <Route path="/admin/line" component={Line}/>
                                <Route path="/admin/pie" component={Pie}/> 
                                <Redirect to='/admin/home' />
                            </Switch>
                    </Content>
                    <Footer className="footer">Footer</Footer>
                </Layout>
            </Layout>

        )
    }
}

export default connect(
    state => ({ userInfo: state.userInfo }),
    {
        deleteUserInfo: createDeleteUserInfoAction
    }
)(Admin)
