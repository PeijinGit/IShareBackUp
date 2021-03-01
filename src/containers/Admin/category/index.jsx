import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, message, Table, Button, Modal, Form, Input } from "antd";
import { getEventsByUser, addEvent, updateEvent } from "../../../api";


class Category extends Component {
    state = {
        categoryList: [],//events list
        visible: false,
        operType: '',
        userId: this.props.userInfo.user.id,
        isLoading: true,
        modalCurentValue: 'test',
        modalCurentId: '',
    }

    formRef = React.createRef()

    componentDidMount() {
        this.getCateGoryList()
    }


    getCateGoryList = () => {
        getEventsByUser(7, 'ListEventsById').then((res) => {
            if (res.status === 401) {
                message.error(res.data)
            } else {
                message.success("Success", 1)
                this.setState({ isLoading: false })
                console.log(res);
                this.setState({ categoryList: res.reverse() })
            }
        })
            .catch(function (error) {
                message.error("Get Event Fail", 1)
                console.log(error);
            });

    }

    showUpdate = (item) => {
        let { id, eventName } = {...item}
        this.setState({
            operType: 'UPDATE',
            modalCurentValue: eventName,
            modalCurentId: id,
            visible: true,
        }, () => {
            this.formRef.current.setFieldsValue("eventName", this.state.modalCurentValue)
        })
    }

    showAdd = () => {
        this.setState({
            operType: 'ADD',
            visible: true,
            modalCurentValue:'',
            modalCurentId: '',
        })
    }

    toUpdate = (values) => {
        updateEvent(values).then((res) => {
            let { status, resultData, msg } = res
            if (status === 1) {
                this.getCateGoryList()
                this.setState({
                    visible: false
                })
            }
            if (status === -1) message.error('Update Fail')
        }).catch(
            errorInfo => {
                console.log("errorInfo")
                console.log(errorInfo)
                return
            }
        )
    }

    toAdd = (values) => {
        addEvent(values).then((res) => {
            console.log(res)
            let result = res
            const { status, resultData, msg } = result

            if (status === 1) {
                message.success(msg)
                let categoryList = [...this.state.categoryList]
                categoryList.unshift(resultData[0])
                this.setState({ categoryList })
            }
            if (status === -1) message.error('Add Fail')
        }).catch(
            errorInfo => {
                console.log("errorInfo")
                console.log(errorInfo)
                return
            }
        )
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value
        })
      }

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
                render: (text, record, index) => {
                    return <Button type="link" onClick={() => this.showUpdate(record)}>Update</Button>
                },
                width: '25%',
                align: 'center'
            },
        ]

        const handleOk = () => {
            let { operType } = this.state

            this.formRef.current.validateFields().then(values => {
                let { EventName } = values.event
                switch (operType) {
                    case 'ADD':
                        let { userId } = this.state
                        this.toAdd({ userId, EventName })
                        break;
                    case 'UPDATE':
                        let Id = this.state.modalCurentId
                        this.toUpdate({ Id, EventName })
                        break;
                    default:
                        break;
                }
                this.setState({ visible: false })

            }).catch(errorInfo => {
                console.log("errorInfo")
                console.log(errorInfo)
                return
            }
            )
        };

        const handleCancel = () => {
            this.setState({ visible: false })
            this.formRef.current.resetFields()

        };


        return (
            <div>
                <div>{ this.state.modalCurentValue }</div>
                <Card title="Default size card" extra={<Button onClick={this.showAdd}>ADD+</Button>} >
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        bordered
                        rowKey="id"
                        pagination={{ pageSize: 5, showQuickJumper: true }}
                        loading={this.state.isLoading}
                    >
                    </Table>
                </Card>
                <Modal
                    title={operType === 'ADD' ? 'ADD' : 'UPDATE'}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}

                >
                    <Form
                        name="nest-messages"
                        onFinish={this.onFinish}
                        ref={this.formRef}
                        initialValues={{'eventName': this.state.modalCurentValue}}
                    >
                        <Form.Item
                            name='eventName'
                            label="Event Name"
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
                            <Input
                                placeholder="Enter event name"
                            />
                            
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

let withCategory = withRouter(Category)

export default connect(
    state => ({
        isLogin: state.userInfo.isLogin,
        userInfo: state.userInfo,
    }),
    {

    }
)(withCategory)
