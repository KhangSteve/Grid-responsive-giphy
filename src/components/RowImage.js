/**
 * Created by Khang @Author on 15/01/17.
 */

import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default class RowImage extends Component {
    static propTypes={
        groupItems : PropTypes.array.isRequired,
        id : PropTypes.number.isRequired,
        responsiveType : PropTypes.string.isRequired,
        onClickItem : PropTypes.func,
    }

    constructor(props){
        super(props);
        this.onClickItem=this.onClickItem.bind(this);
    }

    onClickItem(item){
        this.props.onClickItem(item);
    }

    renderItemsPerRow() {
        
        var rowData= this.props.groupItems[0][this.props.id];
        const dataImages=rowData.map((item)=> 
        <Item name={item.id} 
              responsiveType={this.props.responsiveType} onClickItem={this.onClickItem}
              itemDetail={item}/>);

        return (
            <div className="card-wrapper-parent">
                {dataImages}
            </div>
        );
    }

    

    render() {
        return (
            <div className="card-wrapper-parent-column">
                {this.renderItemsPerRow()}
            </div>
        );
    }
}