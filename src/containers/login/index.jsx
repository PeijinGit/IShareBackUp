import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import { createSaveUserInfoAction } from "../../redux/action_creators/login_action";
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'
import './login.scss'
import { baseurl } from "../../config";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pwd: ""
        }
    }

    validLogin = (name, pwd, history, controllerName) => {
        axios.post(baseurl+`User/${controllerName}`, {
            Username: name,
            Password: pwd
        })
            .then((res) => {
                if (res.status === 401) {
                    alert(res.data)
                } else if (res.status === 200) {
                    alert("success")
                    console.log(res.data);
                    
                    this.props.saveUserInfo({ user: res.data })
                    history.replace({
                        pathname: 'admin'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    responseFacebook = (response) => {
        this.validLogin(response.name, '0', this.props.history, 'ThirdPartyLogin')

    }


    responseGoogle = (response) => {
        var res = response.profileObj;
        let { name } = res
        this.validLogin(name, '0', this.props.history, 'ThirdPartyLogin')
    };

    render() {
        if(this.props.isLogin) {
            return<Redirect to="admin"/>
        }

        return (
            <div className="loginform">
                <div className="loginforminside">
                    <h1>IShare</h1>
                    <Form className="">
                        <Form.Item>
                            <Input
                                placeholder={"Enter your user name"}
                                type="text"
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder={"Enter your password"}
                                type="password"
                                onChange={(event) => {
                                    this.setState({
                                        pwd: event.target.value
                                    })
                                }} />
                        </Form.Item>
                        <Button type={"primary"} onClick={() => {
                            this.validLogin(this.state.username, this.state.pwd, this.props.history, 'ValidateLogin')

                        }}>
                            Login</Button>
                            <a href="/register">Register</a>
                    </Form>
                    <br />
                    <div>
                        <GoogleLogin
                            clientId="102184357281-t48ucmknrp1bej38l2mi8di15qd7e0c3.apps.googleusercontent.com"
                            isSignedIn={false}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle} >

                        </GoogleLogin>
                    </div>
                    <div>
                        <FacebookLogin
                            appId="429868371665377"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({isLogin:state.userInfo.isLogin}),
    {
        saveUserInfo: createSaveUserInfoAction

    }
)(Login)
