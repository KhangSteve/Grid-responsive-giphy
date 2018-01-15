/**
 * Created by Khang @Author on 15/01/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import  '../styles/MainSection.css';
import { connect } from 'react-redux';

class MainSection extends Component {

    static propTypes = {
        data : PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);

        this.state = {
            lightboxIsOpen : false
        }
    }

    gotoPrevious(){

    }

    gotoNext(){

    }

    closeLightbox(){

    }

    render() {
        return (
            <div className="main-section">Main Section
                <CardImage data={this.props.data}/>
            </div>
        );
    }
}
export default connect()(MainSection);