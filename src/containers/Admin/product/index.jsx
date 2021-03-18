import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, message, Table, Button, Modal, Form, Input, Select } from "antd";
import { getACbyPage, updateAcStatus, getACbySearch } from "../../../api";
const { Option } = Select;

export default class Product extends Component {
    state = {
        activityList: [],//ac list
        current: 1,
        isLoading: true,
        total: '',
        pageSize: 5,
        keyWord: '',
        searchType: 'productName',

    }

    formRef = React.createRef()

    componentDidMount() {
        this.getActivitiesList(1)
    }


    getActivitiesList = (e) => {
        this.setState({ isLoading: true })
        getACbyPage(e, 5).then((res) => {
            if (res.status === -1) {
                message.error(res.msg)
            } else {
                let acInfo = res.resultData[0]
                console.log(acInfo);
                message.success("Get AC Success",)
                this.setState({ isLoading: false })
                this.setState({
                    activityList: acInfo.activities.reverse(),
                    current: acInfo.pageNum,
                    total: acInfo.totalPages
                })
            }
        })
            .catch(function (error) {
                message.error("Get Event Fail", 1)
                console.log(error);
            });

    }

    updateActivityStatus = async ({ id, acStatus }) => {
        let newStatus = acStatus == 1 ? 0 : 1;
        console.log("newStatus: ", newStatus)
        let result = await updateAcStatus(id, newStatus);
        if (result === 1) {
            let activityList = [...this.state.activityList]
            //item present the element in acList(auto add parameter)
            activityList = activityList.map((item) => {
                if (item.id === id) {
                    item.acStatus = newStatus;
                }
                return item;
            })
            this.setState({ activityList })
            message.success("Update Success");
        } else {
            message.error('Update Fail')
        }
    }

    search = () => {
        this.setState({ isLoading: true })
        let { keyWord, searchType } = this.state

        getACbySearch(1, 5, keyWord, searchType).then((res) => {
            console.log("search: ", res)
            // if (res.status === -1) {
            //     message.error(res.msg)
            // } else {
            //     let acInfo = res.resultData[0]
            //     message.success("Get AC Success",)
            //      this.setState({ isLoading: false })
            //      this.setState({ 
            //          activityList: acInfo.activities.reverse(),
            //          current: acInfo.pageNum,
            //          total: acInfo.totalPages
            //         })
            // }
        })
            .catch(function (error) {
                message.error("Get Event Fail", 1)
                console.log(error);
            });
    }

    render() {
        const dataSource = this.state.activityList

        const columns = [
            {
                title: 'AC Name',
                dataIndex: 'acName',
                key: 'acName',
                width: '10%',
                align: 'center',
            },
            {
                title: 'Fee',
                dataIndex: 'esFee',
                key: 'esFee',
                width: '5%',
                align: 'center',
            },
            {
                title: 'Descript',
                dataIndex: 'descript',
                key: 'descript',
                width: '',
                align: 'center',
            },
            {
                title: 'Start Time',
                dataIndex: 'startDate',
                key: 'startDate',
                width: '10%',
                align: 'center',
                render: (startDate) => {
                    var sdate = startDate.split("T")
                    sdate.join(" ")
                    return sdate[0];
                }
            },
            {
                title: 'Status',
                //dataIndex: 'acStatus',
                key: 'acStatus',
                width: '15%',
                align: 'left',
                render: (item) => {
                    return (
                        <div>
                            <Button type={item.acStatus === 0 ? 'primary' : 'danger'}
                                onClick={() => this.updateActivityStatus(item)}
                            >{item.acStatus === 1 ? "On" : "Off"}</Button>
                            <span>{item.acStatus === 1 ? "Finish" : "OnGoing"}</span>
                        </div>)
                }
            },
            {
                title: 'Control',
                //dataIndex: 'id',
                key: 'Control',
                render: (text, record, index) => {
                    return <Button type="link" /*onClick={() => this.showUpdate(record)}*/>Update</Button>
                },
                width: '10%',
                align: 'center'
            },
        ]
        return (
            <div>
                <Card
                    title={
                        <div>
                            <Select defaultValue="productName" onChange={(value) => { this.setState(this.setState({ searchType: value })) }}>
                                <Option value="productName">Select by name</Option>
                                <Option value="productDesc">Select by desc</Option>
                            </Select>
                            <Input
                                style={{ margin: '0px 10px', width: '20%' }}
                                placeholder="Enter"
                                allowClear
                                onChange={(event) => { this.setState({ keyWord: event.target.value }) }}
                            ></Input>
                            <Button type="primary" onClick={this.search}>Search</Button>
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
                        pagination={{
                            total: this.state.total,
                            pageSize: this.state.pageSize,
                            current: this.state.current,
                            onChange: this.getActivitiesList
                        }}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}
