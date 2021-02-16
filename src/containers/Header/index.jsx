import React, { Component } from 'react'
import { Button } from "antd";
import {
    FullscreenOutlined
} from '@ant-design/icons';
import './header.scss'

export default class header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-top">
                    <Button size='small'>
                        <FullscreenOutlined />
                    </Button>
                    <span className="username">Welcome Num:</span>
                    <Button type='link'>Logout</Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        XXXChart
                    </div>
                    <div className="header-bottom-right">
                        4443-12-33 11:22:33
                        <img src="https://cdn3.iconfinder.com/data/icons/gundam-twotone/48/Cartoons__Anime_Gundam_Artboard_2-128.png" alt="weather Info"/>
                        Sunny 2~ -12
                    </div>
                </div>
            </header>
        )
    }
}
