/**
 * Created by Martin on 2018/6/13.
 */
import React from 'react';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                <p>内容哟</p>
                <p>{this.state.name}+{this.state.count}</p>
                <button onClick={this.onButtonClick}>还没试过按钮</button>
            </div>
        );
    }

    componentDidMount() {
        console.log(1);
        this.setState({
            count: 0
        });
        this.timerID = setInterval(()=>{this.tick(),1000});
    }

    componentWillUnmount() {
        console.log(2);
    }

    tick() {
        var this_ = this;
        this.setState({
            count: this_.state.count += 1
        });
    }

    onButtonClick(e) {
        alert(1);
        e.preventDefault();
        alert(2);
    }

}

export default Content;