import React, { Component } from 'react'
import { Card, message, Table } from "antd";
import { getEventsByUser } from "../../../api";
import { Button } from 'bootstrap';


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
                //console.log(res.data);
                return res;
            }
        })
            .catch(function (error) {
                console.log(error);
            });
        if (response.status != 401) {
            this.setState({ categoryList: response })
        }
    }

    render() {

        //const dataSource = this.state.categoryList
        // const dataSource = [
        //     { id: 2, eventName: "BoardGame" },
        //     { id: 5, eventName: "Model Ma" },
        //     { id: 6, eventName: "Movie" }
        // ];
        // const columns = [
        //     {
        //         title: 'Event Name',
        //         dataIndex: 'eventName',
        //         key: 'eventName'
        //     },
        //     {
        //         title: 'Control',
        //         key: 'ctrl',
        //         render: (a) => { return <Button type="link"></Button> },
        //         width: '25%',
        //         align: 'center'
        //     },
        // ]

        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];


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
