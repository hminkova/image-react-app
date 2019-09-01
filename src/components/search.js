import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onChangeInput = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    onSubmitSearch = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitSearch}>
                <label htmlFor="search">
                    Search images: 
                </label>
                <input type="text" 
                    id="search" 
                    name="search"
                    value={this.state.term}
                    onChange={this.onChangeInput} />
                <button type="submit">
                    Search
                </button>
            </form>
        )
    }
}

export default Search;