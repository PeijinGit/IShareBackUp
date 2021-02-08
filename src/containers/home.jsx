import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import './home.scss'
import axios from 'axios'
import 'antd/dist/antd.css'

export default function DemoHome(props) {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const columns = [
        {
            title: 'No.',
            dataIndex: 'id'
        }, {
            title: 'Event Name',
            dataIndex: 'eventName'
        }
    ];

    useEffect(() => {
        var userId= localStorage["ishareToken"]
        axios.get("https://ishareapi.azurewebsites.net/Events/ListEventsById", {
            params: {
              id: userId
            },
          }).then((response) => {
            const res = response.data;
            setData(res)
        })
    }, [])

    return <div className={"home"}>
        <h1>Event Report</h1>
        <div className={"wrap"}>
            <p>Tips</p>
            <div className={"nav"}>
                <a href="#" className={index === 0 ? "checked" : ""} onClick={() => setIndex(0)}>ITEM1</a>
                <a href="#" className={index === 1 ? "checked" : ""} onClick={() => setIndex(1)}>ITEM2</a>
                <a href="#" className={index === 2 ? "checked" : ""} onClick={() => setIndex(2)}>ITEM3</a>
                <a href="#" className={index === 3 ? "checked" : ""} onClick={() => setIndex(3)}>ITEM4</a>
            </div>
            <Table bordered
                pagination={false}
                dataSource={data}
                columns={columns} />
        </div>

    </div>
}