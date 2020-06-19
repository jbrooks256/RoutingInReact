import React from 'react';

export default class Films extends React.Component {
    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
    }

    render () {
        return <h1>These are films</h1>
    }
}