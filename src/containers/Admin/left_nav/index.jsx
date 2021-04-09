import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Menu } from 'antd';
import {
  MailOutlined,
} from '@ant-design/icons';
import {createSaveTitleAction } from '../../../redux/action_creators/menu_action';
import menuList from "../../../config/meun_config";
import "./left_nav.scss";

const { SubMenu } = Menu;
let myMenu = menuList


class left_nav extends Component {
  state = {
    collapsed: false,
  };
  // myMenu = menuList
  componentDidMount(){
    console.log(this.props.location.pathname.split('/').reverse()[0]);
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  createMenu = (target) => {
    return target.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon} onClick={()=>{this.props.saveTitle(item.title)}} >
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            icon={<MailOutlined />}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }>
            {this.createMenu(item.children)}
          </SubMenu>
        )
      }
    })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <header className='nav-header'>
          <img src="https://i.pinimg.com/originals/bf/08/74/bf08744ec6775655dcad2705ba2b4581.png" alt="" />
          <h1>Management </h1>
        </header>
        <Menu
          selectedKeys={this.props.location.pathname.indexOf('product') !== -1? 'product': this.props.location.pathname.split('/').reverse()[0]}
          defaultOpenKeys={this.props.location.pathname.split('/').splice(2)}
          mode="inline"
          theme="dark"
        >

          {
            this.createMenu(myMenu)
          }

        </Menu>
      </div>
    );
  }
}

let withLeftNav = withRouter(left_nav)

export default connect(
  state => ({ }),
  {
      saveTitle: createSaveTitleAction

  }
)(withLeftNav)
