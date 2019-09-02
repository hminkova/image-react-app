import React from 'react';
import ReactDOM from 'react-dom';

import unsplash from './api/unsplash';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    onSearchTerm = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term
            }
        });

        this.setState({
            images: response.data.results
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar onSubmit={this.onSearchTerm} />
                <ImageList images={this.state.images} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);