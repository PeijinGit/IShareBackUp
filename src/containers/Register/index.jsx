import React, { Component } from 'react'
import './index.scss'
import { Form, Input, Button } from 'antd';
import { RegisterUser } from "../../api";
const layout = {
  labelCol: {
    span: 8,
    offset: -20
  },
  wrapperCol: {
    span: 16,
  },
};

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      pwd: '111'
    }
  }

  onFinish = (values) => {
    console.log(values.user)
    RegisterUser(values.user, "UserRegister")
      .then((res) => {
        if (res.status === 208) {
          alert(res.data)
        } else if (res.status === 200) {
          alert(res.data)
          this.props.history.replace({
            pathname: 'login'
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="main">
        {/* <button onClick={this.testAxios}>Test</button> */}
        <Form {...layout} name="nest-messages" onFinish={this.onFinish} >
          <Form.Item
            name={['user', 'Username']}
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter a user name'
              },
              {
                pattern: /^[A-Za-z0-9]{3,7}$/,
                message: ' 3-7 letter and num'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'Password']}
            label="Password"
            rules={[
              {
                required: true,
                message: 'Enter password'
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={['user', 'passwordAgain']}
            label="passwordAgain"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Confirm password'
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
