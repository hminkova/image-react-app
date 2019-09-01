import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Search from './components/search';

class App extends React.Component {
    onSearchTerm = (term) => {
        console.log(term);

        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID ffd6f5feab4395361eb86c92e4370cc3ec24680de4cdeae8a939a65625a82c69'
            }
        });
    }

    render() {
        return (
            <Search onSubmit={this.onSearchTerm}/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);