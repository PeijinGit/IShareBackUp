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

const { SubMenu, Item } = Menu;
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
          defaultSelectedKeys={this.props.location.pathname.split('/').reverse()[0]}
          defaultOpenKeys={this.props.location.pathname.split('/').splice(2)}
          mode="inline"
          theme="dark"
        >
          {/* <Menu.Item key={myMenu[0].key}  >
            <Link to={myMenu[0].path}>
              <span>{myMenu[0].title}</span>
            </Link>
          </Menu.Item> */}

          {
            this.createMenu(myMenu)
          }


          {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}

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
