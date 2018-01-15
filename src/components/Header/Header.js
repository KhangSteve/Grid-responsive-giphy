/**
 * Created by Khang @Author on 15/01/17.
 */

import React, { Component } from 'react'
import ResponsiveImage from './ResponsiveImage';

export default class Header extends Component {



    render() {
        return (
            <header >
                <ResponsiveImage
                    src={require('../../assets/header-login/header-bg-5.jpg')}
                    width={1920}
                    height={300} />
            </header>
        )
    }
}