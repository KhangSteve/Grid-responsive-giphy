/**
 * Created by Khang @Author on 15/01/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  '../styles/MediaPopup.css';

export default class MediaPopup extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onOpen: PropTypes.bool,
        onClose: PropTypes.func,
        onBack: PropTypes.func,
        onPrevious: PropTypes.func,
        onNext: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onBack = this.onBack.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onBack() {
        this.props.onBack();
    }

    onPrevious() {
        this.props.onPrevious();
    }

    onNext() {
        this.props.onNext();
    }



    render() {

        var urlImage = this.props.item.images.original.url;

        var width = 600;
        var height = 600;

        if (this.props.responsiveType === 'MOBILE') {
            width = 300;
            height = 300;
            return (
                <div className="media-wrapper">
                    <h2>{this.props.item.title}</h2>
                    <div className="group-button">
                        <button className="button-action" onClick={this.onPrevious}>Previous</button>
                        <button className="button-back" onClick={this.onBack}>Back</button>
                        <button className="button-action" onClick={this.onNext}>Next</button>
                    </div>
                    <div className="media-group">
                        <img src={urlImage} width={width} height={height} alt="data"></img>
                    </div>
                </div>
            );
        } else {
            if (this.props.responsiveType === 'TABLET') {
                width = 400;
                height = 400;
            }

            return (
                <div className="media-wrapper">
                    <h2>{this.props.item.title}</h2>
                    <div>
                        <button className="button-back" onClick={this.onBack}>Back</button>
                    </div>
                    <div className="media-group">
                        <button className="button-action" onClick={this.onPrevious}>Previous</button>
                        <img src={urlImage} width={width} height={height} alt="data"></img>
                        <button className="button-action" onClick={this.onNext}>Next</button>
                    </div>

                </div>
            );
        }


    }
}