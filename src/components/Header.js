/**
 * Created by Martin on 2018/6/13.
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_top"></div>
                <div className="header_container">
                    <div className="logo_container">
                        <img src={logo} alt="" className="logo"/>
                        <div className="logo_text_container">
                            <span className="logo_name">某某教育</span>
                            <span className="logo_en_name">yourdomain.com</span>
                        </div>
                    </div>
                    <ul>
                        <li>网站首页</li>
                        <li>关于我们</li>
                        <li>课程设置</li>
                        <li>新闻活动</li>
                        <li>师资力量</li>
                        <li>在线报名</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
