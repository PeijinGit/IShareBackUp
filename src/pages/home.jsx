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
        var userId = props.location.props.userId;
        axios.get("https://localhost:44398/Events/ListEventsById", {
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
                <a className={index == 0 ? "checked" : ""} onClick={() => setIndex(0)}>ITEM1</a>
                <a className={index == 1 ? "checked" : ""} onClick={() => setIndex(1)}>ITEM2</a>
                <a className={index == 2 ? "checked" : ""} onClick={() => setIndex(2)}>ITEM3</a>
                <a className={index == 3 ? "checked" : ""} onClick={() => setIndex(3)}>ITEM4</a>
            </div>
            <Table bordered
                pagination={false}
                dataSource={data}
                columns={columns} />
            {/* <Link to={'/demo'} className="nav-link">回到首页</Link> */}
        </div>

    </div>
}