import React from 'react';

export default class People extends React.Component {
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
    }
    
    render () {
        return <h1>These are people</h1>
    }
}