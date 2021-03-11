import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, message, Table, Button, Modal, Form, Input } from "antd";
import { getAllActivities } from "../../../api";

export default class Product extends Component {
    state = {
        categoryList: [],//ac list
        isLoading: true,
    }

    formRef = React.createRef()

    componentDidMount() {
        this.getActiviitiesList()
    }


    getCateGoryList = () => {
        getEventsByUser().then((res) => {
            if (res.data.status === 1) {
                message.error(res.data)
            } else {
                message.success("Success", 1)
                this.setState({ isLoading: false })
                this.setState({ categoryList: res.reverse() })
            }
        })
            .catch(function (error) {
                message.error("Get Event Fail", 1)
                console.log(error);
            });

    }

    render() {
        const dataSource = this.state.categoryList

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
        return (
            <div>
                <Card title="Default size card" extra={<Button onClick={console.log("tt")}>ADD+</Button>} >
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
            </div>
        )
    }
}
