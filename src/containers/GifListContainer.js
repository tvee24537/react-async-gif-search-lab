import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const apiKey = 'OlQP081X7tYz2eZHVFPs11Gf51iCEUbN'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.getGifs()
    }

    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs} /> <br/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    getGifs = (query = 'dolphin') => {
        return ( 
            fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`)
                .then(response => response.json())
                .then(object => {
                    this.setState({
                        gifs: object.data.splice(0, 3)
                    }) 
                })
        )
    }

}

export default GifListContainer; 