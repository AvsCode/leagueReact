import React from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentPosition: 0};
        this.changeImage = this.changeImage.bind(this);
    }
    changeImage(e){
        const increment = e.target.className === 'carouselLeft' ? -1 : 1;
        const position = this.state.currentPosition;
        const lastIndex = this.props.images.length - 1;
        if(position + increment > lastIndex){
            this.setState({currentPosition: 0});
        }
        else if(position + increment < 0){
            this.setState({currentPosition: lastIndex});
        }
        else{
            this.setState({currentPosition: position + increment});
        }
    }
    render(){
        return(
            <div className='carousel'>
                <h2 className='skinName'>{this.props.skins[this.state.currentPosition].name} Skin</h2>
                <img src={this.props.images[this.state.currentPosition]} />
                <button className='carouselLeft'onClick={this.changeImage}>Previous</button>
                <button className='carouselRight'onClick={this.changeImage}>Next</button>
            </div>
        )
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    skins: PropTypes.array.isRequired
}
