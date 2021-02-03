import React, { Component } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'
import './login.scss'


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pwd: ""
        }
    }

    validLogin(name, pwd, history, controllerName) {
        axios.post(`/User/${controllerName}`, {
            Username: name,
            Password: pwd
        })
            .then((res) => {
                if (res.status === 401) {
                    alert(res.data)
                } else if (res.status === 200) {
                    alert("success")
                    console.log(res.data);
                    localStorage["ishareToken"] = res.data.id
                    history.push({
                        pathname: 'home'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    responseFacebook = (response) => {
        this.validLogin(response.name,'0', this.props.history, 'ThirdPartyLogin');
    }


    responseGoogle = (response) => {
        var res = response.profileObj;
        this.validLogin(res.name,'0', this.props.history, 'ThirdPartyLogin');
    };

    render() {
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
                            alert();
                        }}>
                            Login</Button>
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
