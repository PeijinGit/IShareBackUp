import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import { Button, Card, List } from 'antd'
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import './detail.scss'
const { Item } = List


class Detail extends Component {

    state = {
        id:'',
        descript:'',
        detail:'',
        img:'',
        acName:'',
        esFee:''
    }

    componentDidMount(){
        const reduxACList = this.props.productList
        //get id in URL??
        const {id} = this.props.match.params
        let result = reduxACList.find((item)=>{return item.id === id})

        if(result){
            const {descript,detail,img,acName,esFee} = result;
            this.setState({descript,detail,img:"/images/yzl.jpg",acName,esFee});
        }
        
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card title={
                        <div className="left-top">
                            <Button type = "link" size="small" onClick={()=>{this.props.history.goBack()}}>
                                <ArrowLeftOutlined />
                            </Button>
                            <span>Product Detail</span>
                        </div>
                    } >
                    <List>
                        <Item>
                            <span className="prod-name">ProudctDes:</span>
                            <span className="prod-content">{this.state.acName}</span> 
                        </Item>
                    </List>
                    <List>
                        <Item>
                            <span className="prod-name">ProudctDes:</span>
                            <span className="prod-content">{this.state.descript}</span> 
                        </Item>
                    </List>
                    <List>
                        <Item>
                            <span className="prod-name">ProudctDes:</span>
                            <span className="prod-content">{this.state.detail}</span> 
                        </Item>
                    </List>
                    <List>
                        <Item>
                            <span className="prod-name">ProudctDes:</span>
                            <span className="prod-content">{this.state.esFee}</span> 
                        </Item>
                    </List>
                    <List>
                        <Item>
                            <span className="prod-name">ProudctPic:</span>
                            <span className="prod-content">

                                <img src={this.state.img} alt=""/>
                            </span>
                        </Item>
                    </List>
                </Card>
            </div>
        )
    }
}

let withHeader = withRouter(Detail)

export default connect(
    state => ({
        productList:state.productList
    }),
    {

    }
)(withHeader)
