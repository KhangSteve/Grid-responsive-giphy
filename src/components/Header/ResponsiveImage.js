/**
 * Created by Khang @Author on 15/01/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ResponsiveImage extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number
    }

    render() {
        var width = this.props.width;
        var height = this.props.height;
        var src = this.props.src;

        return (
            <div
                style={{
                    width,
                }}
                className="responsive-image">
                <div style={{
                    paddingBottom: (height / width * 100) + '%'
                }} />
                <img
                    src={src}
                    className="responsive-image__image"
                    alt={"data"} />
            </div>
        );
    }
}
