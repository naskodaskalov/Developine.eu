import React, {Component} from 'react'
import './PhotoLibrary.css'

class PhotoLibrary extends Component {
    render() {
        let images = []
        for (let i = 1; i <= 503; i++) {
            images.push(
                <div key={i}>
                    <div className='image-number'>
                        <p>{i}.</p>
                    </div>
                    <img src={`${require(`../photolibrary/images/untitled-${i}.jpg`)}`}/>
                </div>
            )
        }
        return (
            <div>
                <div className='images'>
                    {images}
                </div>
            </div>
        )
    }
}

export default PhotoLibrary
