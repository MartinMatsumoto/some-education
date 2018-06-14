import React, {Component} from 'react';
import ReactSwipes from "react-swipes";
import './Banner.css';

var Dimensions = require('react-dimensions');

let banners = [{
    url: require('../../assets/banner1.jpg')
}, {
    url: require('../../assets/banner1.jpg')
}, {
    url: require('../../assets/banner1.jpg')
}];

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opt: {
                distance: props.containerWidth, // 每次移动的距离，卡片的真实宽度
                currentPoint: 1,// 初始位置，默认从0即第一个元素开始
                autoPlay: true, // 是否开启自动播放
                loop: true,
                widths: 100,
                transitionDuration : 5000,
                swTouchstart: (ev) => {

                },
                swTouchmove: (ev) => {

                },
                swTouchend: (ev) => {
                    let data = {
                        moved: ev.moved,
                        originalPoint: ev.originalPoint,
                        newPoint: ev.newPoint,
                        cancelled: ev.cancelled
                    };
                    this.setState({
                        curCard: ev.newPoint
                    })
                }
            },
            style: {
                width: props.containerWidth * banners.length
            }
        }
    }

    componentWillMount() {
        // swipes 的配置
        // this.props.containerWidth;

    }

    render() {
        return (
            // dom 部分
            // 三层滑动原理，动的是第二层
            // 第一层设置固定宽度 ，超过部分设置为不显示 overflow: hidden;
            //第二层设置为实际需要的宽度，即子div的n倍，有间距需要算上间距
            //第三层，实际item 内容的宽度
            <div className="banner_container">
                <div style={this.state.style}>
                    <ReactSwipes className="banner" options={this.state.opt}>
                        {banners.map((val, index) => (
                            <img src={val.url} key={index} className="item"/>
                        ))}
                    </ReactSwipes>
                </div>
            </div>
        );
    }
}

export default Dimensions()(Banner);