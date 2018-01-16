/**
 * Created by Khang @Author on 15/01/18.
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardImageStyle.css'
import RowImage from './RowImage';
const ItemList = require('../data/items');
import MediaQuery from 'react-responsive';
import GridItems from './GridItems';
import { fetchData } from '../actions/giphy';
import { connect } from 'react-redux';
import MediaPopup from './MediaPopup';

class CardImage extends Component {
    static propTypes = {
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        name: PropTypes.string,
        data: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
        this.onTurnOffPopup = this.onTurnOffPopup.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);

        this.state = {
            isOpenPopup: false,
            itemSelected: {},
            responsiveType : 'DESKTOP'
        }
    }

    onClickItem(item ,responsiveType) {
        this.setState({
            isOpenPopup: true,
            itemSelected: item,
            responsiveType : responsiveType
        })
    }

    onPrevious() {
        var currentIndex = this.props.data.data.findIndex(item => item.id === this.state.itemSelected.id);

        if (currentIndex > 0) {
            var previousItem = this.props.data.data[currentIndex - 1];
            this.setState({
                itemSelected: previousItem
            })
        }
    }

    onNext() {
        var currentIndex = this.props.data.data.findIndex(item => item.id === this.state.itemSelected.id);

        if (currentIndex < this.props.data.data.length) {
            var nextItem = this.props.data.data[currentIndex + 1];
            this.setState({
                itemSelected: nextItem
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    onTurnOffPopup() {
        this.setState({
            isOpenPopup: false
        })
    }


    seperateGroupItems() {
        var data = ItemList.items;

        var rowList = [];
        var items = [];
        for (var i in data) {
            if (i % 4 === 0 && items.length > 0) {
                rowList.push(items);
                items = [];
            }
            items.push(data[i]);
        }
        if (items.length > 0) {
            rowList.push(items);
        }

        var finalResult = [];

        // Push row 
        finalResult.push(rowList);

        // Put item remain
        finalResult.push(items);

        return finalResult;
    }

    renderGrid() {
        var rowList = this.seperateGroupItems()[0];
        var groupItems = this.seperateGroupItems();
        let grid = rowList.map((item, i) => {
            return (
                <RowImage groupItems={groupItems} />
            );
        })

        return (
            <div>
                {grid}
            </div>
        );
    }

    renderTestMediaQuery() {
        return (
            <div>
                <div>Device Test!</div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div>You are a desktop or laptop</div>
                    <MediaQuery query="(min-device-width: 1824px)">
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1224px)">
                        <div>You are sized like a tablet or mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <div>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div>You are portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div>You are landscape</div>
                </MediaQuery>
                <MediaQuery query="(min-resolution: 2dppx)">
                    <div>You are retina</div>
                </MediaQuery>
            </div>
        );
    }

    renderResponsiveGrid() {
        var groupItems = this.props.data.data;
        return (
            <div>
                <MediaQuery minDeviceWidth={1224}>
                    <MediaQuery minDeviceWidth={1824}>
                        <GridItems groupItems={groupItems} responsiveType={'DESKTOP'} onClickItem={this.onClickItem} />
                    </MediaQuery>
                </MediaQuery>

                <MediaQuery minDeviceWidth={700} maxDeviceWidth={1024} maxDeviceHeight={1366}>
                    <GridItems groupItems={groupItems} responsiveType={'TABLET'} onClickItem={this.onClickItem} />
                </MediaQuery>

                <MediaQuery maxDeviceWidth={600}>
                    <GridItems groupItems={groupItems} responsiveType={'MOBILE'} onClickItem={this.onClickItem} />
                </MediaQuery>
            </div>
        );
    }

    render() {
        let screenRender = <div></div>;
        if (!this.state.isOpenPopup) {
            screenRender = this.renderResponsiveGrid();
        } else {
            screenRender = <MediaPopup item={this.state.itemSelected} onOpen={this.state.isOpenPopup}
                onBack={this.onTurnOffPopup} onPrevious={this.onPrevious} onNext={this.onNext}
                responsiveType={this.state.responsiveType}/>
        }
        return (
            <div>
                {screenRender}
            </div>
        );
    }
}
export default connect()(CardImage);