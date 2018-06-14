/**
 * Created by Martin on 2018/6/13.
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';
import ReactDOM from 'react-dom';
import {ThemeContext,themes} from '../Theme';
import Content from './Content';
import Home from './Home';

class Header2 extends Component {
    render() {
        return (
            <div id="header2"></div>
        );
    }
}

function tick() {
    const welcome = <Welcome name="测试？？？"/>
    const element = (
        <div>
            <h1>头部测试</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <div id="header3"></div>



            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/content" component={Content} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('header2')
    );

    ReactDOM.render(
        welcome,
        document.getElementById('header3')
    );
}

function Welcome(params) {
    console.log(themes.dark.foreground);
    const welcome = (
        <div>测试数据传递{params.name}</div>
    );
    return welcome;
}

setInterval(tick, 1000);
export default Header2;
