import React from 'react';

class GifSearch extends React.Component {
    state = {
        input: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>Search Gifs:</label> <br/>
                    <input 
                        type="text" 
                        name="input"
                        onChange={this.onInputChange}
                        value={this.state.input} 
                        />
                        <button type="submit" style={{backgroundColor: 'green', color: 'white'}}>Search</button>
                </form>
            </div>
        )
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.input)
    }

}

export default GifSearch;
