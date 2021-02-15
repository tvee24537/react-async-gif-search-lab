import React from 'react';

const GifList = (props) => {
    const gifs = props.gifs.map(gif => {
        return <img key={gif.id} src={gif.images.original.url} alt={gif.title}/>
    })

    return (
        <div>
            <ul>
                { gifs }
            </ul>
        </div>
    )
}

export default GifList; 