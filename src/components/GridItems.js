/**
 * Created by Khang @Author on 15/01/17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RowImage from './RowImage';

export default class GridItems extends Component {

    static propTypes = {
        responsiveType: PropTypes.string.isRequired,
        groupItems: PropTypes.array.isRequired,
        onClickItem : PropTypes.func
    }

    constructor(props){
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(item){
        this.props.onClickItem(item , this.props.responsiveType);
    }

    getElementsPerRow(){
        var elementsPerRow = 4;
        if (this.props.responsiveType === 'DESKTOP'){
            elementsPerRow = 4;
        } else if (this.props.responsiveType === 'TABLET'){
            elementsPerRow = 3;
        } else if (this.props.responsiveType === 'MOBILE'){
            elementsPerRow = 2;
        }
        return elementsPerRow;
    }

    seperateGroupItems() {
        var data = this.props.groupItems;
        var elementsPerRow = this.getElementsPerRow();

        var rowList = [];
        var items = [];
        for (var i in data) {
            if (i % elementsPerRow === 0 && items.length > 0) {
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

    render() {
        var rowList = this.seperateGroupItems()[0];
        var groupItems = this.seperateGroupItems();
        let grid = rowList.map((item, i) => {
            return (
                <RowImage groupItems={groupItems} id={i} 
                responsiveType={this.props.responsiveType} onClickItem={this.onClickItem}/>
            );
        })

        return (
            <div>
                {grid}
            </div>
        );
    }


}