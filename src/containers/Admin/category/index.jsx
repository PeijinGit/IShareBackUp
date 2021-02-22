import React, { Component } from 'react'
import { Card, message, Table, Button } from "antd";
import { getEventsByUser } from "../../../api";


export default class Category extends Component {
    state = {
        categoryList: []//events list

    }
    componentDidMount() {
        this.getCateGoryList()
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
                render: (a) => <Button type="link">Delete</Button>,
                width: '25%',
                align: 'center'
            },
        ]

        return (

            <div>

                <Card title="Default size card" extra={<a href="#" >More</a>} >
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        bordered
                        rowKey="id"
                    >
                    </Table>
                </Card>

            </div>
        )
    }
}
