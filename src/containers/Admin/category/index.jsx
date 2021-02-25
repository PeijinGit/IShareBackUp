import React, { Component } from 'react'
import { Card, message, Table, Button, Modal, Form, Input } from "antd";
import { getEventsByUser } from "../../../api";


export default class Category extends Component {
    state = {
        categoryList: [],//events list
        visible: false,
        operType: '',

    }
    componentDidMount() {
        this.getCateGoryList()
    }

    showUpdate = () => {
        this.setState({
            operType: 'UPDATE',
            visible: true
        })

    }

    showAdd = () => {
        this.setState({
            operType: 'ADD',
            visible: true
        })
    }

    getCateGoryList = () => {
        let response = getEventsByUser(7, 'ListEventsById').then((res) => {
            if (res.status === 401) {
                message.error(res.data)
            } else {
                message.success("Success", 1)
                console.log(res);
                this.setState({ categoryList: res })
                //return res;
            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    onFinish = (values) => {
        // RegisterUser(values.user, "UserRegister")
        //   .then((res) => {
        //     if (res.status === 208) {
        //       alert(res.data)
        //     } else if (res.status === 200) {
        //       alert(res.data)
        //       this.props.history.replace({
        //         pathname: 'login'
        //       })
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    };

    render() {

        const dataSource = this.state.categoryList
        let { visible, operType } = this.state;

        const columns = [
            {
                title: 'Event Name',
                dataIndex: 'eventName',
                key: 'eventName'
            },
            {
                title: 'Control',
                dataIndex: 'id',
                key: 'Control',
                render: (a) => <Button type="link" onClick={this.showUpdate}>Update</Button>,
                width: '25%',
                align: 'center'
            },
        ]

        const handleOk = () => {
            let {operType} = this.state
            switch(operType) {
                case'ADD':
                    break;
                case'UPDATE':
                    break;
                default:
            }
            this.setState({ visible: false })
        };

        const handleCancel = () => {
            this.setState({ visible: false })
            //this.props.form.resetFields()
        };

        return (
            <div>

                <Card title="Default size card" extra={<Button onClick={this.showAdd}>More</Button>} >
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        bordered
                        rowKey="id"
                    >
                    </Table>
                </Card>
                <Modal
                    title={operType === 'ADD' ? 'ADD' : 'UPDATE'}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}

                >
                    <Form name="nest-messages" onFinish={this.onFinish} >
                        <Form.Item
                            name={['user', 'Username']}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Event Name Needed'
                                },
                                {
                                    pattern: /^[A-Za-z0-9]{3,7}$/,
                                    message: ' 3-7 letter and num'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
