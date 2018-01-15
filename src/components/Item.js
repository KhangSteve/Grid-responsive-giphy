/**
 * Created by Khang @Author on 15/01/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  '../styles/CardImageStyle.css'

export default class Item extends Component {
    static propTypes = {
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        name: PropTypes.string,
        responsiveType : PropTypes.string.isRequired,
        onClickItem : PropTypes.func,
        itemDetail : PropTypes.object.isRequired
    }

    constructor(props){
        super(props);

        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(){
        this.props.onClickItem(this.props.itemDetail);
    }

    render() {
        var width = 200;
        var height = 200;
        if (this.props.responsiveType === 'MOBILE'){
            width = 130;
            height = 130;
        }
        var username = (this.props.itemDetail.username === '') ? 'Gitphy Author ' : this.props.itemDetail.username;
        var urlImage = this.props.itemDetail.images.fixed_height_still.url;
        return (
            <div className="card-group-wrapper">
                <div className="card-wrapper" onClick={this.onClickItem}>
                    <div className="card">
                        <img src={urlImage} width={width} height={height} alt="data"/>
                    </div>
                </div>
                <div >
                    <h4 className="title-item-image">{username}</h4>
                </div>
            </div>

        );
    }
}