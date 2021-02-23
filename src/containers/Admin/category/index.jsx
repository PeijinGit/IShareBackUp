import React, { Component } from 'react'
import { Card, message, Table, Button,Modal } from "antd";
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

    showUpdate=()=> {
        this.setState({visible: true})
    }

    showAdd() {

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
                render: (a) => <Button type="link" onClick={ this.showUpdate}>Update</Button>,
                width: '25%',
                align: 'center'
            },
        ]



        const showModal = () => {
            this.setState({visible: true})
        };

        const handleOk = () => {
            this.setState({visible: false})
        };

        const handleCancel = () => {
            this.setState({visible: false})
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
                    title={operType === 'add' ? 'ADD' : 'UPDATE'}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}

                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
