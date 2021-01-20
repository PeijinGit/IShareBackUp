import React, {useState} from 'react'
import {Form,Input,Button} from 'antd'
import {useHistory} from "react-router-dom"
import axios from 'axios'
import 'antd/dist/antd.css'


export default function Login() {
    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
    const history = useHistory();
    return (
        <Form>
            <Form.Item>
                <Input 
                placeholder={"Enter your user name"} 
                type="text"
                onChange={(event)=>{
                    setName(event.target.value)
                }}/>
            </Form.Item>
            <Form.Item>
                <Input 
                placeholder={"Enter your user name"} 
                type="password"
                onChange={(event)=>{
                    setPwd(event.target.value)
                }}/>
            </Form.Item>
            <label>username:{name} pwd:{pwd} </label>
            <Button type={"primary"} onClick={()=>{
                validLogin(name,pwd,history)
            }}>

            Login</Button>
        </Form>
    )
}

function validLogin(name,pwd,history) {
    alert(name+" "+ pwd)
    history.push('/home')
    // return axios.get('',{
    //     params:{
    //         name, pwd
    //     }
    // })
}
