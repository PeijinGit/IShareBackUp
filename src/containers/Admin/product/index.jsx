import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, message, Table, Button, Modal, Form, Input ,Select} from "antd";
import { getAllActivities } from "../../../api";
const {Option} = Select;

export default class Product extends Component {
    state = {
        categoryList: [],//ac list
        isLoading: true,
    }

    formRef = React.createRef()

    componentDidMount() {
        this.getActiviitiesList()
    }


    getActiviitiesList = () => {
        getAllActivities().then((res) => {
            
            if (res.status === -1) {
                message.error(res.data)
            } else {
                message.success("Get Event Success", 1)
                this.setState({ isLoading: false })
                this.setState({ categoryList: res.resultData.reverse() })
                console.log(this.state.categoryList)
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
                title: 'AC Name',
                dataIndex: 'acName',
                key: 'acName'
            },
            {
                title: 'Start Time',
                dataIndex: 'startDate',
                key: 'startDate',
                render:(startDate)=>{
                   var sdate = startDate.split("T")
                   return sdate;
                }
            },
            {
                title: 'End Time',
                dataIndex: 'endDate',
                key: 'endDate'
            },
            {
                title: 'Status',
                dataIndex: 'id',
                key: 'Control',
                render: (text, record, index) => {
                    return <Button type="link" /*onClick={() => this.showUpdate(record)}*/>Update</Button>
                },
                width: '25%',
                align: 'center'
            },
            {
                title: 'Control',
                dataIndex: 'id',
                key: 'Control',
                render: (text, record, index) => {
                    return <Button type="link" /*onClick={() => this.showUpdate(record)}*/>Update</Button>
                },
                width: '25%',
                align: 'center'
            },
        ]
        return (
            <div>
                <Card 
                title={
                    <div>

                        <Select defaultValue="name">
                            <Option value="name">Select by name</Option>
                            <Option value="desc">Select by desc</Option>
                        </Select>
                        <Input style={{margin:'0px 10px', width:'20%'}} placeholder="Enter" allowClear></Input>
                        <Button type="primary">Search</Button>
                    </div>
                }
                extra={
                    <Button onClick={console.log("")}>ADD+</Button>
                } >
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
