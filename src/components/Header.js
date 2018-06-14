/**
 * Created by Martin on 2018/6/13.
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default Header;
