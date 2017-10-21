import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/carousel.css';

export default class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentPosition: 0};
        this.carouselLeft = this.carouselLeft.bind(this);
        this.carouselRight = this.carouselRight.bind(this);
    }

    carouselLeft(e){
        if(this.state.currentPosition === 0){
            this.setState({currentPosition: this.props.images.length-1})
        }
        else{
            this.setState({currentPosition: this.state.currentPosition-1})
        }
    }

    carouselRight(e){
        if(this.state.currentPosition === this.props.images.length-1){
            this.setState({currentPosition: 0})
        }
        else{
            this.setState({currentPosition: this.state.currentPosition+1})
        }
    }
    render(){
        return(
            <div className='carousel'>
                <h2 className='carouselSkinName'>{this.props.skins[this.state.currentPosition].name} Skin</h2>
                <img src={this.props.images[this.state.currentPosition]} />
                <button className='carouselButton carouselLeft'onClick={this.carouselLeft}>Previous</button>
                <button className='carouselButton carouselRight'onClick={this.carouselRight}>Next</button>
            </div>
        )
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    skins: PropTypes.array.isRequired
}
