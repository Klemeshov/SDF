import {Component} from "react";

const getNews = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Удивительная новость');
        }, 2000)
    })
}

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        getNews().then(res => this.setState({news: res}));
    }

    state = {
        news: null
    }

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillUpdate() {
        console.log('will update');
    }

    componentDidUpdate() {
        console.log('did update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        const {news} = this.state;
        console.log('render');

        if (news === null) return<div>Loading...</div>
        return <div>{news}</div>
    }
}

/*
constructor => componentWillMount => render => componentDidMount
                        |
                        v
shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate
                        |
                        v
componentWillUnmount
 */