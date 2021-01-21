import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import 'antd/dist/antd.css'
import './login.scss'


export default function Login() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const history = useHistory();
    return (
        <div className="loginform">
            <div className="loginforminside">
                <Form className="">
                    <Form.Item>
                        <Input
                            placeholder={"Enter your user name"}
                            type="text"
                            onChange={(event) => {
                                setName(event.target.value)
                            }} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder={"Enter your user name"}
                            type="password"
                            onChange={(event) => {
                                setPwd(event.target.value)
                            }} />
                    </Form.Item>
                    <label>username:{name} pwd:{pwd} </label>
                    <Button type={"primary"} onClick={() => {
                        validLogin(name, pwd, history)
                    }}>
                        Login</Button>
                </Form>
            </div>
        </div>
    )
}

function validLogin(name, pwd, history) {
    // alert(name + " " + pwd)
    // history.push({
    //     pathname: 'home',
    //     props: {
    //         name
    //     }
    // })

    axios.post('https://localhost:44398/User/ValidateLogin', {
        username: name,
        password: pwd
    })
        .then((res) => {
            if (res.status == 214) {
                alert(res.data)
            } else if (res.status == 200) {
                alert("success")
                var userId = res.data
                history.push({
                    pathname: 'home',
                    props: {
                        userId
                    }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
